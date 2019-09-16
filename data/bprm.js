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
var pBlancaMatosGuisado = {
    name: 'Blanca Matos Guisado',

    gender: WOMAN,
    //birth: '',

    comments: 'Blanca "Abuela Blanca" Matos Guisado',
    profile: defaultProfile,
    //photos: []
};

var pAbelina = {
    name: 'Abelina',

    gender: WOMAN,


    comments: 'Hermana de Blanca Matos Guisado',
    profile: defaultProfile
};

var pPrisciliano = {
    name: 'Prisciliano',

    gender: MAN,


    comments: 'Hermano de Blanca Matos Guisado',
    profile: defaultProfile
};

var pCelso = {
    name: 'Celso',

    gender: MAN,


    comments: 'Hermano de Blanca Matos Guisado',
    profile: defaultProfile
};
var pNano = {
    gender: MAN,
    nickname:'Nano',
    comments: 'Hermano de Blanca Matos Guisado',
    profile: defaultProfile
};



var pCorsina = {
    name: 'Corsina',
    nickname: "Corsinita",
    gender: WOMAN,


    comments: 'Hermana de Blanca Matos Guisado',
    profile: defaultProfile
};

var pMarcelinoMatosRondon = {
    name: 'Marcelino',
    //nickname: 'Papa Matos,Papa Pincete',
    gender: MAN,


    comments: 'Marcelino Matos Rondon',
    profile: defaultProfile
};

var pFela = {
    name: 'Fela',

    gender: WOMAN,


    comments: 'Fela Matos Rondon',
    profile: defaultProfile
};

var pLuzMatosRondon = {
    name: 'Luz',

    gender: WOMAN,


    comments: 'Luz Matos Rondon',
    profile: defaultProfile
};
var pDignaElenaMatosMatos = {
    name: 'Digna',
    nickname: 'Nena',
    gender: WOMAN,
    birth: '14/06/1921',
    death: '15/06/2007',
    comments: 'Digna Elena Matos Matos',
    profile: defaultProfile
};

var pManuelAmadoRamirezFlores = {
    name: 'Manuel Amado',
    nickname: 'Amadito',
    gender: MAN,


    comments: 'Manuel Amado Ramirez Flores',
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
    treeRef: 'jlsm'
};

var pJorgeAmadoSoriaRamirez = {
    name: 'Jorge Amado',

    gender: MAN,
    birth: '14 dic 1984',

    comments: 'Jorge Amado Soria Ramirez',
    profile: defaultProfile
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
    profile: defaultProfile
};
var pAmadoMarcelinoRamirezMatos = {
    name: 'Amado Marcelino',
    //nickname: 'Popi',
    gender: MAN,
    birth: '13 feb 1947?',

    comments: 'Amado Marcelino Ramirez Matos',
    profile: defaultProfile
};

var pCaridadMartinAlvarez = {
    name: 'Caridad',
    //nickname: 'Cary',
    gender: WOMAN,


    comments: 'Caridad Martin Alvarez',
    profile: defaultProfile
};

var pPilarMartinAlvarez = {
    name: 'Pilar',

    gender: WOMAN,


    comments: 'Pilar Martin Alvarez, gemela de Cary',
    profile: defaultProfile
};

