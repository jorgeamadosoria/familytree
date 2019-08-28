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

var pWilfredoLegonWaldarrama = {
    name: 'Wilfredo',
    nickname: 'Papa Chino',
    gender: MAN,
    birth: '30 ene ????',
    death: '2003',
    comments: 'Wilfredo Legon Waldarrama ',
};
var pEstherRodriguezHurtado = {
    name: 'Esther',
    gender: WOMAN,

    comments: 'Esther Rodriguez Hurtado',
};
var pMercedesdelaCandelariaLegonRodriguez = {
    name: 'Mercedes de la Candelaria',
    gender: WOMAN,
    birth: '2 feb 1951',

    comments: 'Mercedes de la Candelaria Legon Rodriguez ',
};


var pJorgeLuisSoriaPerez = {
    name: 'Jorge Luis',
    nickname: 'Mondongo, Cabeza de Zapote, Mongopavia',
    gender: MAN,
    birth: '2 oct 2011',
    comments: 'Jorge Luis Soria Perez'
};

var pJorgePerez = {
    name: 'Jorge',
    gender: MAN,

    comments: 'Jorge Perez (nacido Evasio)',
};
var pAnnelisPerezLegon = {
    name: 'Annelis',
    gender: WOMAN,

    comments: 'Annelis Perez Legon',
};

var pCarmenHelenestherSoriaPerez = {
    name: 'Carmen Helenesther',
    nickname: 'Carmencita',
    gender: WOMAN,
    birth: '27 marzo 2001',
    comments: 'Carmen Helenesther Soria Perez (el segundo nombre era una combinacion de Helena y Esther debido a que en su momento no se podian poner tres nombres)'
};

var pRafaelPerezSantana = {
    name: 'Rafael',
    gender: MAN,
    birth: '26 ene 1946',

    comments: 'Rafael Perez Santana',
};
var pRafaelPerezLegon = {
    name: 'Rafael',
    nickname: 'Rafaelito',
    gender: MAN,
    birth: '13 Jul 1988',
    comments: 'Rafael Perez Legon',
};
var pDayesiRizoCala = {
    name: 'Dayesi',
    gender: WOMAN,
    birth: '30 ene 1988',
    comments: 'Dayesi Rizo Cala',
};
var pSelenePerezRizo = {
    name: 'Selene',
    gender: WOMAN,
    birth: '10 nov 2018',
    comments: 'Selene Perez Rizo'
};

var pJorgeLuisSoriaRamirez = {
    name: 'Jorge Luis',
    nickname: '',
    gender: MAN,
    birth: '11 may 1984',

    comments: 'Jorge Luis Soria Ramirez',
    profile: defaultProfile
};



//---------------------------------------------------------
//END DATA
//---------------------------------------------------------

//---------------------------------------------------------
//BEGIN DRAWING
//---------------------------------------------------------
//change the row,col numbers to position the nodes
var graph = new Graph('jasr', "#graph");


//people nodes
var GEN_SEPARATOR = 3;
var FIRST_GEN_ROW = 0;
var SECOND_GEN_ROW = FIRST_GEN_ROW + GEN_SEPARATOR;
var THIRD_GEN_ROW = SECOND_GEN_ROW + GEN_SEPARATOR;
var FOURTH_GEN_ROW = THIRD_GEN_ROW + GEN_SEPARATOR;
var FIFTH_GEN_ROW = FOURTH_GEN_ROW + GEN_SEPARATOR;
x = 1;
i = 1;

x = graph.addPeople(FIRST_GEN_ROW, x += i,
    pWilfredoLegonWaldarrama, pEstherRodriguezHurtado);

x = 2.5;
i = 1;
x -= i;
x = graph.addPeople(SECOND_GEN_ROW, x += i,
    pMercedesdelaCandelariaLegonRodriguez, pJorgePerez, pRafaelPerezSantana);

x = 2;
i = 1;
x -= i;
x = graph.addPeople(THIRD_GEN_ROW, x += i,
    pJorgeLuisSoriaRamirez,pAnnelisPerezLegon, 
    pRafaelPerezLegon, pDayesiRizoCala);

x = 2;
i = 1;
x -= i;
x = graph.addPeople(FOURTH_GEN_ROW, x += i,
 pCarmenHelenestherSoriaPerez,pJorgeLuisSoriaPerez);
 x = graph.addPeople(FOURTH_GEN_ROW, x += i*0.5,
    pSelenePerezRizo);
   
//RELATIONSHIP DATA 
/*
var relationship = {
    date : date, //null. The date in which the relationship was formalized
    type: string //type of relationship, one of MARRIAGE, RELATIONSHIP
}
 */
//relationship nodes

graph.addMt(pWilfredoLegonWaldarrama.row, pEstherRodriguezHurtado.col - 0.5, [
    pWilfredoLegonWaldarrama, 
    pEstherRodriguezHurtado, 
    pMercedesdelaCandelariaLegonRodriguez
]);


graph.addMt(pMercedesdelaCandelariaLegonRodriguez.row, pJorgePerez.col - 0.5, [
    pMercedesdelaCandelariaLegonRodriguez,
    pJorgePerez,
    pAnnelisPerezLegon
]);

graph.addMt(pMercedesdelaCandelariaLegonRodriguez.row - 1, pRafaelPerezSantana.col -0.5, [
    [pMercedesdelaCandelariaLegonRodriguez,
        [pMercedesdelaCandelariaLegonRodriguez.row-1,pMercedesdelaCandelariaLegonRodriguez.col+0.25], 
        [pMercedesdelaCandelariaLegonRodriguez.row,pMercedesdelaCandelariaLegonRodriguez.col+0.25]
    ],
    
    [pRafaelPerezSantana,[pRafaelPerezSantana.row-1,pRafaelPerezSantana.col]], 
    pRafaelPerezLegon
]);


graph.addMt(pRafaelPerezLegon.row, pDayesiRizoCala.col - 0.5, [
    pRafaelPerezLegon, 
    pDayesiRizoCala, 
    pSelenePerezRizo
]);


graph.addMt(pJorgeLuisSoriaRamirez.row, pAnnelisPerezLegon.col -0.5, [
    pJorgeLuisSoriaRamirez,
    pAnnelisPerezLegon, 
    [pCarmenHelenestherSoriaPerez,
        [pCarmenHelenestherSoriaPerez.row-1.5,pCarmenHelenestherSoriaPerez.col+0.5],
        [pCarmenHelenestherSoriaPerez.row-1.5,pCarmenHelenestherSoriaPerez.col]
    ],
    [pJorgeLuisSoriaPerez,
        [pJorgeLuisSoriaPerez.row-1.5,pJorgeLuisSoriaPerez.col-0.5],
        [pJorgeLuisSoriaPerez.row-1.5,pJorgeLuisSoriaPerez.col]
    ]
]);


//---------------------------------------------------------
//END DRAWING
//---------------------------------------------------------

graph.init();