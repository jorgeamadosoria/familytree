//---------------------------------------------------------
//BEGIN DATA
//---------------------------------------------------------

//PEOPLE DATA
//object template
/*
var person = {
    name: string, //mandatory
    nickname:string, //nullable
gender:string, //mandatory. one of WOMAN, MAN, OTHER
birth:string, //nullable. One line string with date and location of birth, i.e., '12/12/2012, City, Country'
death:string, //nullable. One line string with date and location of death, i.e., '12/12/2012, City, Country'
comments:string, //nullable. Html or text with a summary of the person life
profile:string, //mandatory. Can be the variable defaultProfile, if there is no picture for this person,
moreComment: //optional, nullable. The tooltip on the moreNode corresponding to this person, if it's used
photos:array //nullable. array of urls for person pictures. Can also be an empty array
    ]
};  */

var pDignaElenaMatosMatos = {
    name: 'Digna',
    nickname: 'Nena',
    gender: WOMAN,
    birth: '14/06/1921',
    death: '15/06/2007',
    comments: 'Digna Elena Matos Matos',
    profile: defaultProfile
};


var pBlancaDeLaPurificacionRamirezMatos = {
    name: 'Blanca',

    gender: WOMAN,
    birth: '2 mayo 1950',

    comments: 'Blanca de la purificacion ramirez matos',
    profile: defaultProfile
};

var pJorgeLuisSoriaMaceira = {
    name: 'Jorge Luis',

    gender: MAN,
    birth: '20 junio 1953',

    comments: 'Jorge Luis Soria Maceira (fecha equivocada de carnet de identidad 19 enero 1954)',
    profile: defaultProfile
};

var pJorgeAmadoSoriaRamirez = {
    name: 'Jorge Amado',
    nickname: 'Amado, Gordo',
    
    gender: MAN,
    birth: '14 dic 1984',

    comments: 'Jorge Amado Soria Ramirez'
};

var pAmalSaifFonte = {
    name: 'Amal',

    gender: WOMAN,
    birth: '9 ago 1990',

    comments: 'Amal Saif Fonte',
    profile: defaultProfile
};

var pJorgeLuisSoriaRamirez = {
    name: 'Jorge Luis',
    nickname: '',
    gender: MAN,
    birth: '11 may 1984',
    comments: 'Jorge Luis Soria Ramirez',
    profile: 'https://i.ibb.co/K5H8fwk/jorgeluissoriaramirrez.png',
    photos:['https://i.ibb.co/D5N003k/IMAG0018.jpg',"https://i.ibb.co/qxt4cKz/yarisket.jpg"]
};
var pAmadoMarcelinoRamirezMatos = {
    name: 'Amado Marcelino',
    nickname: 'Popi',
    gender: MAN,
    birth: '13 feb 1947?',

    comments: 'Amado Marcelino Ramirez Matos'
};


var pCaridadMartinAlvarez = {
    name: 'Caridad',
    //nickname: 'Cary',
    gender: WOMAN,


    comments: 'Caridad Martin Alvarez',
    profile: defaultProfile
};
var pCarlosEnriqueRamirezMartin = {
    name: 'Carlos',

    gender: MAN,
    birth: '02/10/1985',

    comments: 'Carlos Enrique Ramirez Martin',
    profile: defaultProfile
};

var pRaulRamirezMartin = {
    name: 'Raul',

    gender: MAN,
    birth: '2 mayo',

    comments: 'Raul Ramirez Martin',
    profile: defaultProfile
    //photos: []
};
var pMiguelEnriqueRamirezMatos = {
    name: 'Miguel',

    gender: MAN,
    birth: '3 oct 1948 - 9 ?',

    comments: 'Miguel Enrique Ramirez Matos',
    profile: defaultProfile
};
var pAnaPerezFonseca = {
    name: 'Ana',

    gender: WOMAN,


    comments: 'Ana Perez Fonseca',
    profile: defaultProfile
};
var pYanitsiaRamirezPerez = {
    name: 'Yanitsia',

    gender: WOMAN,
    birth: '18 sept 1972 - 3 ?',

    comments: 'Yanitsia Ramirez Perez',
    profile: defaultProfile
};