var pCucaAlvarez = {
    name: 'Cuca',

    gender: WOMAN,


    comments: 'Cuca es la mama de Pilar y Cary',
    profile: defaultProfile
};
var pLuciaAlvarez = {
    name: 'Lucia',

    gender: WOMAN,


    comments: 'hermana de Cuca',
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
var pHilderTorres = {
    name: 'Hilder',

    gender: MAN,


    comments: 'Hilder Torres',
    profile: defaultProfile
};

var pJavierAlejandroTorresRamirez = {
    name: 'Javier',

    gender: MAN,


    comments: 'Javier Alejandro Torres Ramirez',
    profile: defaultProfile
};

var pMiguelAlejandroTorresRamirez = {
    name: 'Miguel',

    gender: MAN,


    comments: 'Miguel Alejandro Torres Ramirez',
    profile: defaultProfile
};

var pYaritskeRamirezPerez = {
    name: 'Yaritské',

    gender: WOMAN,
    birth: '??/04/1976',

    comments: 'Yaritské Ramirez Perez',
    profile: defaultProfile
};

var pRolando = {
    name: 'Rolando',

    gender: MAN,


    comments: 'Rolando ? ?',
    profile: defaultProfile
};

var pRoxana = {
    name: 'Roxana',

    gender: WOMAN,


    comments: 'Roxana ? ?',
    profile: defaultProfile
};

var pRolandito = {
    name: 'Rolando',

    gender: WOMAN,


    comments: '',
    profile: defaultProfile
};

var pWilfredo = {
    name: 'Wilfredo',

    gender: MAN,


    comments: 'Wilfredo ? ?',
    profile: defaultProfile
};

var pGisela = {
    name: 'Gisela',

    gender: WOMAN,


    comments: '',
    profile: defaultProfile
};

var pGiselaHija = {
    name: 'Gisela',

    gender: WOMAN,


    comments: '',
    profile: defaultProfile
};

var pAntoniodeMarcosRamirezMatos = {
    name: 'Antonio de Marcos',

    gender: MAN,
    birth: '18 oct 1953',

    comments: 'Antonio de Marcos Ramirez Matos, nacido Marco Antonio',
    profile: defaultProfile
};

var pGladysAveraztruces = {
    name: 'Gladys',

    gender: WOMAN,


    comments: ' Gladys Averaztruces?',
    profile: defaultProfile
};

var pAndyMarcosRamirezAveraztruces = {
    name: 'Andy',

    gender: MAN,


    comments: 'Andy Marcos Ramirez Averaztruces?',
    profile: defaultProfile
};

var pAntoniodeMarcosRamirezAveraztruces = {
    name: 'Antonio de Marcos',

    gender: MAN,


    comments: 'Antonio de Marcos Ramirez Averaztruces?',
    profile: defaultProfile
};

var pElbaAguilar = {
    name: 'Elba',

    gender: WOMAN,


    comments: 'Elba Aguilar',
    profile: defaultProfile
};

var pMonicaMariaRamirez = {
    name: 'Monica',
    nickname: "Monica Perfecta",
    gender: WOMAN,


    comments: 'Monica Maria Ramirez',
    profile: defaultProfile
};


var pDoraMatosMatos = {
    name: 'Dora Filipina',

    gender: WOMAN,


    comments: 'Dora Filipina Matos Matos',
    profile: defaultProfile
};

var pTelmoMaciasMatos = {
    name: 'Telmo',

    gender: MAN,


    comments: 'Telmo Macias Matos(hijo de un hermano de Marcelino Matos)',
    profile: defaultProfile
};

var pTelmoMaciasMatosHijo = {
    name: 'Telmo',
    nickname: "Telmito",
    gender: MAN,


    comments: 'Telmo Macias Matos',
    profile: defaultProfile
};

var pIlda = {
    name: 'Ilda',

    gender: WOMAN,


    comments: 'Ilda ? ?',
    profile: defaultProfile
};

var pTelmoMacias = {
    name: 'Telmo',
    nickname: "Telmitico",
    gender: MAN,


    comments: 'Telmo Macias',
    profile: defaultProfile
};

var pMarcelinoMatosMatos = {
    name: 'Marcelino',
    nickname: "Bebe",
    gender: MAN,


    comments: 'Marcelino Matos Matos',
    profile: defaultProfile
};

var pLuzDivina = {
    name: 'Luz',

    gender: WOMAN,


    comments: 'Luz Divina',
    profile: defaultProfile
};

var pBlancaMariaMatos = {
    name: 'Blanca',

    gender: WOMAN,


    comments: 'Blanca Maria Matos',
    profile: defaultProfile
};

var pSamuel = {
    name: 'Samuel',

    gender: MAN,


    comments: 'Samuel ? ?',
    profile: defaultProfile
};

var pAntonio = {
    name: 'Antonio',

    gender: MAN,


    comments: 'Antonio',
    profile: defaultProfile
};
var pYamile = {
    name: 'Yamilé',

    gender: WOMAN,


    comments: 'Yamilé ( ? )',
    profile: defaultProfile
};
var pElsaMatosMatos = {
    name: 'Elsa Filomena',

    gender: WOMAN,


    comments: 'Elsa Filomena Matos Matos',
    profile: defaultProfile
};
var pManuelDiaz = {
    name: 'Manuel Diaz',
    nickname: "Manolito",
    gender: MAN,


    comments: 'Manuel Diaz',
    profile: defaultProfile
};

var pElsaDiazMatos = {
    name: 'Elsa',
    nickname: "Elsita",
    gender: WOMAN,


    comments: 'Elsa Diaz Matos',
    profile: defaultProfile
};
var pHeysel = {
    name: 'Heysel',

    gender: MAN,


    comments: 'Heysel( ? )',
    profile: defaultProfile
};

var pAbelinaMatosMatos = {
    name: 'Abelina Esther',
    nickname: "Niní",
    gender: WOMAN,


    comments: 'Abelina Esther Matos Matos',
    profile: defaultProfile
};

var pRubenAguileraAcuna = {
    name: 'Ruben',
    gender: MAN,
    comments: 'Ruben Aguilera Acuña'
};

var pKeniaAguileraMatos = {
    name: 'Kenia',
    gender: WOMAN,
    comments: 'Kenia Aguilera Matos'
};

var pGerardoPelaez = {
    name: 'Gerardo',
    nickname: "El chino",
    gender: MAN,
    comments: 'Gerardo Pelaez'
};

var pAlinetPelaezAguilera = {
    name: 'Alinet',
    gender: WOMAN,
    birth: '2 oct 1973',

    comments: 'Alinet Pelaez Aguilera',
    profile: defaultProfile
};

var pAdrian = {
    name: 'Adrian',

    gender: MAN,


    comments: 'Adrian',
    profile: defaultProfile
};

var pCarlosNunez = {
    name: 'Carlos',

    gender: MAN,


    comments: 'Carlos Nunez',
    profile: defaultProfile
};

var pKarlaNunez = {
    name: 'Karla',

    gender: MAN,


    comments: 'Karla Nuñez',
    profile: defaultProfile
};


var pCarlosNunezAguilera = {
    name: 'Carlos',

    gender: MAN,


    comments: 'Carlos Nunez Aguilera',
    profile: defaultProfile
};
var pRubenAguileraMatos = {
    name: 'Ruben',

    gender: MAN,


    comments: 'Ruben Aguilera Matos',
    profile: defaultProfile
};

var pSandra = {
    name: 'Sandra',

    gender: WOMAN


    
};

var pJilian = {
    name: 'Jilian',

    gender: WOMAN,


    comments: 'prima mia, que fue a la secundaria',
    profile: defaultProfile
};

var pRubenAguilera = {
    name: 'Ruben',

    gender: MAN,


    comments: 'Ruben Aguilera',
    profile: defaultProfile
};
var pLuisEnriqueMatosMatos = {
    name: 'Luis Enrique',
    nickname: "Niño",
    gender: MAN,


    comments: 'Luis Enrique Matos Matos',
    profile: defaultProfile
};
var pIrmaMorales = {
    name: 'Irma',

    gender: WOMAN,


    comments: 'Irma Morales'
};

var pIrmaMatosMorales = {
    name: 'Irma',
    nickname: "Irmita",
    gender: WOMAN,


    comments: 'Irma Matos Morales',
    more:true
};

var pSoniaMatosMorales = {
    name: 'Sonia',

    gender: WOMAN,


    comments: 'Sonia Matos Morales'
};

var pLuisEnriqueMatosMorales = {
    name: 'Luis Enrique',
    nickname: "Niño",
    gender: MAN,


    comments: 'Luis Enrique Matos Morales',
    more:true
};

var pMiguelRamirez = {
    name: 'Miguel',

    gender: MAN,


    comments: 'miguel Ramirez',
    profile: defaultProfile
};

var pPurificacionFloresProenza = {
    name: 'Purificacion',

    gender: WOMAN,


    comments: 'Purificacion Flores Proenza',
    profile: defaultProfile
};

var pManuelAmadoRamirezFlores = {
    name: 'Manuel',
    nickname: 'Amadito',
    gender: MAN,


    comments: 'Manuel Amado Ramirez Flores',
    profile: defaultProfile
};

var pErnestinaRamirezFlores = {
    name: 'Ernestina',

    gender: WOMAN,


    comments: 'Ernestina Ramirez Flores',
    profile: defaultProfile
};

var pNonamePereda = {
    name: 'No name',

    gender: MAN,


    comments: 'No name Pereda',
    profile: defaultProfile
};


var pMiguelRamirezNunez = {
    name: 'Miguel',

    gender: MAN,


    comments: 'Miguel Ramirez Nuñez',
    profile: defaultProfile
};

var pMiguelRamirezFlores = {
    name: 'Miguel',

    gender: MAN,


    comments: 'Miguel Ramirez Flores',
    profile: defaultProfile
};

var pEmiliaGonzalezFruto = {
    name: 'Emilia',

    gender: WOMAN,


    comments: 'Emilia Gonzalez Fruto',
    profile: defaultProfile
};

var pMauricioRamirezGonzalez = {
    name: 'Mauricio',

    gender: MAN,


    comments: 'Mauricio Ramirez Gonzalez, tuvo 4 hijos, uno con una alemana',
    more:true
};

var pXiomaraRamirezGonzalez = {
    name: 'Xiomara',
    gender: WOMAN,
    birth: '14/02/1947-8',
    comments: 'Xiomara Ramirez Gonzalez, misma edad de Popi'
};
var pMiriamRamirezGonzalez = {
    name: 'Miriam',

    gender: WOMAN,


    comments: 'Miriam Ramirez Gonzalez'
};
var pVictorRamirezFlores = {
    name: 'Victor',

    gender: MAN,


    comments: 'Victor Ramirez Flores',
    profile: defaultProfile
};
var pOfeliaVargas = {
    name: 'Ofelia',

    gender: WOMAN,


    comments: 'Ofelia Vargas',
    profile: defaultProfile
};
var pPurificacionRamirezVargas = {
    name: 'Purificacion',
    nickname: "Purita",
    gender: WOMAN,


    comments: 'Purificacion Ramirez Vargas',
    profile: defaultProfile
};
var pSalomeRodriguezPino = {
    name: 'Salomé',
    nickname: "Rigo",
    gender: MAN,


    comments: 'Salomé Rodriguez Pino, era escolta de Fidel',
    profile: defaultProfile
};
var pImirsiRodriguezRamirez = {
    name: 'Imirsi',

    gender: WOMAN,


    comments: 'Imirsi Rodriguez Ramirez',
    profile: defaultProfile
};
var pRonaldRodriguezRamirez = {
    name: 'Ronald',

    gender: MAN,


    comments: 'Ronald Rodriguez Ramirez',
    profile: defaultProfile
};
var pCesarRamirezFlores = {
    name: 'Cesar',

    gender: MAN,


    comments: 'Cesar Ramirez Flores',
    profile: defaultProfile
};
var pLidiaMilanReytor = {
    name: 'Lidia',

    gender: WOMAN,


    comments: 'Lidia Milán Reytor',
    profile: defaultProfile
};

var pCesarRamirezMilan = {
    name: 'Cesar',
    nickname: "Cesarito",
    gender: MAN,


    comments: 'Cesar Ramirez Milan',
    profile: defaultProfile
};

var pEstrellaRamirezMilan = {
    name: 'Estrella',
    nickname: "Estrellita",
    gender: WOMAN,


    comments: 'Estrella Ramirez Milan',
    profile: defaultProfile
};

var pObduliaRamirezMilan = {
    name: 'Obdulia',
    nickname: "Yuyi",
    gender: WOMAN,


    comments: 'Obdulia Ramirez Milan',
    profile: defaultProfile
};

var pTomasFerrandiSayasBazan = {
    name: 'Tomás',
    nickname: "El Chino",
    gender: MAN,


    comments: 'Tomás "El Chino" Ferrandi Sayas Bazán',
    profile: defaultProfile
};

var pSandraFerrandiRamirez = {
    name: 'Sandra',

    gender: WOMAN,


    comments: 'Sandra Ferrandi Ramirez',
    more:true
};

var pDaniaFerrandiRamirez = {
    name: 'Dania',

    gender: WOMAN,


    comments: 'Dania Ferrandi Ramirez',
    profile: defaultProfile
};

var pYasmindaDuvergelMolina = {
    name: 'Yasminda',

    gender: WOMAN,


    comments: 'Yasminda Duvergel Molina'
};

var pIsabela = {
    name: 'Isabela',

    gender: WOMAN,


    comments: 'Isabela'
};

var pFelixRamirezMilan = {
    name: 'Felix',

    gender: MAN,


    comments: 'Felix Ramirez Milan',
    profile: defaultProfile
};

var pEgidioRamirezFlores = {
    name: 'Egidio',

    gender: MAN,


    comments: 'Egidio Ramirez Flores',
    profile: defaultProfile
};

var pNoeliaRamirezFlores = {
    name: 'Noelia',

    gender: WOMAN,


    comments: 'Noelia Ramirez Flores'
};
       
var pYordankaTitoMoreira = {
    name: 'Yordanka',
    gender: WOMAN,
    birth: '19 nov 1976',
    comments: 'Yordanka Tito Moreira'
};

var pAnnelisPerezLegon = {
    name: 'Annelis',
    nickname: 'Nelin',
    gender: WOMAN,
    birth: '26 junio 1972',
    comments: 'Annelis "Nelin" Perez Legon',
    treeRef:'apl'
};

var pCarmenHelenestherSoriaPerez = {
    name: 'Carmen Helenesther',
    nickname: 'Carmencita',
    gender: WOMAN,
    birth: '27 marzo 2001',
    comments: 'Carmen Helenesther Soria Perez (el segundo nombre era una combinacion de Helena y Esther debido a que en su momento no se podian poner tres nombres)'
};
var pJorgeLuisSoriaPerez = {
    name: 'JorgeLuis',
    nickname: 'Mondongo, Cabeza de Zapote, Mongopavia',
    gender: MAN,
    birth: '2 oct 2011',
    comments: 'Jorge Luis Soria Perez'
};

var pLioberNoNameMatos = {
    name: 'Liober',
    gender: MAN,
    comments: 'hijo mayor, no es del mismo matrimonio que los otros dos'
}

var pLiannaLiensMatos = {
    name: 'Lianna Liens Matos',
    gender: WOMAN
};

var pLeandroLiensMatos = {
    name: 'Leandro Liens Matos',
    gender: MAN
};

var pCarina = {
    name: 'Carina',
    gender: WOMAN
};

var pHeyselHijo = {
    name: 'Heysel',
    gender: MAN
};

var pKarel = {
    name: 'Karel',
    gender: MAN
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
x = 11.5;
i = 2;
x -= i;
x = graph.addPeople(FIRST_GEN_ROW, x += i,
    pAbelina,
    pCorsina, pPrisciliano,pCelso,pNano,
    pBlancaMatosGuisado, pMarcelinoMatosRondon, pFela, pLuzMatosRondon);
x = graph.addPeople(FIRST_GEN_ROW, x += i * 25.75,
    pMiguelRamirezNunez, pPurificacionFloresProenza
);

x = 1;
x -= i;
x = graph.addPeople(SECOND_GEN_ROW, x += i,
    pDoraMatosMatos, pTelmoMaciasMatos, pMarcelinoMatosMatos,
    pLuzDivina);
    x = graph.addPeople(SECOND_GEN_ROW, x += i*0.5, pElsaMatosMatos,
    pManuelDiaz);
x = graph.addPeople(SECOND_GEN_ROW, x += i * 2.25, pAbelinaMatosMatos,
    pRubenAguileraAcuna);
x = graph.addPeople(SECOND_GEN_ROW, x += i * 3.25, pLuisEnriqueMatosMatos,
    pIrmaMorales);
x = graph.addPeople(SECOND_GEN_ROW, x += i * 8.5, pDignaElenaMatosMatos,
    pManuelAmadoRamirezFlores);
x = graph.addPeople(SECOND_GEN_ROW, x += i * 6, pCucaAlvarez, pLuciaAlvarez,
    pMiguelRamirezFlores, pEmiliaGonzalezFruto,
    pVictorRamirezFlores, pOfeliaVargas);
x = graph.addPeople(SECOND_GEN_ROW, x += i * 2, pCesarRamirezFlores, pLidiaMilanReytor,
    pEgidioRamirezFlores, pNoeliaRamirezFlores,
    pErnestinaRamirezFlores, pNonamePereda
);

x = 2;
x -= i;
x = graph.addPeople(THIRD_GEN_ROW, x += i,
    pTelmoMaciasMatosHijo, pIlda, pBlancaMariaMatos,
    pSamuel);
    x = graph.addPeople(THIRD_GEN_ROW, x += i*0.5, 
        pElsaDiazMatos, pHeysel,
    pKeniaAguileraMatos, pGerardoPelaez);
x = graph.addPeople(THIRD_GEN_ROW, x += i, pCarlosNunez);
x = graph.addPeople(THIRD_GEN_ROW, x += i*0.5,
    pRubenAguileraMatos, pSandra, pIrmaMatosMorales,
    pSoniaMatosMorales, pLuisEnriqueMatosMorales);
    x = graph.addPeople(THIRD_GEN_ROW, x += i*0.5,pMiguelEnriqueRamirezMatos,
    pAnaPerezFonseca);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 3, pGisela);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 0.5, 
    pBlancaDeLaPurificacionRamirezMatos,
    pJorgeLuisSoriaMaceira);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 2, pAntoniodeMarcosRamirezMatos, pGladysAveraztruces);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 0.5,
    pElbaAguilar, pAmadoMarcelinoRamirezMatos,
    pCaridadMartinAlvarez, pPilarMartinAlvarez, pMauricioRamirezGonzalez,
    pXiomaraRamirezGonzalez, pMiriamRamirezGonzalez, pPurificacionRamirezVargas,
    pSalomeRodriguezPino, pCesarRamirezMilan,
    pEstrellaRamirezMilan, pObduliaRamirezMilan, pTomasFerrandiSayasBazan,
    pFelixRamirezMilan
);

