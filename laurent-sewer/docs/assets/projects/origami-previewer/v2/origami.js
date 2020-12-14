var colors = [];
var singlelog = true;
var shematypenumber;
var scale = 200;
var addX = 0;
var addY = 0;
var memX = -1;
var memY = -1;
var mousedown = false;
var newsvg = $("#svg").attr("xmlns:svg","http://www.w3.org/2000/svg").attr("xmlns","http://www.w3.org/2000/svg");
var colorsNumbers = [];
var click = false;
var interior = false;
var themes = [];
var indexRotation = 0;
var rotation = [190, 190, 190]
var rotations = []
var solidPoints = [];
var ctrlPressed = false;
var charge = false;

var sqrtCalcul

$(document).ready(function() {
    document.onkeydown = checkKey;
    $(window).keydown(function(evt) {
    if (evt.which == 17) { // ctrl
        ctrlPressed = true;
    }
    }).keyup(function(evt) {
    if (evt.which == 17) { // ctrl
        ctrlPressed = false;
    }
    });
    shematypenumber = "rand30";
    colors = [];
    $.each($("#color_zone .colors button"), function (i, val) { 
        colors.push(val.textContent);
    });
    //colors = [$("#color1")[0].textContent, $("#color2")[0].textContent, $("#color3")[0].textContent, $("#color4")[0].textContent, $("#color5")[0].textContent,$("#color6")[0].textContent, $("#color7")[0].textContent, $("#color8")[0].textContent, $("#color9")[0].textContent, $("#color10")[0].textContent, $("#color11")[0].textContent,$("#color12")[0].textContent, $("#color13")[0].textContent, $("#color14")[0].textContent, $("#color15")[0].textContent, $("#color16")[0].textContent, $("#color17")[0].textContent,$("#color18")[0].textContent, $("#color19")[0].textContent, $("#color20")[0].textContent, $("#color21")[0].textContent, $("#color22")[0].textContent, $("#color23")[0].textContent,$("#color24")[0].textContent, $("#color25")[0].textContent, $("#color26")[0].textContent, $("#color27")[0].textContent, $("#color28")[0].textContent, $("#color29")[0].textContent,$("#color30")[0].textContent];
    
    rotations = [
        [90, 45, 0, 0, 0, 50],
        [80, 50, 0, 0, 0, 250],
        [60, 60, 0, 0, 300, 320],
        [100, 45, 0, 0, 0,0],
        [60,45,230,10,220,120],
        [40,40,-90,-180,100,-320],
        [100,339,0,0,0,0],
        [50,40,-10,0,340,400],
        [100,0,0,-13,0,0],
        [70,50,50,50,0,0],
        [55,-35,0,0,-80,100],
        [65,65,0,-20,30,10],
        [120,-90,0,0,0,0],
        [100,0,180,0,0,0],
        [50,50,180,0,-240,320],
        [100,0,0,0,0,0],
        [100,0,0,0,0,0],
        [100,0,0,0,0,0],
        [100,0,0,0,0,0],
        [100,0,0,0,0,0],
        [100,0,0,0,0,0],
        [100,0,0,0,0,0],
        [100,0,0,0,0,0],
        [100,0,0,0,0,0],
        [100,0,0,0,0,0],
        [100,0,0,0,0,0]
    ];
    $("input[type=range]").on("input", function(){

        setTimeout(refreshView(), 0);
    });
    $("#select_color button, #color_zone button").each( function (){
        $(this).css("background-color", $(this)[0].innerHTML);
    });
    $("#select_color button").click(function (e) { 
        $(".selected").text($(this)[0].textContent);
        $(".selected").css("background-color",$(this)[0].textContent);
        $.each($(".selected"), function (i,val) { 
            
            colors[val.dataset["num"]] = val.textContent;
        });
        setShema();
        refreshView();
    });
    $("#color_zone button").click(function (e) { 
        if (!ctrlPressed) $("#color_zone button").removeClass("selected");
        $(this).addClass("selected");
    });
    loadShema($("#color_option_zone label.checked").data("value"));
    setShema(); 
    setup();
    refreshView();
    //setInterval(refreshView, 10);
    //DrawSolid($(":radio:checked").val());
    changeNumbers();
    $("#svg").css("background-color", $("#color_background").val());

   
    $(".range_value").each(function(){
        $(this).html($("#"+$(this).data("labelfor")).val());
    });
    $(document).on('input', '[type=range]', function() {
        $("label[data-labelfor="+$(this).data("value")+"]").html($(this).val());
    });
    $(document).on("change", ".colors input[type=color]", function(){
        colors[$(this).data("num")] = $(this).val();
        setShema();
        refreshView();
    });
    $("#color_option_zone label").on("click", function(){
         $("#color_option_zone label").removeClass("checked");
         $(this).addClass("checked");
        shematypenumber = $(this).data("value");
        loadShema($(this).data("value"));
        changeNumbers();
        setShema();
        refreshView();
    });
    
    $(document).on("change", "#color_background", function(){
        $(this).val();
    });

    $("label").onselectstart = new Function ("return false");
    
    if(window.sidebar)
    {
        $("label").on("mousedown", function(){return false;});
        $("label").on("click", function(){return true;});
    }

});
function loadShema(shema_radio){
    $(".colors").hide();
    shematypenumber =  shema_radio;
    setShema();
    switch (colorsNumbers.length){
        case 30:
        $("#color30, #color29, #color28, #color27, #color26, #color25, #color24, #color23, #color22, #color21, #color20, #color19, #color18, #color17, #color16").parent().show();
        case 15:
        $("#color15, #color14, #color13, #color12, #color11").parent().show();
        case 10:
        $("#color10").parent().show();
        case 9:
        $("#color9").parent().show();
        case 8:
        $("#color8").parent().show();
        case 7:
        $("#color7").parent().show();
        case 6:
        $("#color6").parent().show();
        case 5:
        $("#color5").parent().show();
        case 4:
        $("#color4").parent().show();
        case 3:
        $("#color3").parent().show();
        case 2:
        $("#color2").parent().show();
        case 1:
        $("#color1").parent().show();
        break;
    }
   
}
function checkKey(e) {
    var event = window.event ? window.event : e;
   
    if(event.keyCode == 37){
        changeRotation(-1);
    }
    if(event.keyCode == 39){
        changeRotation(1);
    }
}