var pCarlosLuisFreemanSoria = {
    name: 'Carlos Luis',
    nickname: 'Carlitos',
    gender: MAN,
    comments: 'Carlos Luis Freeman Soria'
};

var pYaritskeRamirezPerez = {
    name: 'Yaritské',

    gender: WOMAN,
    birth: '??/04/1976',

    comments: 'Yaritské Ramirez Perez',
    profile: defaultProfile
};
var pAntoniodeMarcosRamirezMatos = {
    name: 'Antonio de Marcos',

    gender: MAN,
    birth: '18 oct 1953',

    comments: 'Antonio de Marcos Ramirez Matos, nacido Marco Antonio',
    profile: defaultProfile
};

var pTaniaSoriaMaceira = {
    name: 'Tania',
    nickname: 'Taniecita',
    gender: WOMAN,


    comments: 'Tania "Taniecita" Soria Maceira',
    profile: defaultProfile
};
var pMarietaPenaHernandez = {
    name: 'Marieta',

    gender: WOMAN,


    comments: 'Marieta Peña Hernandez (n. 19 de julio)',
    profile: defaultProfile
};
var pTamaraSoriaMaceira = {
    name: 'Tamara',

    gender: WOMAN,


    comments: 'Tamara Soria Maceira'
};
var pAnnelisPerezLegon = {
    name: 'Annelis',
    nickname: 'Nelin',
    gender: WOMAN,
    birth: '26 junio 1972',
    comments: 'Annelis "Nelin" Perez Legon',
    profile:'https://i.ibb.co/cYwZPrN/annelis.png',
    photos: ['https://i.ibb.co/jZ1DTQ3/20170222-180238.jpg','https://i.ibb.co/D5N003k/IMAG0018.jpg']
};
var pCarmenHelenestherSoriaPerez = {
    name: 'Carmen Helenesther',
    nickname: 'Carmencita',
    gender: WOMAN,
    birth: '27 marzo 2001',
    comments: 'Carmen Helenesther Soria Perez (el segundo nombre era una combinacion de Helena y Esther debido a que en su momento no se podian poner tres nombres)'
};
var pJorgeLuisSoriaPerez = {
    name: 'Jorge Luis',
    nickname: 'Mondongo, Cabeza de Zapote, Mongopavia',
    gender: MAN,
    birth: '2 oct 2011',
    comments: 'Jorge Luis Soria Perez'
};
var pArietaSoriaFernandez = {
    name: 'Arieta',

    gender: WOMAN,
    birth: '9 nov 1983',

    comments: 'Arieta Soria Fernandez',
    profile: defaultProfile
};
var pAdrianSoriaCanela = {
    name: 'Adrian',

    gender: MAN,
    birth: '25 mayo 1985',

    comments: 'Adrian Soria Canela',
    profile: defaultProfile
};
var pCarmenMaceiraPerez = {
    name: 'Carmen',
    nickname: 'Carmita',
    gender: WOMAN,
    birth: '28 nov 1924',
    death: '6 ago 2014',
    comments: 'Carmen Maceira Perez (inscrita por error como Perez, pero al final se enorgullecia de eso)'
};

//---------------------------------------------------------
//END DATA
//---------------------------------------------------------

//---------------------------------------------------------
//BEGIN DRAWING
//---------------------------------------------------------
//change the row,col numbers to position the nodes
var graph = new Graph('graph', "#graph");


//people nodes
var GEN_SEPARATOR = 5;
var FIRST_GEN_ROW = 0;
var SECOND_GEN_ROW = FIRST_GEN_ROW + GEN_SEPARATOR;
var THIRD_GEN_ROW = SECOND_GEN_ROW + GEN_SEPARATOR;
var FOURTH_GEN_ROW = THIRD_GEN_ROW + GEN_SEPARATOR;
var FIFTH_GEN_ROW = FOURTH_GEN_ROW + GEN_SEPARATOR;