x = 3;
x -= i;
x = graph.addPeople(FOURTH_GEN_ROW, x += i,
    pTelmoMacias);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 0.5, pAntonio, pYamile,pCarina,pHeyselHijo,pKarel,
    pAlinetPelaezAguilera, pAdrian, pCarlosNunezAguilera,pYasmindaDuvergelMolina,
    pRubenAguilera, pJilian,pLioberNoNameMatos,pLiannaLiensMatos,pLeandroLiensMatos,
  pYanitsiaRamirezPerez,
    pHilderTorres, pYaritskeRamirezPerez, pRolando,
    pWilfredo, pGiselaHija,
    pJorgeLuisSoriaRamirez, pYordankaTitoMoreira, pAnnelisPerezLegon,
    pJorgeAmadoSoriaRamirez, pAmalSaifFonte, pAndyMarcosRamirezAveraztruces,
    pAntoniodeMarcosRamirezAveraztruces, pMonicaMariaRamirez);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 0.5, pCarlosEnriqueRamirezMartin,
    pRaulRamirezMartin);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 4,
    pImirsiRodriguezRamirez, pRonaldRodriguezRamirez);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 2,
    pSandraFerrandiRamirez, pDaniaFerrandiRamirez

);

x = 19;
x -= i;
x = graph.addPeople(FIFTH_GEN_ROW, x += i*2,
    pKarlaNunez);