function changeRotation(i){
    if(!charge){

        charge = true;
        
        indexRotation+=i;
        if(indexRotation<0)indexRotation=rotations.length-1;
        indexRotation%=rotations.length;
        // $("#svg").css("background-image", "url(bk_view/background"+(indexRotation+1)+".png");
        //refreshView(); 
        $('#svg').fadeToggle(50);
        setTimeout(function(){
            $('#svg').css("background-image", "url(bk_view/background" + (indexRotation+1) +".png)");
            refreshView();
            $('#svg').fadeToggle(100);
        }, 200) 


        $("#x_div").toggle([,8,9,11,12,13,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].includes(indexRotation));
        $("#y_div").toggle([,3,6,8,9,11,12,13,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].includes(indexRotation));
        $("#z_div").toggle([,8,9,11,12,13,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].includes(indexRotation));
        $("#range_div").toggle([12,13,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].includes(indexRotation));
        $("#color_background_div").toggle([0,1,3,4,5,6,8,9,11,13,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].includes(indexRotation));

        setTimeout(function() {charge = false }, 500);
    }
}

function setup() {
    GenerateSolid();
    points_icosaedre = [];
    points_dodecaedre = [];
    rX = [], rY = [], rZ = [];
    pointsico = [];
}

function refreshView() {
    //FindRotations(rotations[indexRotation]);
    rotation = rotations[indexRotation];
    DrawSolid();
}
function rotate (point) {
    range_x = $("#x").is(":visible")?($("#x").val()*1.0):0;
    range_y = $("#y").is(":visible")?($("#y").val()*1.0):0;
    range_z = $("#z").is(":visible")?($("#z").val()*1.0):0;
    range_size = $("#size").is(":visible")?($("#size").val()/50):1;

    var pt = {}, rad = (Math.PI/180);
    /* Translation */
    pt.x = (point[0]) - rotation[4];
    pt.y = (point[1]) - rotation[5];
    pt.z = (point[2]) - 0;

    /* Rotation */
    pt.rx = ((range_x+rotation[1])-180)*rad;//rotation[0]
    pt.ry = ((range_y+rotation[2])-180)*rad;
    pt.rz = ((range_z+rotation[3])-180)*rad;

    pt.kx = pt.x*(Math.cos(pt.ry)*Math.cos(pt.rz))+pt.y*(((-Math.sin(pt.rx))*(-Math.sin(pt.ry)))*Math.cos(pt.rz)+Math.cos(pt.rx)*Math.sin(pt.rz))+pt.z*((Math.cos(pt.rx)*(-Math.sin(pt.ry)))*Math.cos(pt.rz)+Math.sin(pt.rx)*Math.sin(pt.rz));
    pt.ky = pt.x*(Math.cos(pt.ry)*(-Math.sin(pt.rz)))+pt.y*(((-Math.sin(pt.rx))*(-Math.sin(pt.ry)))*(-Math.sin(pt.rz))+Math.cos(pt.rx)*Math.cos(pt.rz))+pt.z*((Math.cos(pt.rx)*(-Math.sin(pt.ry)))*(-Math.sin(pt.rz))+Math.sin(pt.rx)*Math.cos(pt.rz));
    pt.kz = pt.x*Math.sin(pt.ry)+pt.y*((-Math.sin(pt.rx))*Math.cos(pt.ry))+pt.z*(Math.cos(pt.rx)*Math.cos(pt.ry));
    pt.x = pt.kx; pt.y = pt.ky; pt.z = pt.kz;
    /* Z-Buffer - Distance */
    pt.vLen = Math.sqrt(pt.x*pt.x + pt.y*pt.y + pt.z*pt.z);
    /* Projection */ //200 = fov 600 = distance
    pt.f = ((8*range_size)*rotation[0]) / ((1200 + pt.z) || 1);
    pt.px = pt.x * pt.f;
    pt.py = pt.y * -pt.f;
    //pt.vLen *= (pt.z >= 0 ? 1 : -1);
    /* Callback */
    return [pt.px,pt.py,pt.z];
}