x = 5;
i = 2;
x -= i;
x = graph.addPeople(FIRST_GEN_ROW, x += i,
    pDignaElenaMatosMatos);
    x = graph.addPeople(FIRST_GEN_ROW, x += i*4.75,
    pCarmenMaceiraPerez
    );

x = 0;
i = 2;
x -= i;
x = graph.addPeople(SECOND_GEN_ROW, x += i,  
    pAmadoMarcelinoRamirezMatos,pCaridadMartinAlvarez);
    x = graph.addPeople(SECOND_GEN_ROW, x += i*0.5,  
    pMiguelEnriqueRamirezMatos,
    pAntoniodeMarcosRamirezMatos,
     pBlancaDeLaPurificacionRamirezMatos,pJorgeLuisSoriaMaceira);
     x = graph.addPeople(SECOND_GEN_ROW, x += i*3.5,  
    pTamaraSoriaMaceira,pTaniaSoriaMaceira   );

x = 0;
i = 2;
x -= i;
x = graph.addPeople(THIRD_GEN_ROW, x += i,  
    pCarlosEnriqueRamirezMartin,pRaulRamirezMartin,pYanitsiaRamirezPerez,pYaritskeRamirezPerez,
    pJorgeLuisSoriaRamirez,pAnnelisPerezLegon,
    pJorgeAmadoSoriaRamirez,pAmalSaifFonte,
    pAdrianSoriaCanela,
    pArietaSoriaFernandez,
    pCarlosLuisFreemanSoria,
    pMarietaPenaHernandez   );

x = 1;
i = 2;
x -= i;
x = graph.addPeople(FOURTH_GEN_ROW, x += i*4.5,
    pCarmenHelenestherSoriaPerez,
    pJorgeLuisSoriaPerez);

//RELATIONSHIP DATA
/*
var relationship = {
    date : date, //null. The date in which the relationship was formalized
    type: string //type of relationship, one of MARRIAGE, RELATIONSHIP
}
 */
//relationship nodes
graph.rels(0,2,pDignaElenaMatosMatos,pAmadoMarcelinoRamirezMatos,pMiguelEnriqueRamirezMatos,pAntoniodeMarcosRamirezMatos,pBlancaDeLaPurificacionRamirezMatos);
graph.rels(0,2,pCarmenMaceiraPerez,pJorgeLuisSoriaMaceira,pTamaraSoriaMaceira,pTaniaSoriaMaceira);
graph.rels(0,2,pTaniaSoriaMaceira,pMarietaPenaHernandez);
graph.rels(0,2,pTamaraSoriaMaceira,pCarlosLuisFreemanSoria);
graph.rels(-6,2,pJorgeLuisSoriaMaceira,pAdrianSoriaCanela,pArietaSoriaFernandez);
graph.rels(0,2,pMiguelEnriqueRamirezMatos,pYanitsiaRamirezPerez,pYaritskeRamirezPerez);

graph.addRel(defMtNode,1,pAmadoMarcelinoRamirezMatos,pCaridadMartinAlvarez,pCarlosEnriqueRamirezMartin, pRaulRamirezMartin);
graph.addRel(defMtNode,1,pBlancaDeLaPurificacionRamirezMatos,pJorgeLuisSoriaMaceira,pJorgeLuisSoriaRamirez,pJorgeAmadoSoriaRamirez);
graph.addRel(defMtNode,1,pJorgeLuisSoriaRamirez,pAnnelisPerezLegon,pCarmenHelenestherSoriaPerez,pJorgeLuisSoriaPerez);
graph.addRel(defMtNode,1,pJorgeAmadoSoriaRamirez,pAmalSaifFonte);


graph.stdMore(pMarietaPenaHernandez);
graph.stdMore(pAdrianSoriaCanela);
graph.stdMore(pArietaSoriaFernandez);
graph.stdMore(pCarlosLuisFreemanSoria);
graph.stdMore(pAntoniodeMarcosRamirezMatos);


//---------------------------------------------------------
//END DRAWING
//---------------------------------------------------------

graph.init();