x = graph.addPeople(FIFTH_GEN_ROW, x += i * 5.5,
    pJavierAlejandroTorresRamirez, pMiguelAlejandroTorresRamirez,
    pRoxana, pRolandito);


x = graph.addPeople(FIFTH_GEN_ROW, x += i * 3,
    pCarmenHelenestherSoriaPerez,
    pJorgeLuisSoriaPerez);
x = graph.addPeople(FIFTH_GEN_ROW, x += i * 16.5, pIsabela);

//RELATIONSHIP DATA
/*
var relationship = {
    date : date, //null. The date in which the relationship was formalized
    type: string //type of relationship, one of MARRIAGE, RELATIONSHIP
}
 */

//relationship nodes

graph.rels(0,2,pDaniaFerrandiRamirez, pIsabela);
graph.rels(0,2,pCucaAlvarez, pPilarMartinAlvarez, pCaridadMartinAlvarez);

graph.addRel({
    date: '13/12/2012',
    type: MARRIAGE
}, 1, pBlancaMatosGuisado, pMarcelinoMatosRondon,
pDignaElenaMatosMatos,
pDoraMatosMatos,
pMarcelinoMatosMatos,
pElsaMatosMatos,
pAbelinaMatosMatos,
pLuisEnriqueMatosMatos
);


