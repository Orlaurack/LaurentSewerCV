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
var url = "colors_themes.xml";
$(document).ready(function() {
    window.addEventListener("dragover",function(e){
        e = e || event;
        e.preventDefault();
    },false);
    window.addEventListener("drop",function(e){
        e = e || event;
        e.preventDefault();
    },false);

    chargepolygon();
    shematypenumber = "rand30";
    colors = [$("#color1").val(), $("#color2").val(), $("#color3").val(), $("#color4").val(), $("#color5").val(),$("#color6").val(), $("#color7").val(), $("#color8").val(), $("#color9").val(), $("#color10").val(), $("#color11").val(),$("#color12").val(), $("#color13").val(), $("#color14").val(), $("#color15").val(), $("#color16").val(), $("#color17").val(),$("#color18").val(), $("#color19").val(), $("#color20").val(), $("#color21").val(), $("#color22").val(), $("#color23").val(),$("#color24").val(), $("#color25").val(), $("#color26").val(), $("#color27").val(), $("#color28").val(), $("#color29").val(),$("#color30").val()];
    setShema(); 
    setup();
    loop()
    setInterval(loop, 1000/60);
    loadShema($(":radio:checked").val());
    changeNumbers();
    chargeXML();
    
    $("#svg").css("background-color", $("#color_background").val());
    
    $('#drop-files').on('change', function(e) {
        $("#fileName").val($(this).val().split('\\').pop());
    });	
    $("#valideUrl").on("click", function(){
        url = $("#fileUrl").val()+$("#fileUrl").val()!=""?"\\":""+ $("#fileName").val();
        chargeXML();
        changeTheme();
    });
	$('#drop-files').on('drop dragleave', function() {
		$(this).removeClass("highlight");
		return false;
	});
	$('#drop-files').on('dragenter dragover', function() {
		$(this).addClass("highlight");
		return false;
	});
   
    $(".range_value").each(function(){
        $(this).html($("#"+$(this).data("labelfor")).val());
    });
    $(document).on('input', '[type=range]', function() {
        $("label[data-labelfor="+$(this).data("value")+"]").html($(this).val());
    });
    $(document).on("change", ".colors input[type=color]", function(){
        colors[$(this).data("num")] = $(this).val();
        setShema();
    });
    $(document).on("click", ":radio", function(){
        loadShema($(this).val());
        changeNumbers();
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
    
    function chargeXML(){
        /*$.ajax({
            url: url,
            type: "POST",
            dataType: "xml",
            success: function (xml) {
                themes = [];
                $("#color_theme_select").empty();
                $.each(xml.documentElement.children, function (index, value) { 
                    $("#color_theme_select").append(new Option(value.attributes[0].value, index));//select text selection
                    themes.push(value.children);
                });
            },
            error: function () {
                console.log("call failled: "+url);
            }
        });*/
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {if (this.readyState == 4 && this.status == 200) setSelect(this.responseXML);};
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    
    $("#color_theme_select").change(function(){changeTheme($(this).val())});
});
$("#icosaedre_zone").on("click", function () {
   $(this).resize(function () { 
       
   }); 
});
function setSelect(xml){

    themes = [];

    $("#color_theme_select").empty();

    $.each(xml.getElementsByTagName("theme"), function (index, value) { 
        $("#color_theme_select").append(new Option(value.attributes.name.value, index));//select text selection
        themes.push(value);
    });
}

function changeTheme(index = 0) {
    theme=themes[index];

    
    $(".colors input[type=color]").each(function(index){
        if(theme.getElementsByTagName("color").length>=index){
            $(this).val(theme.getElementsByTagName("color")[index].textContent);
            colors[index] = theme.getElementsByTagName("color")[index].textContent;
        }
        else{
            $(this).val("#000000");
            colors[index] = "#000000";
        }
    });
    if(theme.getElementsByTagName("color_option").length==1){
        shematypenumber = theme.getElementsByTagName("color_option")[0].textContent;
    }
    if(theme.getElementsByTagName("settings").length>0){
        /*settings = ["rangeSpeed","only_axe_y","stroke_width","view_interior_lines","view_external_lines","view_faces","alpha_faces","alpha_lines","num_view","view_color_lines","view_color_lines_exterior","view_color_faces","background","length_pike","size","view_letter","x","y","z"]
      
        settings.forEach(value => {
            if(theme.getElementsByTagName("settings")[0].getElementsByTagName(value).length==1)
            {
               // $("#"+value).checked(theme.getElementsByTagName("settings")[0].getElementsByTagName(value)[0].textContent);
                $("#"+value).val(theme.getElementsByTagName("settings")[0].getElementsByTagName(value)[0].textContent);
            }                
     
        });*/
        $(".range_value").each(function(value){
            $(this).html($("#"+$(this).data("labelfor")).val());
            if($(".range_value[data-labelFor="+value+"]").length == 1){
                $(".range_value[data-labelFor="+value+"]")[0].innerText = theme.getElementsByTagName("settings")[0].getElementsByTagName(value)[0].textContent;
            }
        });
        $("#view_option_zone input[type=checkbox]").each(function(value){
            if(theme.getElementsByTagName("settings")[0].getElementsByTagName($(this)[0].id) == 1)
            $(this).prop('checked', theme.getElementsByTagName("settings")[0].getElementsByTagName($(this)[0].id).innerText);
        });

        if(theme.getElementsByTagName("color_option").length ==1){
            $("#"+theme.getElementsByTagName("color_option")[0].textContent).prop( "checked", true );
            loadShema(theme.getElementsByTagName("color_option")[0].textContent);
        }

    }
   /*if("<settings>" in theme){
        console.log("yess");
        $("#svg").css("background-color", theme["settings"]["background"].textContent);
        $("#color_background").val(theme[30].textContent);
    }*/


    setShema();
    
}
function saveTheme(){
   
 /*
     theme = $('<theme></theme>').attr("name", $("#theme_name").val());
    $(".colors input[type=color]").each(function(index, value){
        theme.append($("<color></color>").text(value.value));
    });
    theme.append($("<background></background>").text($("#color_background").val()));
    $.ajax({
        url: url,
        type: "POST",
        dataType: "xml",
        data: "<themes><theme name=\"r\"><color>#f00000</color><color>#000000</color><background>#000000</background></theme></themes>",
        success: function(){
            console.log("save sucessfully");
        },
        error: function () {
            console.log("save failled");
        }
    });
    newXMLtheme = "";
   

    console.log(newXMLtheme);*/



    /*
    xmlDoc = loadXMLDoc (url);
    x = xmlDoc.GetElementsByTagName("theme")[2].childNodes[2].nodeValue = "666";
    */
    
} 
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
            $("#color9,#color8").parent().show();
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
function setup() {
    /*cx.translate(c.width/2, c.height/2);*/
    icosaedre = [];
    externeline = []
    rX = [], rY = [], rZ = [];
    angle = 0;
    pointsico = [];
}
function loop() {
    if($(document).width()<1100)$("#color_option_zone").css("margin-top", ($("#icosaedre_zone").height()+5));
    else{
        $("#color_option_zone").css("margin-top",0);
        $("#icosaedre_zone").css("height", "")
    } 
    //rect(-c.width/2,-c.height/2,c.width,c.height,'black');
    angle += $("#rangeSpeed").val()/1000;
    findRotations(angle);
    getIcosaedre(scale);
    names_ico = ["A","B","C","D","E","F","G","H","I","J","K","L"];
    name_ext = ["ABC", "ABG", "AEG", "AEI", "ACI", "BFG", "BFH", "BCH", "CDH", "CDI", "DIK", "DJK", "DJH", "ELK", "EIK", "EGL", "FHJ", "FGL", "FJL", "JKL"];

    pointsico = translateTo2D(rX, icosaedre, names_ico);
    pointsext = translateTo2D(rX, externeline, name_ext);

    pointsico = translateTo2D(rY, pointsico, names_ico);
    pointsext = translateTo2D(rY, pointsext, name_ext); 

    pointsico = translateTo2D(rZ, pointsico, names_ico);
    pointsext = translateTo2D(rZ, pointsext, name_ext);

    drawLines(pointsico, pointsext);
}
function projectedMatMul(projection, array) { // multiplies projection matrix with target matrix
    var result = [0, 0, 0];
    for(var i=0; i<array.length; i++) {
        for(var j=0; j<projection.length; j++) { 
            result[j] += Math.floor(array[i] * projection[j][i]);
        }
    }
    return result;
}
function translateTo2D(projection, array, names) { //transforms multiple pointsico
    var result = {};
    for(var i=0; i<Object.keys(array).length; i++) { 
        result[names[i]]=(projectedMatMul(projection, array[names[i]]));  
    }
    return result;
}
function findRotations(angle) { //gets rotation matrixes
    checked = $("#only_axe_y").is(":checked");
    
    x=$("#x").val()/100;
    y=$("#y").val()/100;
    z=$("#z").val()/100;
    
    rX = [
    [1, 0, 0],
    [0, Math.cos(checked?-x:angle), -Math.sin(checked?-x:angle)],
    [0, Math.sin(checked?-x:angle), Math.cos(checked?-x:angle)]
    
    ];
    rY = [
    [Math.cos(angle+y), 0, Math.sin(angle+y)],
    [0, 1, 0],
    [-Math.sin(angle+y), 0, Math.cos(angle+y)]
    ];
    rZ = [
    [Math.cos(checked?-z:angle), -Math.sin(checked?-z:angle), 0],
    [Math.sin(checked?-z:angle), Math.cos(checked?-z:angle), 0],
    [0, 0, 1]
    ];
}
function getIcosaedre(scale) { // gets icosaedre coordinates
    var size =  $("#size").val()/60;
    distance = (((Math.sqrt(5)+1)/2)*scale/2)*size;
    demiscale = (scale/2)*size;
        
    icosaedre = {
        A:[0, -demiscale, -distance],
        B:[0, demiscale, -distance],
        C:[-distance, 0, -demiscale],
        D:[-distance, 0, demiscale],
        E:[demiscale, -distance, 0],
        F:[demiscale, distance, 0],
        G:[distance, 0, -demiscale],
        H:[-demiscale, distance, 0],
        I:[-demiscale, -distance, 0],
        J:[0, demiscale, distance],
        K:[0, -demiscale, distance],
        L:[distance, 0, demiscale]
    };
    externeline = {
        ABC:moyenne3Point([icosaedre.A,icosaedre.B,icosaedre.C]),
        ABG:moyenne3Point([icosaedre.A,icosaedre.B,icosaedre.G]),
        AEG:moyenne3Point([icosaedre.A,icosaedre.E,icosaedre.G]),
        AEI:moyenne3Point([icosaedre.A,icosaedre.E,icosaedre.I]),
        ACI:moyenne3Point([icosaedre.A,icosaedre.C,icosaedre.I]),
        BFG:moyenne3Point([icosaedre.B,icosaedre.F,icosaedre.G]),
        BFH:moyenne3Point([icosaedre.B,icosaedre.F,icosaedre.H]),
        BCH:moyenne3Point([icosaedre.B,icosaedre.C,icosaedre.H]),
        CDH:moyenne3Point([icosaedre.C,icosaedre.D,icosaedre.H]),
        CDI:moyenne3Point([icosaedre.C,icosaedre.D,icosaedre.I]),
        DIK:moyenne3Point([icosaedre.D,icosaedre.I,icosaedre.K]),
        DJK:moyenne3Point([icosaedre.D,icosaedre.J,icosaedre.K]),
        DJH:moyenne3Point([icosaedre.D,icosaedre.J,icosaedre.H]),
        ELK:moyenne3Point([icosaedre.E,icosaedre.L,icosaedre.K]),
        EIK:moyenne3Point([icosaedre.E,icosaedre.I,icosaedre.K]),
        EGL:moyenne3Point([icosaedre.E,icosaedre.G,icosaedre.L]),
        FHJ:moyenne3Point([icosaedre.F,icosaedre.H,icosaedre.J]),
        FGL:moyenne3Point([icosaedre.F,icosaedre.G,icosaedre.L]),
        FJL:moyenne3Point([icosaedre.F,icosaedre.J,icosaedre.L]),
        JKL:moyenne3Point([icosaedre.J,icosaedre.K,icosaedre.L])

    }
}
function moyenne3Point(points){        
    length = ($("#length_pike").val())/100+0.35;
    result = [((points[0][0]+points[1][0]+points[2][0])*length),
                ((points[0][1]+points[1][1]+points[2][1])*length),
                ((points[0][2]+points[1][2]+points[2][2])*length)];
                
    return result;
}
function drawLines(array1, array2) { //connects all pointsico in the right order
    showline1= $("#view_interior_lines").is(":checked");
    showline2=$("#view_external_lines").is(":checked");
    showface=$("#view_faces").is(":checked");
    showletters=$("#view_letter").is(":checked");
    //
    arrayline1 = [];
    arrayline2 = [];
    arrayfaces = [];
    arrayletters = []; 

    numView = $("#num_view").val()-1;
    $(".interior").hide();
    $(".external").hide();
    $(".face").hide();
    $(".letter").hide();
    
    if(showletters){
        arrayletters = [array1.A,array1.B,array1.C,array1.D,array1.E,array1.F,array1.G,array1.H,array1.I,array1.J,array1.K,array1.L];
        $.each(arrayletters, function( index, value ) {
            drawLetter("letter-"+index, value);
        });
    }
    if (showline1){
        arrayline1 = [[array1.A[2] + array1.B[2], array1.A, array1.B, shema[0]], [array1.A[2] + array1.C[2], array1.A, array1.C, shema[1]],[array1.A[2] + array1.I[2], array1.A, array1.I, shema[2]],[array1.A[2] + array1.E[2], array1.A, array1.E, shema[3]],[array1.A[2] + array1.G[2], array1.A, array1.G, shema[4]],[array1.E[2] + array1.I[2], array1.E, array1.I, shema[5]],[array1.E[2] + array1.G[2], array1.E, array1.G, shema[6]],[array1.B[2] + array1.G[2], array1.B, array1.G, shema[7]],[array1.B[2] + array1.C[2], array1.B, array1.C, shema[8]],[array1.C[2] + array1.I[2], array1.C, array1.I, shema[9]],[array1.C[2] + array1.D[2], array1.C, array1.D, shema[10]],[array1.K[2] + array1.I[2], array1.K, array1.I, shema[11]],[array1.L[2] + array1.E[2], array1.L, array1.E, shema[12]],[array1.F[2] + array1.G[2], array1.F, array1.G, shema[13]],[array1.B[2] + array1.H[2], array1.B, array1.H, shema[14]],[array1.L[2] + array1.G[2], array1.L, array1.G, shema[15]],[array1.B[2] + array1.F[2], array1.B, array1.F, shema[16]],[array1.H[2] + array1.C[2], array1.H, array1.C, shema[17]],[array1.D[2] + array1.I[2], array1.D, array1.I, shema[18]],[array1.K[2] + array1.E[2], array1.K, array1.E, shema[19]],[array1.F[2] + array1.H[2], array1.F, array1.H, shema[20]],[array1.D[2] + array1.H[2], array1.D, array1.H, shema[21]],[array1.D[2] + array1.K[2], array1.D, array1.K, shema[22]],[array1.L[2] + array1.K[2], array1.L, array1.K, shema[23]],[array1.L[2] + array1.F[2], array1.L, array1.F, shema[24]],[array1.K[2] + array1.J[2], array1.K, array1.J, shema[25]],[array1.L[2] + array1.J[2], array1.L, array1.J, shema[26]],[array1.F[2] + array1.J[2], array1.F, array1.J, shema[27]],[array1.J[2] + array1.H[2], array1.J, array1.H, shema[28]],[array1.D[2] + array1.J[2], array1.D, array1.J, shema[29]]];
        sortobject(arrayline1);
        
        $.each(arrayline1, function( index, value ) {
            if(!$("#view_color_lines").is(":checked"))color="#000000";else color=value[3];
            if(index>numView)connect("line-"+index, value[1], value[2], color)
        });
    }
    if (showline2){
        arrayline2 = [[(array1.A[2]+array2.ABC[2]), array1.A, array2.ABC, shema[0]],[(array1.B[2]+array2.ABG[2]), array1.B, array2.ABG, shema[0]],[(array1.A[2]+array2.ACI[2]), array1.A, array2.ACI, shema[1]],[(array1.C[2]+array2.ABC[2]), array1.C, array2.ABC, shema[1]],[(array1.A[2]+array2.AEI[2]), array1.A, array2.AEI, shema[2]],[(array1.I[2]+array2.ACI[2]), array1.I, array2.ACI, shema[2]],[(array1.A[2]+array2.AEG[2]), array1.A, array2.AEG, shema[3]],[(array1.E[2]+array2.AEI[2]), array1.E, array2.AEI, shema[3]],[(array1.A[2]+array2.ABG[2]), array1.A, array2.ABG, shema[4]],[(array1.G[2]+array2.AEG[2]), array1.G, array2.AEG, shema[4]],[(array1.I[2]+array2.AEI[2]), array1.I, array2.AEI, shema[5]],[(array1.E[2]+array2.EIK[2]), array1.E, array2.EIK, shema[5]],[(array1.E[2]+array2.AEG[2]), array1.E, array2.AEG, shema[6]],[(array1.G[2]+array2.EGL[2]), array1.G, array2.EGL, shema[6]],[(array1.G[2]+array2.ABG[2]), array1.G, array2.ABG, shema[7]],[(array1.B[2]+array2.BFG[2]), array1.B, array2.BFG, shema[7]],[(array1.B[2]+array2.ABC[2]), array1.B, array2.ABC, shema[8]],[(array1.C[2]+array2.BCH[2]), array1.C, array2.BCH, shema[8]],[(array1.C[2]+array2.ACI[2]), array1.C, array2.ACI, shema[9]],[(array1.I[2]+array2.CDI[2]), array1.I, array2.CDI, shema[9]],[(array1.C[2]+array2.CDI[2]), array1.C, array2.CDI, shema[10]], [(array1.D[2]+array2.CDH[2]), array1.D, array2.CDH, shema[10]],[(array1.K[2]+array2.DIK[2]), array1.K, array2.DIK, shema[11]],[(array1.I[2]+array2.EIK[2]), array1.I, array2.EIK, shema[11]],[(array1.L[2]+array2.ELK[2]), array1.L, array2.ELK, shema[12]],[(array1.E[2]+array2.EGL[2]), array1.E, array2.EGL, shema[12]],[(array1.G[2]+array2.BFG[2]), array1.G, array2.BFG, shema[13]],[(array1.F[2]+array2.FGL[2]), array1.F, array2.FGL, shema[13]],[(array1.H[2]+array2.BFH[2]), array1.H, array2.BFH, shema[14]],[(array1.B[2]+array2.BCH[2]), array1.B, array2.BCH, shema[14]],[(array1.L[2]+array2.EGL[2]), array1.L, array2.EGL, shema[15]],[(array1.G[2]+array2.FGL[2]), array1.G, array2.FGL, shema[15]],[(array1.B[2]+array2.BFH[2]), array1.B, array2.BFH, shema[16]],[(array1.F[2]+array2.BFG[2]), array1.F, array2.BFG, shema[16]],[(array1.H[2]+array2.BCH[2]), array1.H, array2.BCH, shema[17]],[(array1.C[2]+array2.CDH[2]), array1.C, array2.CDH, shema[17]],[(array1.D[2]+array2.CDI[2]), array1.D, array2.CDI, shema[18]],[(array1.I[2]+array2.DIK[2]), array1.I, array2.DIK, shema[18]],[(array1.E[2]+array2.ELK[2]), array1.E, array2.ELK, shema[19]],[(array1.K[2]+array2.EIK[2]), array1.K, array2.EIK, shema[19]],[(array1.F[2]+array2.BFH[2]), array1.F, array2.BFH, shema[20]],[(array1.H[2]+array2.FHJ[2]), array1.H, array2.FHJ, shema[20]],[(array1.H[2]+array2.CDH[2]), array1.H, array2.CDH, shema[21]],[(array1.D[2]+array2.DJH[2]), array1.D, array2.DJH, shema[21]],[(array1.D[2]+array2.DIK[2]), array1.D, array2.DIK, shema[22]],[(array1.K[2]+array2.DJK[2]), array1.K, array2.DJK, shema[22]],[(array1.K[2]+array2.ELK[2]), array1.K, array2.ELK, shema[23]],[(array1.L[2]+array2.JKL[2]), array1.L, array2.JKL, shema[23]],[(array1.L[2]+array2.FGL[2]), array1.L, array2.FGL, shema[24]],[(array1.F[2]+array2.FJL[2]), array1.F, array2.FJL, shema[24]],[(array1.J[2]+array2.DJK[2]), array1.J, array2.DJK, shema[25]],[(array1.K[2]+array2.JKL[2]), array1.K, array2.JKL, shema[25]],[(array1.J[2]+array2.JKL[2]), array1.J, array2.JKL, shema[26]],[(array1.L[2]+array2.FJL[2]), array1.L, array2.FJL, shema[26]],[(array1.F[2]+array2.FHJ[2]), array1.F, array2.FHJ, shema[27]],[(array1.J[2]+array2.FJL[2]), array1.J, array2.FJL, shema[27]],[(array1.H[2]+array2.DJH[2]), array1.H, array2.DJH, shema[28]],[(array1.J[2]+array2.FHJ[2]), array1.J, array2.FHJ, shema[28]],[(array1.D[2]+array2.DJK[2]), array1.D, array2.DJK, shema[29]],[(array1.J[2]+array2.DJH[2]), array1.J, array2.DJH, shema[29]]];
        sortobject(arrayline2);
        $.each(arrayline2, function( index, value ) {
            if(!$("#view_color_lines_exterior").is(":checked"))color="#000000";else color=value[3];
            if(index>numView*2)connect("line-"+ (index+30), value[1], value[2], color);
        });
    }
    if(showface){
        arrayfaces = [
            [(array1.A[2]+array1.B[2]), array1.A, array1.B, array2.ABC, array2.ABG, shema[0]],
            [(array1.A[2]+array1.C[2]), array1.A, array1.C, array2.ACI, array2.ABC, shema[1]],
            [(array1.A[2]+array1.I[2]), array1.A, array1.I, array2.AEI, array2.ACI, shema[2]],
            [(array1.A[2]+array1.E[2]), array1.A, array1.E, array2.AEG, array2.AEI, shema[3]],
            [(array1.A[2]+array1.G[2]), array1.A, array1.G, array2.ABG, array2.AEG, shema[4]],
            [(array1.E[2]+array1.I[2]), array1.E, array1.I, array2.AEI, array2.EIK, shema[5]],
            [(array1.E[2]+array1.G[2]), array1.E, array1.G, array2.AEG, array2.EGL, shema[6]],
            [(array1.B[2]+array1.G[2]), array1.B, array1.G, array2.ABG, array2.BFG, shema[7]],
            [(array1.B[2]+array1.C[2]), array1.B, array1.C, array2.ABC, array2.BCH, shema[8]],
            [(array1.C[2]+array1.I[2]), array1.C, array1.I, array2.ACI, array2.CDI, shema[9]],
            [(array1.C[2]+array1.D[2]), array1.C, array1.D, array2.CDI, array2.CDH, shema[10]],
            [(array1.K[2]+array1.I[2]), array1.K, array1.I, array2.DIK, array2.EIK, shema[11]],
            [(array1.L[2]+array1.E[2]), array1.L, array1.E, array2.ELK, array2.EGL, shema[12]],
            [(array1.F[2]+array1.G[2]), array1.F, array1.G, array2.BFG, array2.FGL, shema[13]],
            [(array1.B[2]+array1.H[2]), array1.B, array1.H, array2.BFH, array2.BCH, shema[14]],
            [(array1.L[2]+array1.G[2]), array1.L, array1.G, array2.EGL, array2.FGL, shema[15]],
            [(array1.B[2]+array1.F[2]), array1.B, array1.F, array2.BFH, array2.BFG, shema[16]],
            [(array1.H[2]+array1.C[2]), array1.H, array1.C, array2.BCH, array2.CDH, shema[17]],
            [(array1.D[2]+array1.I[2]), array1.D, array1.I, array2.CDI, array2.DIK, shema[18]],
            [(array1.K[2]+array1.E[2]), array1.K, array1.E, array2.ELK, array2.EIK, shema[19]],
            [(array1.F[2]+array1.H[2]), array1.F, array1.H, array2.BFH, array2.FHJ, shema[20]],
            [(array1.D[2]+array1.H[2]), array1.D, array1.H, array2.CDH, array2.DJH, shema[21]],
            [(array1.D[2]+array1.K[2]), array1.D, array1.K, array2.DIK, array2.DJK, shema[22]],
            [(array1.L[2]+array1.K[2]), array1.L, array1.K, array2.ELK, array2.JKL, shema[23]],
            [(array1.L[2]+array1.F[2]), array1.L, array1.F, array2.FGL, array2.FJL, shema[24]],
            [(array1.K[2]+array1.J[2]), array1.K, array1.J, array2.DJK, array2.JKL, shema[25]],
            [(array1.L[2]+array1.J[2]), array1.L, array1.J, array2.JKL, array2.FJL, shema[26]],
            [(array1.F[2]+array1.J[2]), array1.F, array1.J, array2.FHJ, array2.FJL, shema[27]],
            [(array1.J[2]+array1.H[2]), array1.J, array1.H, array2.DJH, array2.FHJ, shema[28]],
            [(array1.D[2]+array1.J[2]), array1.D, array1.J, array2.DJK, array2.DJH, shema[29]]];
        sortobject(arrayfaces);
        $.each(arrayfaces, function( index, value ) {
            if(index>numView)drawFaces("polygon-"+index, value[1], value[2], value[3], value[4], value[5])
        });
    }
    $("#ratio_svg").prepend(newsvg);
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
function drawFaces(name, p1, p2, s1, s2, color){
    if(!$("#view_color_faces").is(":checked"))color="#000000";
    $("#"+name).attr("points", 
    arreondit3(p1[0]/scale*($("#svg").height()/ 3)+$("#svg").width()/2)+","+
    arreondit3(p1[1]/scale*($("#svg").height()/ 3)+$("#svg").height()/2)+" "+
    arreondit3(s1[0]/scale*($("#svg").height()/ 3)+$("#svg").width()/2)+","+
    arreondit3(s1[1]/scale*($("#svg").height()/ 3)+$("#svg").height()/2)+" "+
    arreondit3(p2[0]/scale*($("#svg").height()/ 3)+$("#svg").width()/2)+","+
    arreondit3(p2[1]/scale*($("#svg").height()/ 3)+$("#svg").height()/2)+" "+
    arreondit3(s2[0]/scale*($("#svg").height()/ 3)+$("#svg").width()/2)+","+
    arreondit3(s2[1]/scale*($("#svg").height()/ 3)+$("#svg").height()/2));
    $("#"+name).css("fill", color+numberToHex(255-$("#alpha_faces").val()));
    $("#"+name).show();
}
function connect(name, v1, v2, color) {
    
    $("#"+name).attr("x1", arreondit3(v1[0]/scale*($("#svg").height()/ 3)+$("#svg").width()/2));
    $("#"+name).attr("y1", arreondit3(v1[1]/scale*($("#svg").height()/ 3)+$("#svg").height()/2));
    $("#"+name).attr("x2", arreondit3(v2[0]/scale*($("#svg").height()/ 3)+$("#svg").width()/2));
    $("#"+name).attr("y2", arreondit3(v2[1]/scale*($("#svg").height()/ 3)+$("#svg").height()/2));
    $("#"+name).attr("stroke-width", $("#stroke_width").val()/10);
    $("#"+name).css("stroke", color+numberToHex(255-$("#alpha_lines").val()));
    $("#"+name).show();

}
function arreondit3(number){
    return  (Math.floor(number * 1000) / 1000);
}
function drawLetter(name, point){
    $("#"+name).attr("x", point[0]/scale*($("#svg").height()/ 3)+$("#svg").width()/2).attr("y", point[1]/scale*($("#svg").height()/ 3)+$("#svg").height()/2).attr("font-size", (($("#svg").height()/3000)*(scale))).show();
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


function resize() {
    var h = (window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight));
    var divHight = 20 + $("#icosaedre_zone").height();
    $("#icosaedre_zone").css("height", h - divHight);
}
jQuery.resizable = function (resizerID) {
    margin=5;
    jQuery('#' + resizerID).bind("mousedown", function (e) {
        var start = e.pageY;
        jQuery('body').bind("mouseup", function () {
            jQuery('body').unbind("mousemove");
            jQuery('body').unbind("mouseup");
        });
        jQuery('body').bind("mousemove", function (e) {
            max = (screen.height+$(window).scrollTop())-margin;
            min = margin;
           
            var end =  Math.min(Math.max( e.pageY, min), max) ;
            jQuery('#icosaedre_zone').height(jQuery('#' + resizerID).prev().height() + (end - start+20));
            start = end;
        });
    });
}

jQuery.resizable('resize_line');