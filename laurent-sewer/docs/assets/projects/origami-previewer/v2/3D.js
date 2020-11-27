class Point {
    constructor(x, y, z=0)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    /*constructor(x, y){
        this.x = x;
        this.y = y;
        this.z = 0;
    }*/
    
}
function GenerateSolid() { // gets points_icosaedre coordinates
    var size =  1;
    distance = (((Math.sqrt(5)+1)/2)*200/2)*size;
    demiscale = (200/2)*size;

    
    //#region old
        
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
    solidPoints = [
        calculPoints({"P_Point":icosaedre.A,"N_Point":icosaedre.B,"P_Side":icosaedre.C,"N_Side":icosaedre.G, "P_Sommet":calculPic([icosaedre.A,icosaedre.B,icosaedre.C]), "N_Sommet":calculPic([icosaedre.B,icosaedre.A,icosaedre.G])}),
        calculPoints({"P_Point":icosaedre.A,"N_Point":icosaedre.C,"P_Side":icosaedre.I,"N_Side":icosaedre.B, "P_Sommet":calculPic([icosaedre.A,icosaedre.C,icosaedre.I]), "N_Sommet":calculPic([icosaedre.C,icosaedre.A,icosaedre.B])}),
        calculPoints({"P_Point":icosaedre.A,"N_Point":icosaedre.I,"P_Side":icosaedre.E,"N_Side":icosaedre.C, "P_Sommet":calculPic([icosaedre.A,icosaedre.I,icosaedre.E]), "N_Sommet":calculPic([icosaedre.I,icosaedre.A,icosaedre.C])}),
        calculPoints({"P_Point":icosaedre.A,"N_Point":icosaedre.E,"P_Side":icosaedre.G,"N_Side":icosaedre.I, "P_Sommet":calculPic([icosaedre.A,icosaedre.E,icosaedre.G]), "N_Sommet":calculPic([icosaedre.E,icosaedre.A,icosaedre.I])}),
        calculPoints({"P_Point":icosaedre.A,"N_Point":icosaedre.G,"P_Side":icosaedre.B,"N_Side":icosaedre.E, "P_Sommet":calculPic([icosaedre.A,icosaedre.G,icosaedre.B]), "N_Sommet":calculPic([icosaedre.G,icosaedre.A,icosaedre.E])}),
        calculPoints({"P_Point":icosaedre.E,"N_Point":icosaedre.I,"P_Side":icosaedre.K,"N_Side":icosaedre.A, "P_Sommet":calculPic([icosaedre.E,icosaedre.I,icosaedre.K]), "N_Sommet":calculPic([icosaedre.I,icosaedre.E,icosaedre.A])}),
        calculPoints({"P_Point":icosaedre.E,"N_Point":icosaedre.G,"P_Side":icosaedre.A,"N_Side":icosaedre.L, "P_Sommet":calculPic([icosaedre.E,icosaedre.G,icosaedre.A]), "N_Sommet":calculPic([icosaedre.G,icosaedre.E,icosaedre.L])}),
        calculPoints({"P_Point":icosaedre.B,"N_Point":icosaedre.G,"P_Side":icosaedre.F,"N_Side":icosaedre.A, "P_Sommet":calculPic([icosaedre.B,icosaedre.G,icosaedre.F]), "N_Sommet":calculPic([icosaedre.G,icosaedre.B,icosaedre.A])}),
        calculPoints({"P_Point":icosaedre.B,"N_Point":icosaedre.C,"P_Side":icosaedre.A,"N_Side":icosaedre.H, "P_Sommet":calculPic([icosaedre.B,icosaedre.C,icosaedre.A]), "N_Sommet":calculPic([icosaedre.C,icosaedre.B,icosaedre.H])}),
        calculPoints({"P_Point":icosaedre.C,"N_Point":icosaedre.I,"P_Side":icosaedre.A,"N_Side":icosaedre.D, "P_Sommet":calculPic([icosaedre.C,icosaedre.I,icosaedre.A]), "N_Sommet":calculPic([icosaedre.I,icosaedre.C,icosaedre.D])}),
        calculPoints({"P_Point":icosaedre.C,"N_Point":icosaedre.D,"P_Side":icosaedre.I,"N_Side":icosaedre.H, "P_Sommet":calculPic([icosaedre.C,icosaedre.D,icosaedre.I]), "N_Sommet":calculPic([icosaedre.D,icosaedre.C,icosaedre.H])}),
        calculPoints({"P_Point":icosaedre.I,"N_Point":icosaedre.K,"P_Side":icosaedre.E,"N_Side":icosaedre.D, "P_Sommet":calculPic([icosaedre.I,icosaedre.K,icosaedre.E]), "N_Sommet":calculPic([icosaedre.K,icosaedre.I,icosaedre.D])}),
        calculPoints({"P_Point":icosaedre.E,"N_Point":icosaedre.L,"P_Side":icosaedre.G,"N_Side":icosaedre.K, "P_Sommet":calculPic([icosaedre.E,icosaedre.L,icosaedre.G]), "N_Sommet":calculPic([icosaedre.L,icosaedre.E,icosaedre.K])}),
        calculPoints({"P_Point":icosaedre.F,"N_Point":icosaedre.G,"P_Side":icosaedre.L,"N_Side":icosaedre.B, "P_Sommet":calculPic([icosaedre.F,icosaedre.G,icosaedre.L]), "N_Sommet":calculPic([icosaedre.G,icosaedre.F,icosaedre.B])}),
        calculPoints({"P_Point":icosaedre.B,"N_Point":icosaedre.H,"P_Side":icosaedre.C,"N_Side":icosaedre.F, "P_Sommet":calculPic([icosaedre.B,icosaedre.H,icosaedre.C]), "N_Sommet":calculPic([icosaedre.H,icosaedre.B,icosaedre.F])}),
        calculPoints({"P_Point":icosaedre.G,"N_Point":icosaedre.L,"P_Side":icosaedre.F,"N_Side":icosaedre.E, "P_Sommet":calculPic([icosaedre.G,icosaedre.L,icosaedre.F]), "N_Sommet":calculPic([icosaedre.L,icosaedre.G,icosaedre.E])}),
        calculPoints({"P_Point":icosaedre.B,"N_Point":icosaedre.F,"P_Side":icosaedre.H,"N_Side":icosaedre.G, "P_Sommet":calculPic([icosaedre.B,icosaedre.F,icosaedre.H]), "N_Sommet":calculPic([icosaedre.F,icosaedre.B,icosaedre.G])}),
        calculPoints({"P_Point":icosaedre.C,"N_Point":icosaedre.H,"P_Side":icosaedre.D,"N_Side":icosaedre.B, "P_Sommet":calculPic([icosaedre.C,icosaedre.H,icosaedre.D]), "N_Sommet":calculPic([icosaedre.H,icosaedre.C,icosaedre.B])}),
        calculPoints({"P_Point":icosaedre.D,"N_Point":icosaedre.I,"P_Side":icosaedre.C,"N_Side":icosaedre.K, "P_Sommet":calculPic([icosaedre.D,icosaedre.I,icosaedre.C]), "N_Sommet":calculPic([icosaedre.I,icosaedre.D,icosaedre.K])}),
        calculPoints({"P_Point":icosaedre.E,"N_Point":icosaedre.K,"P_Side":icosaedre.L,"N_Side":icosaedre.I, "P_Sommet":calculPic([icosaedre.E,icosaedre.K,icosaedre.L]), "N_Sommet":calculPic([icosaedre.K,icosaedre.E,icosaedre.I])}),
        calculPoints({"P_Point":icosaedre.F,"N_Point":icosaedre.H,"P_Side":icosaedre.B,"N_Side":icosaedre.J, "P_Sommet":calculPic([icosaedre.F,icosaedre.H,icosaedre.B]), "N_Sommet":calculPic([icosaedre.H,icosaedre.F,icosaedre.J])}),
        calculPoints({"P_Point":icosaedre.D,"N_Point":icosaedre.H,"P_Side":icosaedre.J,"N_Side":icosaedre.C, "P_Sommet":calculPic([icosaedre.D,icosaedre.H,icosaedre.J]), "N_Sommet":calculPic([icosaedre.H,icosaedre.D,icosaedre.C])}),
        calculPoints({"P_Point":icosaedre.D,"N_Point":icosaedre.K,"P_Side":icosaedre.I,"N_Side":icosaedre.J, "P_Sommet":calculPic([icosaedre.D,icosaedre.K,icosaedre.I]), "N_Sommet":calculPic([icosaedre.K,icosaedre.D,icosaedre.J])}),
        calculPoints({"P_Point":icosaedre.K,"N_Point":icosaedre.L,"P_Side":icosaedre.E,"N_Side":icosaedre.J, "P_Sommet":calculPic([icosaedre.K,icosaedre.L,icosaedre.E]), "N_Sommet":calculPic([icosaedre.L,icosaedre.K,icosaedre.J])}),
        calculPoints({"P_Point":icosaedre.F,"N_Point":icosaedre.L,"P_Side":icosaedre.J,"N_Side":icosaedre.G, "P_Sommet":calculPic([icosaedre.F,icosaedre.L,icosaedre.J]), "N_Sommet":calculPic([icosaedre.L,icosaedre.F,icosaedre.G])}),
        calculPoints({"P_Point":icosaedre.J,"N_Point":icosaedre.K,"P_Side":icosaedre.D,"N_Side":icosaedre.L, "P_Sommet":calculPic([icosaedre.J,icosaedre.K,icosaedre.D]), "N_Sommet":calculPic([icosaedre.K,icosaedre.J,icosaedre.L])}),
        calculPoints({"P_Point":icosaedre.J,"N_Point":icosaedre.L,"P_Side":icosaedre.K,"N_Side":icosaedre.F, "P_Sommet":calculPic([icosaedre.J,icosaedre.L,icosaedre.K]), "N_Sommet":calculPic([icosaedre.L,icosaedre.J,icosaedre.F])}),
        calculPoints({"P_Point":icosaedre.F,"N_Point":icosaedre.J,"P_Side":icosaedre.H,"N_Side":icosaedre.L, "P_Sommet":calculPic([icosaedre.F,icosaedre.J,icosaedre.H]), "N_Sommet":calculPic([icosaedre.J,icosaedre.F,icosaedre.L])}),
        calculPoints({"P_Point":icosaedre.H,"N_Point":icosaedre.J,"P_Side":icosaedre.D,"N_Side":icosaedre.F, "P_Sommet":calculPic([icosaedre.H,icosaedre.J,icosaedre.D]), "N_Sommet":calculPic([icosaedre.J,icosaedre.H,icosaedre.F])}),
        calculPoints({"P_Point":icosaedre.D,"N_Point":icosaedre.J,"P_Side":icosaedre.K,"N_Side":icosaedre.H, "P_Sommet":calculPic([icosaedre.D,icosaedre.J,icosaedre.K]), "N_Sommet":calculPic([icosaedre.J,icosaedre.D,icosaedre.H])}),
    ];
}
function calculPic(points){
    length = 0.9;
    result = [((points[0][0]+points[1][0]+points[2][0])*length),
              ((points[0][1]+points[1][1]+points[2][1])*length),
              ((points[0][2]+points[1][2]+points[2][2])*length)];
    return result;
}