graph.addRel(defMtNode,1,pCarlosNunezAguilera, pYasmindaDuvergelMolina, pKarlaNunez);
graph.addRel(defMtNode, 1, pMiguelRamirezNunez, pPurificacionFloresProenza, pManuelAmadoRamirezFlores, pErnestinaRamirezFlores, pMiguelRamirezFlores, pVictorRamirezFlores, pCesarRamirezFlores, pEgidioRamirezFlores, pNoeliaRamirezFlores);


graph.addRel(defMtNode, 1, pLuisEnriqueMatosMatos, pIrmaMorales, pIrmaMatosMorales, pSoniaMatosMorales, pLuisEnriqueMatosMorales);
graph.rels(0,2, pSoniaMatosMorales, pLioberNoNameMatos, pLiannaLiensMatos,pLeandroLiensMatos);

graph.addRel(defMtNode, 1, pDignaElenaMatosMatos, pManuelAmadoRamirezFlores,
    pBlancaDeLaPurificacionRamirezMatos, pAmadoMarcelinoRamirezMatos, pMiguelEnriqueRamirezMatos, pAntoniodeMarcosRamirezMatos
);

graph.addRel(defMtNode, 1, pDoraMatosMatos, pTelmoMaciasMatos, pTelmoMaciasMatosHijo);
graph.addRel(defMtNode, 1, pMarcelinoMatosMatos, pLuzDivina, pBlancaMariaMatos);
graph.addRel(defMtNode, 1, pElsaMatosMatos, pManuelDiaz,
    pElsaDiazMatos
);
graph.addRel(defMtNode, 1, pAbelinaMatosMatos, pRubenAguileraAcuna,
    pKeniaAguileraMatos,
    pRubenAguileraMatos
);

