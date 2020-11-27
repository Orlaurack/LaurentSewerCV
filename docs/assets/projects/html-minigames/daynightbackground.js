
var dayNightColors=[], sunMoonColors=[], montainColors=[];
function SetBackground(){
   // console.log(montainColors[0]);
    /*if (typeof dayNightColors == 'undefined'){
        dayNightColors = [{r:0,g:0,b:0},{r:32,g:0,b:128},{r:0, g:128 ,b:255},{r:0, g:64 ,b:128}];
    }*/
    var dayBK = new Date().getTime()%86400000 /86400000;
    //var time = day*4%4;// = 0 à minuit, 1 à 6h, 2 à 12h et 3 à 18h day cycle
    //var time = day*72%4;// = 0 à minuit, 1 à 6h, 2 à 12h et 3 à 18h 20 min cycle
   // var time = day*1440%4;// = 0 à minuit, 1 à 6h, 2 à 12h et 3 à 18h 1 min cycle
    var timeBK = dayBK*8640%4;// = 0 à minuit, 1 à 6h, 2 à 12h et 3 à 18h 4 sec cycle
    var colorBK = "rgb(0,0,0)";
    var percentBK = timeBK%1;
    i = Math.floor(timeBK);
    if(dayNightColors!=false){
        colorBK = " rgba("+
        Moyenne(dayNightColors[i%4].r,dayNightColors[(i+1)%4].r,percentBK)+","+
        Moyenne(dayNightColors[i%4].g,dayNightColors[(i+1)%4].g,percentBK)+","+
        Moyenne(dayNightColors[i%4].b,dayNightColors[(i+1)%4].b,percentBK)+",255)"; 
        document.body.style.backgroundColor=colorBK;
    }
    // console.log(color+"  ,  "+ time);
    //  document.body.style.backgroundColor = color;
    svgback = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 100'%3E%3Cpolygon fill='%23"+montainColors[0]+"' points='40 50 20 16 0 50 90 50 70 16 50 50'/%3E%3Cpolygon fill='%23"+montainColors[1]+"' points='40 50 20 16 30 50 90 50 70 16 80 50'/%3E%3Cpolygon fill='%23"+montainColors[2]+"' points='10 50 -5 25 -20 50 25 50 10 25 -5 50 60 50 45 25 30 50 100 50 85 25 70 50'/%3E%3Cpolygon fill='%23"+montainColors[3]+"' points='10 50 -5 25 0 50 25 50 10 25 15 50 60 50 45 25 50 50 100 50 85 25 90 50'/%3E%3Cpolygon fill='%23"+montainColors[4]+"' points='30 50 20 33 10 50 5 50 -5 33 -15 50 75 50 65 33 55 50 105 50 95 33 85 50 55 50 45 33 35 50'/%3E%3Cpolygon fill='%23"+montainColors[5]+"' points='75 50 65 33 70 50 30 50 20 33 25 50 5 50 -5 33 0 50 105 50 95 33 100 50 55 50 45 33 50 50'/%3E%3C/svg%3E\")";
    // svgsun = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='50%25' fx='50%25' fy='50%25'%3E%3Cstop offset='0%25' style='stop-color:"+sunMoonColors[0]+";stop-opacity:0' /%3E%3Cstop offset='100%25' style='stop-color:"+sunMoonColors[1]+";stop-opacity:1' /%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='50' fill='%23url(%23grad)' /%3E%3C/svg%3E\");";
    document.body.style.backgroundImage=svgback;//+", "+svgsun;
    document.body.style.backgroundRepeat= "repeat-x";//, no-repeat";
    document.body.style.backgroundPositionY= "0vh";//, 50vh";
    document.body.style.backgroundPositionX= "50vw";//, 50vw";
    document.body.style.backgroundAttachment= "fixed";//, fixed";
    document.body.style.backgroundSize= "100vh";//, 100vw";

    
}
function Moyenne(n1, n2, percentage){
    return Math.floor((n1*(1-percentage))+(n2*percentage)); 
}
function initializeColors(DNC, SMC, MC){
    document.body.style.backgroundColor="rgb(0,0,0)";

    dayNightColors = DNC;
    sunMoonColors = SMC; 
    montainColors= MC;
    // console.log(DNC);
    // console.log(SMC);
    // console.log(MC);
    setInterval(SetBackground, 10);
    SetBackground();
}