function calculPoints(points){
    result = {
        "a_p":points.P_Point,
        "a_n":points.N_Point,
        "a_c":moyennePoint([points.P_Point, points.N_Point]),
        "b_p":moyennePoint([moyennePoint([points.P_Point, points.N_Point]),moyennePoint([points.P_Point, points.N_Point, points.P_Sommet])]),
        "b_n":moyennePoint([moyennePoint([points.P_Point, points.N_Point]),moyennePoint([points.P_Point, points.N_Point, points.N_Sommet])]),
        "c_p":moyennePoint([points.P_Point, points.N_Point, points.P_Sommet]),
        "c_n":moyennePoint([points.P_Point, points.N_Point, points.N_Sommet]),
        "d_p":moyennePoint([points.N_Point, points.P_Sommet]),
        "d_n":moyennePoint([points.P_Point, points.N_Sommet]),
        "e_p":moyennePoint([moyennePoint([points.N_Point, points.P_Side, points.P_Sommet]),moyennePoint([points.N_Point, points.P_Side])]),
        "e_n":moyennePoint([moyennePoint([points.P_Point, points.N_Side, points.N_Sommet]),moyennePoint([points.P_Point, points.N_Side])]),
        "f_p":moyennePoint([points.N_Point, points.P_Side, points.P_Sommet]),
        "f_n":moyennePoint([points.P_Point, points.N_Side, points.N_Sommet]),
        "g_p":moyennePoint([moyennePoint([points.N_Point, points.P_Sommet]),moyennePoint([points.P_Side, points.P_Sommet])]),
        "g_n":moyennePoint([moyennePoint([points.P_Point, points.N_Sommet]),moyennePoint([points.N_Side, points.N_Sommet])]),
        "h_p":moyennePoint([points.P_Side, points.P_Sommet]),
        "h_n":moyennePoint([points.N_Side, points.N_Sommet]),
        "i_p":points.P_Sommet,
        "i_n":points.N_Sommet,
        "j_p":moyennePoint([points.P_Side, points.P_Point, points.P_Sommet, points.P_Sommet]),
        "j_n":moyennePoint([points.N_Side, points.N_Point, points.N_Sommet, points.N_Sommet]),
        "k_p":moyennePoint([points.P_Point, points.P_Sommet, points.P_Side]),
        "k_n":moyennePoint([points.N_Point, points.N_Sommet, points.N_Side]),

    }
    return result;
}
function moyennePoint(points){
    x=0;y=0;z=0;
    $.each(points, function (index, point) {
        x+=point[0];
        y+=point[1];
        z+=point[2];
    });
    result = [x/points.length, y/points.length, z/points.length];
    return result;
}