graph.addRel(defMtNode, 1, pErnestinaRamirezFlores,
    pNonamePereda
);
graph.addRel(defMtNode, 1, pMiguelRamirezFlores, pEmiliaGonzalezFruto,
    pMauricioRamirezGonzalez,
    pXiomaraRamirezGonzalez,
    pMiriamRamirezGonzalez
);

graph.addRel(defMtNode, 1, pVictorRamirezFlores, pOfeliaVargas, pPurificacionRamirezVargas);
graph.addRel(defMtNode, 1, pCesarRamirezFlores, pLidiaMilanReytor,
    pCesarRamirezMilan,
    pEstrellaRamirezMilan,
    pObduliaRamirezMilan,
    pFelixRamirezMilan
);
graph.addRel(defMtNode, 1, pTelmoMaciasMatosHijo, pIlda, pTelmoMacias);
graph.addRel(defMtNode, 1, pBlancaMariaMatos, pSamuel,
    pAntonio,
    pYamile
);
graph.addRel(defMtNode, 1,
    pBlancaDeLaPurificacionRamirezMatos,
    pJorgeLuisSoriaMaceira,
    pJorgeAmadoSoriaRamirez,
    pJorgeLuisSoriaRamirez
);

graph.addRel(defMtNode, 1, pJorgeAmadoSoriaRamirez,    pAmalSaifFonte);
graph.addRel(defMtNode, 1, pAmadoMarcelinoRamirezMatos, pCaridadMartinAlvarez,    pCarlosEnriqueRamirezMartin,    pRaulRamirezMartin);

