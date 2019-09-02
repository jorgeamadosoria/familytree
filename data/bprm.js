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


    comments: 'Hermana de abuela blanca',
    profile: defaultProfile
};

var pCorsina = {
    name: 'Corsina',
    nickname: "Corsinita",
    gender: WOMAN,


    comments: 'Hermana de abuela blanca',
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
    profile: defaultProfile
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

var pRaulMartin = {
    name: 'Raul',

    gender: MAN,


    comments: 'Raul Martin',
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

var pOrlando = {
    name: 'Orlando',

    gender: MAN,


    comments: 'Orlando ? ?',
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
    name: 'Dora',

    gender: WOMAN,


    comments: 'Dora Matos Matos',
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
var pJacqueline = {
    name: 'Jacqueline',

    gender: WOMAN,


    comments: 'Jacqueline( ? )',
    profile: defaultProfile
};
var pElsaMatosMatos = {
    name: 'Elsa',

    gender: WOMAN,


    comments: 'Elsa Matos Matos',
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
    name: 'Abelina',
    nickname: "Niní",
    gender: WOMAN,


    comments: 'Abelina Matos Matos',
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

    gender: WOMAN,


    comments: '',
    profile: defaultProfile
};

var pHijaRubenNoname = {
    name: '???',

    gender: WOMAN,


    comments: 'hembra hija de Ruben, prima mia, que fue a la secundaria',
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


    comments: 'Irma Morales',
    profile: defaultProfile
};

var pIrmaMatosMorales = {
    name: 'Irma',
    nickname: "Irmita",
    gender: WOMAN,


    comments: 'Irma Matos Morales',
    profile: defaultProfile
};

var pSoniaMatosMorales = {
    name: 'Sonia',

    gender: WOMAN,


    comments: 'Sonia Matos Morales',
    profile: defaultProfile
};

var pLuisEnriqueMatosMorales = {
    name: 'Luis Enrique',
    nickname: "Niño",
    gender: MAN,


    comments: 'Luis Enrique Matos Morales',
    profile: defaultProfile
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


    comments: 'Mauricio Ramirez Gonzalez',
    profile: defaultProfile
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
    profile: defaultProfile
};

var pDaniaFerrandiRamirez = {
    name: 'Dania',

    gender: WOMAN,


    comments: 'Dania Ferrandi Ramirez',
    profile: defaultProfile
};


var pIsabela = {
    name: 'Isabela',

    gender: WOMAN,


    comments: 'Isabela',
    profile: defaultProfile
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
    comments: 'Annelis "Nelin" Perez Legon'
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


//---------------------------------------------------------
//END DATA
//---------------------------------------------------------

//---------------------------------------------------------
//BEGIN DRAWING
//---------------------------------------------------------
//change the row,col numbers to position the nodes
var graph = new Graph('jasr', "#graph");


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
    pBlancaMatosGuisado, pMarcelinoMatosRondon, pAbelina,
    pCorsina, pFela, pLuzMatosRondon);
x = graph.addPeople(FIRST_GEN_ROW, x += i * 29,
    pMiguelRamirezNunez, pPurificacionFloresProenza
);

x = 1;
x -= i;
x = graph.addPeople(SECOND_GEN_ROW, x += i,
    pDoraMatosMatos, pTelmoMaciasMatos, pMarcelinoMatosMatos,
    pLuzDivina, pElsaMatosMatos,
    pManuelDiaz);
x = graph.addPeople(SECOND_GEN_ROW, x += i * 2, pAbelinaMatosMatos,
    pRubenAguileraAcuna);
x = graph.addPeople(SECOND_GEN_ROW, x += i * 3, pLuisEnriqueMatosMatos,
    pIrmaMorales);
x = graph.addPeople(SECOND_GEN_ROW, x += i * 8.5, pDignaElenaMatosMatos,
    pManuelAmadoRamirezFlores);
x = graph.addPeople(SECOND_GEN_ROW, x += i * 5.5, pCucaAlvarez, pLuciaAlvarez,
    pMiguelRamirezFlores, pEmiliaGonzalezFruto,
    pVictorRamirezFlores, pOfeliaVargas);
x = graph.addPeople(SECOND_GEN_ROW, x += i * 3, pCesarRamirezFlores, pLidiaMilanReytor,
    pEgidioRamirezFlores, pNoeliaRamirezFlores,
    pErnestinaRamirezFlores, pNonamePereda
);

x = 2;
x -= i;
x = graph.addPeople(THIRD_GEN_ROW, x += i,
    pTelmoMaciasMatosHijo, pIlda, pBlancaMariaMatos,
    pSamuel, pElsaDiazMatos, pHeysel,
    pKeniaAguileraMatos, pGerardoPelaez);
x = graph.addPeople(THIRD_GEN_ROW, x += i, pCarlosNunez,
    pRubenAguileraMatos, pSandra, pIrmaMatosMorales,
    pSoniaMatosMorales, pLuisEnriqueMatosMorales, pMiguelEnriqueRamirezMatos,
    pAnaPerezFonseca);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 3, pGisela);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 0.5, pBlancaDeLaPurificacionRamirezMatos,
    pJorgeLuisSoriaMaceira);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 2, pAntoniodeMarcosRamirezMatos, pGladysAveraztruces);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 0.5,
    pElbaAguilar, pAmadoMarcelinoRamirezMatos,
    pCaridadMartinAlvarez, pPilarMartinAlvarez, pMauricioRamirezGonzalez,
    pXiomaraRamirezGonzalez, pMiriamRamirezGonzalez, pPurificacionRamirezVargas,
    pSalomeRodriguezPino, pRaulMartin, pCesarRamirezMilan,
    pEstrellaRamirezMilan, pObduliaRamirezMilan, pTomasFerrandiSayasBazan,
    pFelixRamirezMilan
);