function DrawSolid() { 
    var svg = $("#svg").clone();
    svg.empty();
    $("#icosaedre_zone").empty();
    
      $.each(solidPoints, function (index, points) { 
        
        z = moyenneZ([rotate(points.c_p)]);
        /*centre1*/svg.append(DrawFaces([rotate(points.a_p ),rotate(points.b_p ),rotate(points.c_p ),rotate(points.d_p ),rotate(points.a_n)],z,shema[index]));
        /*c1*/     //svg.append(DrawLine(rotate(points.a_p), rotate(points.b_p ),z,shema[index]));
        /*c1*/     svg.append(DrawLine(rotate(points.a_c),rotate(points.c_p ),z,shema[index]));
        /*c1*/     //svg.append(DrawLine(rotate(points.c_p), rotate(points.d_p ),z,shema[index]));
        /*c1*/     //svg.append(DrawLine(rotate(points.c_p), rotate(points.a_n),z,shema[index]));
        /*c1c2*/   svg.append(DrawLine(rotate(points.a_n),rotate(points.a_p ),z,shema[index]));
        /*c1,m1*/  svg.append(DrawLine(rotate(points.a_n),rotate(points.d_p ),z,shema[index]));
        
        z = moyenneZ([rotate(points.c_n)]);
        /*centre2*/svg.append(DrawFaces([rotate(points.a_n),rotate(points.b_n),rotate(points.c_n),rotate(points.d_n),rotate(points.a_p )],z,shema[index]));
        /*c2*/     //svg.append(DrawLine(rotate(points.a_n),rotate(points.b_n),z,shema[index]));
        /*c2*/     svg.append(DrawLine(rotate(points.c_n),rotate(points.a_c),z,shema[index]));
        /*c2*/     svg.append(DrawLine(rotate(points.c_n),rotate(points.a_p ),z,shema[index]));
        /*c2*/     svg.append(DrawLine(rotate(points.c_n),rotate(points.d_n),z,shema[index]));
        /*c2,m2*/  svg.append(DrawLine(rotate(points.d_n),rotate(points.a_p ),z,shema[index]));
        
    /**/   z = moyenneZ([rotate(points.f_p)]);
        /*milieu1*/svg.append(DrawFaces([rotate(points.d_p ),rotate(points.g_p ),rotate(points.i_p ),rotate(points.h_p ),rotate(points.f_p ),rotate(points.e_p),rotate(points.a_n)],z,shema[index]));
        /*m1*/    svg.append(DrawLine(rotate(points.e_p), rotate(points.a_n),z,shema[index]));
        /*m1*/    //svg.append(DrawLine(rotate(points[8]), rotate(points.e_p ),z,shema[index]));
        /*m1*/    svg.append(DrawLine(rotate(points.h_p), rotate(points.f_p ),z,shema[index]));
        /*m1*/    svg.append(DrawLine(rotate(points.d_p), rotate(points.h_p ),z,shema[index]));
        /*m1*/    svg.append(DrawLine(rotate(points.g_p), rotate(points.i_p ),z,shema[index]));
        /*m1,p1*/  svg.append(DrawLine(rotate(points.h_p), rotate(points.i_p ),z,shema[index]));
        
    /**/   z = moyenneZ([rotate(points.f_n)]);
        /*milieu2*/svg.append(DrawFaces([rotate(points.a_p ),rotate(points.d_n),rotate(points.g_n),rotate(points.i_n),rotate(points.h_n),rotate(points.f_n),rotate(points.e_n)],z,shema[index]));
        /*m2*/     svg.append(DrawLine(rotate(points.a_p), rotate(points.e_n),z,shema[index]));
        /*m2*/     //svg.append(DrawLine(rotate(points.e_n),rotate(points.f_n),z,shema[index]));
        /*m2*/     svg.append(DrawLine(rotate(points.f_n),rotate(points.h_n),z,shema[index]));
        /*m2*/     svg.append(DrawLine(rotate(points.d_n),rotate(points.h_n),z,shema[index]));
        /*m2*/     svg.append(DrawLine(rotate(points.g_n),rotate(points.i_n),z,shema[index]));
        /*m2,p2*/  svg.append(DrawLine(rotate(points.h_n),rotate(points.i_n),z,shema[index]));
        
        z = moyenneZ([rotate(points.k_p)]);
        /*pointe1*/svg.append(DrawFaces([rotate(points.i_p ),rotate(points.j_p ),rotate(points.h_p )],z,shema[index]));
        /*p1*/     //svg.append(DrawLine(rotate(points.h_p), rotate(points.j_p ),z,shema[index]));
        /*p1*/     //svg.append(DrawLine(rotate(points.j_p), rotate(points.i_p ),z,shema[index]));
        
        z = moyenneZ([rotate(points.k_n)]);
        /*pointe2*/svg.append(DrawFaces([rotate(points.j_n),rotate(points.i_n),rotate(points.h_n)],z,shema[index]));
        /*p2*/     //svg.append(DrawLine(rotate(points.j_n),rotate(points.i_n),z,shema[index]));
        /*p2*/     //svg.append(DrawLine(rotate(points.h_n),rotate(points.j_n),z,shema[index]));
    });
  
        var wrapper = svg; 
        
        singlelog = false;    
        
        wrapper.find('line, polygon').sort(function(a, b) {
            return -a.dataset.z - -b.dataset.z ;
        }).appendTo(wrapper);
        $("#icosaedre_zone").append(wrapper);
}
function setShema(){
    switch(shematypenumber){
        case "unic1":shema=[colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0]];colorsNumbers = [30]; break;
        
        case "grad2":shema=[colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1]];colorsNumbers = [15,15]; break;
        case "line2":shema=[colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0]];colorsNumbers = [20,10];  break;
        case "rand2":shema=shuffleArray([colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1]]);colorsNumbers = [15,15];  break;
    
        case "grad3":shema=[colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2]];colorsNumbers = [10,10,10];  break;
        case "rand3":shema=shuffleArray([colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2]]);colorsNumbers = [10,10,10];  break;
        case "dgra3":shema=[colors[0],colors[0],colors[0],colors[0],colors[0],colors[1],colors[1],colors[1],colors[1],colors[1],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[1],colors[1],colors[1],colors[1],colors[1],colors[0],colors[0],colors[0],colors[0],colors[0]]; colorsNumbers = [10,10,10];  break;
        
        case "line4":shema=[colors[1],colors[1],colors[2],colors[2],colors[0],colors[0],colors[2],colors[1],colors[0],colors[3],colors[2],colors[0],colors[0],colors[1],colors[0],colors[2],colors[0],colors[0],colors[1],colors[0],colors[0],colors[2],colors[1],colors[0],colors[3],colors[1],colors[1],colors[2],colors[2],colors[0]];colorsNumbers = [12,8,8,2];   break;
        case "grad4":shema=[colors[0],colors[0],colors[0],colors[0],colors[0],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[3],colors[3],colors[3],colors[3],colors[3]]; colorsNumbers = [5,10,10,5];  break;
        case "rand4":shema=shuffleArray([colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[3],colors[3],colors[3],colors[3],colors[3],colors[3],colors[3]]);colorsNumbers = [8,8,7,7]; break;
        
        case "zone5":shema=[colors[1],colors[1],colors[2],colors[2],colors[0],colors[2],colors[3],colors[4],colors[1],colors[0],colors[3],colors[4],colors[3],colors[4],colors[0],colors[3],colors[4],colors[3],colors[4],colors[0],colors[2],colors[3],colors[4],colors[1],colors[0],colors[1],colors[1],colors[2],colors[2],colors[0]];colorsNumbers = [6,6,6,6,6]; break;
        case "mixe5":shema=[colors[0],colors[1],colors[2],colors[3],colors[4],colors[0],colors[1],colors[2],colors[3],colors[4],colors[0],colors[1],colors[2],colors[3],colors[4],colors[0],colors[1],colors[2],colors[3],colors[4],colors[0],colors[1],colors[2],colors[3],colors[4],colors[0],colors[1],colors[2],colors[3],colors[4]];colorsNumbers = [6,6,6,6,6]; break;
        case "rand5":shema=shuffleArray([colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[1],colors[1],colors[1],colors[1],colors[1],colors[1],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[3],colors[3],colors[3],colors[3],colors[3],colors[3],colors[4],colors[4],colors[4],colors[4],colors[4],colors[4]]);colorsNumbers = [6,6,6,6,6]; break;
        case "grad5":shema=[colors[0],colors[0],colors[0],colors[0],colors[0],colors[1],colors[1],colors[1],colors[1],colors[1],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[2],colors[3],colors[3],colors[3],colors[3],colors[3],colors[4],colors[4],colors[4],colors[4],colors[4]];colorsNumbers = [5,5,10,5,5]; break;

        case "grad6":shema=[colors[0],colors[0],colors[0],colors[0],colors[0],colors[1],colors[1],colors[1],colors[1],colors[1],colors[2],colors[2],colors[2],colors[2],colors[2],colors[3],colors[3],colors[3],colors[3],colors[3],colors[4],colors[4],colors[4],colors[4],colors[4],colors[5],colors[5],colors[5],colors[5],colors[5]];colorsNumbers = [5,5,5,5,5,5];  break;
        case "rand6":shema=shuffleArray([colors[0],colors[0],colors[0],colors[0],colors[0],colors[1],colors[1],colors[1],colors[1],colors[1],colors[2],colors[2],colors[2],colors[2],colors[2],colors[3],colors[3],colors[3],colors[3],colors[3],colors[4],colors[4],colors[4],colors[4],colors[4],colors[5],colors[5],colors[5],colors[5],colors[5]]);colorsNumbers = [5,5,5,5,5,5];  break;

        case "line7":shema=[colors[1],colors[1],colors[3],colors[3],colors[0],colors[0],colors[3],colors[1],colors[0],colors[6],colors[5],colors[2],colors[2],colors[4],colors[2],colors[5],colors[2],colors[2],colors[4],colors[2],colors[0],colors[3],colors[1],colors[0],colors[6],colors[1],colors[1],colors[3],colors[3],colors[0]]; colorsNumbers = [6,6,6,6,2,2,2]; break;
        
        case "grad8":shema=[colors[2],colors[3],colors[6],colors[6],colors[4],colors[7],colors[5],colors[1],colors[1],colors[5],colors[4],colors[7],colors[6],colors[1],colors[0],colors[3],colors[0],colors[1],colors[6],colors[7],colors[0],colors[2],colors[6],colors[6],colors[2],colors[4],colors[5],colors[1],colors[1],colors[3]]; colorsNumbers = [3,6,3,3,3,3,6,3]; break;

        case "zone9":shema=[colors[1],colors[1],colors[2],colors[2],colors[0],colors[2],colors[3],colors[4],colors[1],colors[0],colors[5],colors[6],colors[3],colors[4],colors[0],colors[3],colors[4],colors[5],colors[6],colors[0],colors[7],colors[5],colors[6],colors[8],colors[0],colors[8],colors[8],colors[7],colors[7],colors[0]]; colorsNumbers = [6,3,3,3,3,3,3,3,3]; break;
    
        case "grad10":shema=[colors[0],colors[0],colors[1],colors[2],colors[3],colors[4],colors[5],colors[1],colors[0],colors[3],colors[2],colors[6],colors[7],colors[4],colors[3],colors[6],colors[2],colors[1],colors[5],colors[8],colors[5],colors[4],colors[7],colors[9],colors[8],colors[9],colors[9],colors[7],colors[6],colors[8]];colorsNumbers = [3,3,3,3,3,3,3,3,3,3]; break;
        case "mixe10":shema=[colors[0],colors[1],colors[2],colors[3],colors[4],colors[5],colors[6],colors[7],colors[8],colors[9],colors[10],colors[11],colors[12],colors[13],colors[14],colors[10],colors[11],colors[12],colors[13],colors[14],colors[5],colors[6],colors[7],colors[8],colors[9],colors[0],colors[1],colors[2],colors[3],colors[4]];colorsNumbers = [3,3,3,3,3,3,3,3,3,3]; break;
        case "rand10":shema=shuffleArray([colors[0],colors[0],colors[0],colors[1],colors[1],colors[1],colors[2],colors[2],colors[2],colors[3],colors[3],colors[3],colors[4],colors[4],colors[4],colors[5],colors[5],colors[5],colors[6],colors[6],colors[6],colors[7],colors[7],colors[7],colors[8],colors[8],colors[8],colors[9],colors[9],colors[9]]);colorsNumbers = [3,3,3,3,3,3,3,3,3,3]; break;
    
        case "mixe15":shema=[colors[0],colors[1],colors[2],colors[3],colors[4],colors[5],colors[6],colors[7],colors[8],colors[9],colors[10],colors[11],colors[12],colors[13],colors[14],colors[10],colors[11],colors[12],colors[13],colors[14],colors[5],colors[6],colors[7],colors[8],colors[9],colors[0],colors[1],colors[2],colors[3],colors[4]];colorsNumbers = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]; break;
        
        case "rand30":shema=[colors[0],colors[1],colors[2],colors[3],colors[4],colors[5],colors[6],colors[7],colors[8],colors[9],colors[10],colors[11],colors[12],colors[13],colors[14],colors[15],colors[16],colors[17],colors[18],colors[19],colors[20],colors[21],colors[22],colors[23],colors[24],colors[25],colors[26],colors[27],colors[28],colors[29]];colorsNumbers = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; break;
    }
}
function shuffleArray(array) {      
    var i= array.length, temp, index;  
    while (i > 0) {  
        index = Math.floor(Math.random() * i);  
        i--;  
        temp = array[i];          
        array[i] = array[index];          
        array[index] = temp;      
    }    
    return array;    
}     
function numberToHex(num){
    hexString = num.toString(16);
    if (hexString.length % 2) {
    hexString = '0' + hexString;
    }
    return hexString;
}