//NO FUNCIONA AUN
var mar = {type:MARRIAGE,more:true};
graph.addRel(defMtNode, 1, pElsaDiazMatos, pHeysel,pCarina,pHeyselHijo,pKarel);
graph.addRel(defMtNode, 1, pMiguelEnriqueRamirezMatos, pAnaPerezFonseca,    pYaritskeRamirezPerez,    pYanitsiaRamirezPerez);
graph.addRel(defMtNode, 0.75, pMiguelEnriqueRamirezMatos, pGisela, pGiselaHija);
graph.addRel(defMtNode, 1, pAntoniodeMarcosRamirezMatos, pGladysAveraztruces, pAndyMarcosRamirezAveraztruces, pAntoniodeMarcosRamirezAveraztruces);
graph.addRel(defMtNode, 0.75, pAntoniodeMarcosRamirezMatos, pElbaAguilar, pMonicaMariaRamirez);
graph.addRel(defMtNode, 1, pKeniaAguileraMatos, pGerardoPelaez, pAlinetPelaezAguilera);
graph.addRel(defMtNode, 0.75, pKeniaAguileraMatos, pCarlosNunez, pCarlosNunezAguilera);
graph.addRel(defMtNode, 1, pRubenAguileraMatos, pSandra, pRubenAguilera, pJilian);
graph.addRel(defMtNode, 1, pPurificacionRamirezVargas, pSalomeRodriguezPino, pImirsiRodriguezRamirez, pRonaldRodriguezRamirez);
graph.addRel(defMtNode, 1, pObduliaRamirezMilan, pTomasFerrandiSayasBazan, pSandraFerrandiRamirez, pDaniaFerrandiRamirez);
graph.addRel(defMtNode, 1, pAlinetPelaezAguilera, pAdrian);
graph.addRel(defMtNode, 1, pYanitsiaRamirezPerez, pHilderTorres, pJavierAlejandroTorresRamirez, pMiguelAlejandroTorresRamirez);
graph.addRel(defMtNode, 1, pYaritskeRamirezPerez, pRolando, pRoxana, pRolandito);
graph.addRel(defMtNode, 0.75, pYaritskeRamirezPerez, pWilfredo);
graph.addRel(defMtNode, 1, pJorgeLuisSoriaRamirez, pYordankaTitoMoreira);
graph.addRel(defMtNode, 0.75, pJorgeLuisSoriaRamirez, pAnnelisPerezLegon, pCarmenHelenestherSoriaPerez, pJorgeLuisSoriaPerez);


//---------------------------------------------------------
//END DRAWING
//---------------------------------------------------------

graph.init();