x = 3;
x -= i;
x = graph.addPeople(FOURTH_GEN_ROW, x += i,
    pTelmoMacias);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 0.5, pAntonio, pJacqueline);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 2.5,
    pAlinetPelaezAguilera, pAdrian, pCarlosNunezAguilera);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 0.5,
    pRubenAguilera, pHijaRubenNoname);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 2.5, pYanitsiaRamirezPerez,
    pHilderTorres, pYaritskeRamirezPerez, pOrlando,
    pWilfredo, pGiselaHija,
    pJorgeLuisSoriaRamirez, pYordankaTitoMoreira, pAnnelisPerezLegon,
    pJorgeAmadoSoriaRamirez, pAmalSaifFonte, pAndyMarcosRamirezAveraztruces,
    pAntoniodeMarcosRamirezAveraztruces, pMonicaMariaRamirez);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 0.5, pCarlosEnriqueRamirezMartin,
    pRaulRamirezMartin);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 4,
    pImirsiRodriguezRamirez, pRonaldRodriguezRamirez);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 3,
    pSandraFerrandiRamirez, pDaniaFerrandiRamirez

);

x = 19;
x -= i;
x = graph.addPeople(FIFTH_GEN_ROW, x += i,
    pKarlaNunez);
x = graph.addPeople(FIFTH_GEN_ROW, x += i * 5,
    pJavierAlejandroTorresRamirez, pMiguelAlejandroTorresRamirez,
    pRoxana, pRolandito);


x = graph.addPeople(FIFTH_GEN_ROW, x += i * 3,
    pCarmenHelenestherSoriaPerez,
    pJorgeLuisSoriaPerez);
x = graph.addPeople(FIFTH_GEN_ROW, x += i * 17.5, pIsabela);

//RELATIONSHIP DATA
/*
var relationship = {
    date : date, //null. The date in which the relationship was formalized
    type: string //type of relationship, one of MARRIAGE, RELATIONSHIP
}
 */

//relationship nodes

graph.rels(0,2,pDaniaFerrandiRamirez, pIsabela);
graph.rels(0,2,pCarlosNunezAguilera, pKarlaNunez);
graph.rels(0,2,pCucaAlvarez, pPilarMartinAlvarez, pCaridadMartinAlvarez);