function DrawFaces(points,z, color){
    points_string = "";
    $.each(points, function (i, point) { 
        points_string+=(point[0]/scale*150+250)+','+(point[1]/scale*150+250);
        if (i<points.length)points_string+=' ';
    });
    return $(document.createElementNS('http://www.w3.org/2000/svg','polygon')).attr({points:points_string}).attr('data-z',z).css("fill", color);
}
function DrawLine(v1, v2, z, color) {
    return $(document.createElementNS('http://www.w3.org/2000/svg','line'))
    .attr({
        x1:v1[0]/scale*150+250,
        y1:v1[1]/scale*150+250,
        x2:v2[0]/scale*150+250,
        y2:v2[1]/scale*150+250,
        "stroke-width":1
    }).attr('data-z',z-0.001).css("stroke", "black");
}
function moyenneZ(points){
    z = 0;
    $.each(points, function (i, value) { 
        z+= value[2];
    });
    return z/points.length;
}

function makeSVG(tag, attrs) {
    var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs)
        el.setAttribute(k, attrs[k]);
    return el;
}
function sortobject(array, i){
    array.sort(compare);
    return array;
}
function compare(a, b) {
    const za = a[0];
    const zb = b[0];
    
    let comparison = 0;
    if (za > zb) {
        comparison = 1;
    } else if (za < zb) {
        comparison = -1;
    }
    return -1* comparison;
}
function changeColor(element){
    $("#svg").css("background-color", element.value)
}
function changeNumbers(){
    $(".color_label").each(function(index) {
        $(this).text(colorsNumbers[index]);
    });
}