graph.addOtherMt({
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


graph.addOtherMt(defMtNode, 1, pMiguelRamirezNunez, pPurificacionFloresProenza, pManuelAmadoRamirezFlores, pErnestinaRamirezFlores, pMiguelRamirezFlores, pVictorRamirezFlores, pCesarRamirezFlores, pEgidioRamirezFlores, pNoeliaRamirezFlores);


graph.addOtherMt(defMtNode, 1, pLuisEnriqueMatosMatos, pIrmaMorales, pIrmaMatosMorales, pSoniaMatosMorales, pLuisEnriqueMatosMorales);

graph.addOtherMt(defMtNode, 1, pDignaElenaMatosMatos, pManuelAmadoRamirezFlores,
    pBlancaDeLaPurificacionRamirezMatos, pAmadoMarcelinoRamirezMatos, pMiguelEnriqueRamirezMatos, pAntoniodeMarcosRamirezMatos
);

graph.addOtherMt(defMtNode, 1, pDoraMatosMatos, pTelmoMaciasMatos, pTelmoMaciasMatosHijo);
graph.addOtherMt(defMtNode, 1, pMarcelinoMatosMatos, pLuzDivina, pBlancaMariaMatos);
graph.addOtherMt(defMtNode, 1, pElsaMatosMatos, pManuelDiaz,
    pElsaDiazMatos
);
graph.addOtherMt(defMtNode, 1, pAbelinaMatosMatos, pRubenAguileraAcuna,
    pKeniaAguileraMatos,
    pRubenAguileraMatos
);

graph.addOtherMt(defMtNode, 1, pErnestinaRamirezFlores,
    pNonamePereda
);
graph.addOtherMt(defMtNode, 1, pMiguelRamirezFlores, pEmiliaGonzalezFruto,
    pMauricioRamirezGonzalez,
    pXiomaraRamirezGonzalez,
    pMiriamRamirezGonzalez
);

graph.addOtherMt(defMtNode, 1, pVictorRamirezFlores, pOfeliaVargas, pPurificacionRamirezVargas);
graph.addOtherMt(defMtNode, 1, pCesarRamirezFlores, pLidiaMilanReytor,
    pCesarRamirezMilan,
    pEstrellaRamirezMilan,
    pObduliaRamirezMilan,
    pFelixRamirezMilan
);
graph.addOtherMt(defMtNode, 1, pTelmoMaciasMatosHijo, pIlda, pTelmoMacias);
graph.addOtherMt(defMtNode, 1, pBlancaMariaMatos, pSamuel,
    pAntonio,
    pJacqueline
);
graph.addOtherMt(defMtNode, 1,
    pBlancaDeLaPurificacionRamirezMatos,
    pJorgeLuisSoriaMaceira,
    pJorgeAmadoSoriaRamirez,
    pJorgeLuisSoriaRamirez
);

graph.addOtherMt(defMtNode, 1, pJorgeAmadoSoriaRamirez,    pAmalSaifFonte);
graph.addOtherMt(defMtNode, 1, pAmadoMarcelinoRamirezMatos, pCaridadMartinAlvarez,    pCarlosEnriqueRamirezMartin,    pRaulRamirezMartin);

graph.addOtherMt(defMtNode, 1, pElsaDiazMatos, pHeysel);

graph.addOtherMt(defMtNode, 1, pMiguelEnriqueRamirezMatos, pAnaPerezFonseca,    pYaritskeRamirezPerez,    pYanitsiaRamirezPerez);
graph.addOtherMt(defMtNode, 0.75, pMiguelEnriqueRamirezMatos, pGisela, pGiselaHija);
graph.addOtherMt(defMtNode, 1, pAntoniodeMarcosRamirezMatos, pGladysAveraztruces, pAndyMarcosRamirezAveraztruces, pAntoniodeMarcosRamirezAveraztruces);
graph.addOtherMt(defMtNode, 0.75, pAntoniodeMarcosRamirezMatos, pElbaAguilar, pMonicaMariaRamirez);
graph.addOtherMt(defMtNode, 1, pKeniaAguileraMatos, pGerardoPelaez, pAlinetPelaezAguilera);
graph.addOtherMt(defMtNode, 0.75, pKeniaAguileraMatos, pCarlosNunez, pCarlosNunezAguilera);
graph.addOtherMt(defMtNode, 1, pRubenAguileraMatos, pSandra, pRubenAguilera, pHijaRubenNoname);
graph.addOtherMt(defMtNode, 1, pPurificacionRamirezVargas, pSalomeRodriguezPino, pImirsiRodriguezRamirez, pRonaldRodriguezRamirez);
graph.addOtherMt(defMtNode, 1, pObduliaRamirezMilan, pTomasFerrandiSayasBazan, pSandraFerrandiRamirez, pDaniaFerrandiRamirez);
graph.addOtherMt(defMtNode, 1, pAlinetPelaezAguilera, pAdrian);
graph.addOtherMt(defMtNode, 1, pYanitsiaRamirezPerez, pHilderTorres, pJavierAlejandroTorresRamirez, pMiguelAlejandroTorresRamirez);
graph.addOtherMt(defMtNode, 1, pYaritskeRamirezPerez, pOrlando, pRoxana, pRolandito);
graph.addOtherMt(defMtNode, 0.75, pYaritskeRamirezPerez, pWilfredo);
graph.addOtherMt(defMtNode, 1, pJorgeLuisSoriaRamirez, pYordankaTitoMoreira);
graph.addOtherMt(defMtNode, 0.75, pJorgeLuisSoriaRamirez, pAnnelisPerezLegon, pCarmenHelenestherSoriaPerez, pJorgeLuisSoriaPerez);

graph.stdMore(pSoniaMatosMorales);
graph.stdMore(pLuisEnriqueMatosMorales);
graph.stdMore(pIrmaMatosMorales);

//---------------------------------------------------------
//END DRAWING
//---------------------------------------------------------

graph.init();