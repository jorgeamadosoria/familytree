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
    //nickname: '',
    gender: WOMAN,
    //birth: '',
    //death: '',
    comments: 'Blanca "Abuela Blanca" Matos Guisado',
    profile: defaultProfile,
    //photos: []
};

var pAbelina = {
    name: 'Abelina',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Hermana de abuela blanca',
    profile: defaultProfile
};

var pCorsina = {
    name: 'Corsina',
    nickname: "Corsinita",
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Hermana de abuela blanca',
    profile: defaultProfile
};

var pMarcelinoMatosRondon = {
    name: 'Marcelino',
    //nickname: 'Papa Matos,Papa Pincete',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Marcelino Matos Rondon',
    profile: defaultProfile
};

var pFela = {
    name: 'Fela',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Fela Matos Rondon',
    profile: defaultProfile
};

var pLuzMatosRondon = {
    name: 'Luz',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Luz Matos Rondon',
    profile: defaultProfile
};
/*
var pNoname = {
    name: 'No name',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'posible padre de Rogelio Matos',
    profile: defaultProfile
};
*/
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
    name: 'Manuel',
    nickname: 'Amadito',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Manuel Amado Ramirez Flores',
    profile: defaultProfile
};

var pBlancaDeLaPurificacionRamirezMatos = {
    name: 'Blanca',
    //nickname: '',
    gender: WOMAN,
    birth: '2 mayo 1950',
    //death: '',
    comments: 'Blanca de la purificacion ramirez matos',
    profile: defaultProfile
};

var pJorgeLuisSoriaMaceira = {
    name: 'Jorge Luis',
    //nickname: '',
    gender: MAN,
    birth: '20 junio 1953',
    //death: '',
    comments: 'Jorge Luis Soria Maceira (fecha equivocada de carnet de identidad 19 enero 1954)',
    profile: defaultProfile
};

var pJorgeAmadoSoriaRamirez = {
    name: '',
    //nickname: '',
    gender: MAN,
    birth: '14 dic 1984',
    //death: '',
    comments: 'Jorge Amado Soria Ramirez',
    profile: defaultProfile
};

var pJorgeLuisSoriaRamirez = {
    name: 'Jorge Luis',
    //nickname: '',
    gender: MAN,
    birth: '11 mayo 1974',
    //death: '',
    comments: 'Jorge Luis Soria Ramirez',
    profile: defaultProfile
};

var pAmadoMarcelinoRamirezMatos = {
    name: 'Amado Marcelino',
    //nickname: 'Popi',
    gender: MAN,
    birth: '13 feb 1947?',
    //death: '',
    comments: 'Amado Marcelino Ramirez Matos',
    profile: defaultProfile
};

var pCaridadMartinAlvarez = {
    name: 'Caridad',
    //nickname: 'Cary',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Caridad Martin Alvarez',
    profile: defaultProfile
};

var pPilarMartin = {
    name: 'Pilar',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Pilar Martin, gemela de Cary',
    profile: defaultProfile
};

var pRaulMartin = {
    name: 'Raul',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Raul Martin',
    profile: defaultProfile
};
var pCuca = {
    name: 'Cuca',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Cuca es la mama de Pilar y Cary',
    profile: defaultProfile
};
var pLucia = {
    name: 'Lucia',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'hermana de Cuca',
    profile: defaultProfile
};
var pCarlosEnriqueRamirezMartin = {
    name: 'Carlos',
    //nickname: '',
    gender: MAN,
    birth: '02/10/1985',
    //death: '',
    comments: 'Carlos Enrique Ramirez Martin',
    profile: defaultProfile
};

var pRaulRamirezMartin = {
    name: 'Raul',
    //nickname: '',
    gender: MAN,
    birth: '2 mayo',
    //death: '',
    comments: 'Raul Ramirez Martin',
    profile: defaultProfile
    //photos: []
};
var pMiguelEnriqueRamirezMatos = {
    name: 'Miguel',
    //nickname: '',
    gender: MAN,
    birth: '3 oct 1948 - 9 ?',
    //death: '',
    comments: 'Miguel Enrique Ramirez Matos',
    profile: defaultProfile
};
var pAnaPerezFonseca = {
    name: 'Ana',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Ana Perez Fonseca',
    profile: defaultProfile
};
var pYanitsiaRamirezPerez = {
    name: 'Yanitsia',
    //nickname: '',
    gender: WOMAN,
    birth: '18 sept 1972 - 3 ?',
    //death: '',
    comments: 'Yanitsia Ramirez Perez',
    profile: defaultProfile
};
var pHilderTorres = {
    name: 'Hilder',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Hilder Torres',
    profile: defaultProfile
};

var pJavierAlejandroTorresRamirez = {
    name: 'Javier',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Javier Alejandro Torres Ramirez',
    profile: defaultProfile
};

var pMiguelAlejandroTorresRamirez = {
    name: 'Miguel',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Miguel Alejandro Torres Ramirez',
    profile: defaultProfile
};

var pYaritskeRamirezPerez = {
    name: 'Yaritské',
    //nickname: '',
    gender: WOMAN,
    birth: '??/04/1976',
    //death: '',
    comments: 'Yaritské Ramirez Perez',
    profile: defaultProfile
};

var pOrlando = {
    name: 'Orlando',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Orlando ? ?',
    profile: defaultProfile
};

var pRoxana = {
    name: 'Roxana',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',-
    comments: 'Roxana ? ?',
    profile: defaultProfile
};

var pRolandito = {
    name: '',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: '',
    profile: defaultProfile
};

var pWilfredo = {
    name: 'Wilfredo',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Wilfredo ? ?',
    profile: defaultProfile
};

var pGisela = {
    name: '',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: '',
    profile: defaultProfile
};

var pGisela = {
    name: '',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: '',
    profile: defaultProfile
};

var pAntoniodeMarcosRamirezMatos = {
    name: 'Antonio de Marcos',
    //nickname: '',
    gender: MAN,
    birth: '18 oct 1953',
    //death: '',
    comments: 'Antonio de Marcos Ramirez Matos, nacido Marco Antonio',
    profile: defaultProfile
};

var pGladysAveraztruces = {
    name: 'Gladys',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: ' Gladys Averaztruces?',
    profile: defaultProfile
};

var pAndyMarcosRamirezAveraztruces = {
    name: 'Andy',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Andy Marcos Ramirez Averaztruces?',
    profile: defaultProfile
};

var pAntoniodeMarcosRamirezAveraztruces = {
    name: 'Antonio de Marcos',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Antonio de Marcos Ramirez Averaztruces?',
    profile: defaultProfile
};

var pElbaAguilar = {
    name: 'Elba',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Elba Aguilar',
    profile: defaultProfile
};

var pMonicaMariaRamirez = {
    name: 'Monica',
    nickname: "Monica Perfecta",
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Monica Maria Ramirez',
    profile: defaultProfile
};

var pMujerNegra = {
    name: '???',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'MujerNegra(extra mat)',
    profile: defaultProfile
};

var pHijaNegrita = {
    name: '???',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'hija negra',
    profile: defaultProfile
};

var pDoraMatosMatos = {
    name: 'Dora',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Dora Matos Matos',
    profile: defaultProfile
};

var pTelmoMaciasMatos = {
    name: 'Telmo',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Telmo Macias Matos(hijo de un hermano de Marcelino Matos)',
    profile: defaultProfile
};

var pTelmoMaciasMatos = {
    name: 'Telmo',
    nickname: "Telmito",
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Telmo Macias Matos',
    profile: defaultProfile
};

var pIlda = {
    name: 'Ilda',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Ilda ? ?',
    profile: defaultProfile
};

var pTelmoMacias = {
    name: '',
    nickname: "Telmitico",
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Telmo Macias',
    profile: defaultProfile
};

var pMarcelinoMatosMatos = {
    name: 'Marcelino',
    nickname: "Bebe",
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Marcelino Matos Matos',
    profile: defaultProfile
};

var pLuzDivina = {
    name: 'Luz',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Luz Divina',
    profile: defaultProfile
};

var pBlancaMariaMatos = {
    name: 'Blanca',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Blanca Maria Matos',
    profile: defaultProfile
};

var pSamuel = {
    name: 'Samuel',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Samuel ? ?',
    profile: defaultProfile
};

var pAntonio = {
    name: 'Antonio',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Antonio',
    profile: defaultProfile
};
var pJacqueline = {
    name: 'Jacqueline',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Jacqueline( ? )',
    profile: defaultProfile
};
var pElsaMatosMatos = {
    name: 'Elsa',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Elsa Matos Matos',
    profile: defaultProfile
};
var pManuelDiaz = {
    name: 'Manuel',
    nickname: "Manolito",
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Manuel Diaz',
    profile: defaultProfile
};

var pElsaDiazMatos = {
    name: 'Elsa',
    nickname: "Elsita",
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Elsa Diaz Matos',
    profile: defaultProfile
};
var pHeysel = {
    name: 'Heysel',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Heysel( ? )',
    profile: defaultProfile
};
var pHeysel2 = {
    name: 'Heysel',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Heysel( ? )',
    profile: defaultProfile
};
var phembra1 = {
    name: 'hembra 1',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'hembra 1',
    profile: defaultProfile
};
var phembra2 = {
    name: 'hembra 2',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'hembra 2( ? )',
    profile: defaultProfile
};

var pAbelinaMatosMatos = {
    name: 'Abelina',
    nickname: "Niní",
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Abelina Matos Matos',
    profile: defaultProfile
};

var pRubenAguileraAcuna = {
    name: 'Ruben',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Ruben Aguilera Acuña',
    profile: defaultProfile
};

var pKeniaAguileraMatos = {
    name: 'Kenia',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Kenia Aguilera Matos',
    profile: defaultProfile
};

var pGerardoPelaez = {
    name: 'Gerardo',
    nickname: "El chino",
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Gerardo Pelaez',
    profile: defaultProfile
};

var pAlinetPelaezAguilera = {
    name: 'Alinet',
    //nickname: '',
    gender: WOMAN,
    birth: '2 oct 1973',
    //death: '',
    comments: 'Alinet Pelaez Aguilera',
    profile: defaultProfile
};

var pAdrian = {
    name: 'Adrian',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Adrian',
    profile: defaultProfile
};

var pCarlosNunez = {
    name: 'Carlos',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Carlos Nunez',
    profile: defaultProfile
};

var pKarlaNunez = {
    name: 'Karla',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Karla Nuñez',
    profile: defaultProfile
};


var pCarlosNunezAguilera = {
    name: 'Carlos',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Carlos Nunez Aguilera',
    profile: defaultProfile
};
var pRubenAguileraMatos = {
    name: 'Ruben',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Ruben Aguilera Matos',
    profile: defaultProfile
};

var pSandra = {
    name: 'Sandra',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: '',
    profile: defaultProfile
};

var pHijaRubenNoname = {
    name: '???',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'hembra hija de Ruben, prima mia, que fue a la secundaria',
    profile: defaultProfile
};

var pRubenAguilera = {
    name: 'Ruben',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Ruben Aguilera',
    profile: defaultProfile
};
var pLuisEnriqueMatosMatos = {
    name: 'Luis Enrique',
    nickname: "Niño",
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Luis Enrique Matos Matos',
    profile: defaultProfile
};
var pIrmaMorales = {
    name: 'Irma',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Irma Morales',
    profile: defaultProfile
};

var pIrmaMatosMorales = {
    name: 'Irma',
    nickname: "Irmita",
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Irma Matos Morales',
    profile: defaultProfile
};

var pSoniaMatosMorales = {
    name: 'Sonia',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Sonia Matos Morales',
    profile: defaultProfile
};

var pLuisEnriqueMatosMorales = {
    name: 'Luis Enrique',
    nickname: "Niño",
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Luis Enrique Matos Morales',
    profile: defaultProfile
};

var pMiguelRamirez = {
    name: 'Miguel',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'miguel Ramirez',
    profile: defaultProfile
};

var pPurificacionFloresProenza = {
    name: 'Purificacion',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Purificacion Flores Proenza',
    profile: defaultProfile
};

var pManuelAmadoRamirezFlores = {
    name: 'Manuel',
    nickname: 'Amadito',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Manuel Amado Ramirez Flores',
    profile: defaultProfile
};

var pErnestinaRamirezFlores = {
    name: 'Ernestina',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Ernestina Ramirez Flores',
    profile: defaultProfile
};

var pNonamePereda = {
    name: 'No name',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'No name Pereda',
    profile: defaultProfile
};


var pMiguelRamirezNunez = {
    name: 'Miguel',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Miguel Ramirez Nuñez',
    profile: defaultProfile
};

var pMiguelRamirezFlores = {
    name: 'Miguel',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Miguel Ramirez Flores',
    profile: defaultProfile
};

var pEmiliaGonzalezFruto = {
    name: 'Emilia',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Emilia Gonzalez Fruto',
    profile: defaultProfile
};

var pMauricioRamirezGonzalez = {
    name: 'Mauricio',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Mauricio Ramirez Gonzalez',
    profile: defaultProfile
};

var pXiomaraRamirezGonzalez = {
    name: 'Xiomara',
    //nickname: '',
    gender: WOMAN,
    birth: '14/02/1947-8',
    //death: '',
    comments: 'Xiomara Ramirez Gonzalez, misma edad de Popi',
    profile: defaultProfile
};
var pMiriamRamirezGonzalez = {
    name: 'Miriam',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Miriam Ramirez Gonzalez',
    profile: defaultProfile
};
var pVictorRamirezFlores = {
    name: 'Victor',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Victor Ramirez Flores',
    profile: defaultProfile
};
var pOfeliaVargas = {
    name: 'Ofelia',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Ofelia Vargas',
    profile: defaultProfile
};
var pPurificacionRamirezVargas = {
    name: 'Purificacion',
    nickname: "Purita",
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Purificacion Ramirez Vargas',
    profile: defaultProfile
};
var pSalomeRodriguezPino = {
    name: 'Salomé',
    nickname: "Rigo",
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Salomé Rodriguez Pino, era escolta de Fidel',
    profile: defaultProfile
};
var pImirsiRodriguezRamirez = {
    name: 'Imirsi',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Imirsi Rodriguez Ramirez',
    profile: defaultProfile
};
var pRonaldRodriguezRamirez = {
    name: 'Ronald',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Ronald Rodriguez Ramirez',
    profile: defaultProfile
};
var pCesarRamirezFlores = {
    name: 'Cesar',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Cesar Ramirez Flores',
    profile: defaultProfile
};
var pLidiaMilanReytor = {
    name: 'Lidia',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Lidia Milán Reytor',
    profile: defaultProfile
};

var pCesarRamirezMilan = {
    name: 'Cesar',
    nickname: "Cesarito",
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Cesar Ramirez Milan',
    profile: defaultProfile
};

var pEstrellaRamirezMilan = {
    name: 'Estrella',
    nickname: "Estrellita",
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Estrella Ramirez Milan',
    profile: defaultProfile
};

var pObduliaRamirezMilan = {
    name: 'Obdulia',
    nickname: "Yuyi",
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Obdulia Ramirez Milan',
    profile: defaultProfile
};

var pTomasFerrandiSayasBazan = {
    name: 'Tomás',
    nickname: "El Chino",
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Tomás "El Chino" Ferrandi Sayas Bazán',
    profile: defaultProfile
};

var pSandraFerrandiRamirez = {
    name: 'Sandra',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Sandra Ferrandi Ramirez',
    profile: defaultProfile
};

var pDaniaFerrandiRamirez = {
    name: 'Dania',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Dania Ferrandi Ramirez',
    profile: defaultProfile
};


var pIsabela = {
    name: 'Isabela',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Isabela',
    profile: defaultProfile
};

var pFelixRamirez = {
    name: 'Felix',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Felix Ramirez',
    profile: defaultProfile
};

var pEgidioRamirezFlores = {
    name: 'Egidio',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Egidio Ramirez Flores',
    profile: defaultProfile
};

var pNoeliaRamirezFlores = {
    name: 'Noelia',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Noelia Ramirez Flores',
    profile: defaultProfile
};

//RELATIONSHIP DATA
/*
var relationship = {
    people : array, //mandatory, a list of all the people related through this node. 
                    //The order is important if the edges are going to bend later on the add() call
    date : date, //null. The date in which the relationship was formalized
    type: string //type of relationship, one of MARRIAGE, RELATIONSHIP
}
 */
var mtBlancaMatosGuisadoMarcelinoMatosRondon = {
    date: '13/12/2012',
    type: MARRIAGE
};

var mtDignaElenaMatosMatosManuelAmadoRamirezFlores = {
    type: MARRIAGE
};

var mtBlancaDeLaPurificacionRamirezMatosJorgeLuisSoriaMaceira = {
    type: MARRIAGE
};
var mtAmadoMarcelinoRamirezMatosCaridadMartinAlvarez = {
    type: MARRIAGE
};
var mtMiguelEnriqueRamirezMatosAnaPerezFonseca = {
    type: MARRIAGE
};
var mtYanitsiaRamirezPerezHilderTorres = {
    type: MARRIAGE
};
var mtYaritskeRamirezPerezOrlando = {
    type: MARRIAGE
};
var mtYaritskeRamirezPerezWilfredo = {
    type: MARRIAGE
};
var mtMiguelEnriqueRamirezMatosGisela = {
    type: MARRIAGE
};
var mtAntoniodeMarcosRamirezMatosGladysAveraztruces = {
    type: MARRIAGE
};
var mtAntoniodeMarcosRamirezAveraztrucesElbaAguilar = {
    type: MARRIAGE
};
var mtAntoniodeMarcosRamirezAveraztrucesMujerNegra = {
    type: RELATIONSHIP
};
var mtDoraMatosMatosTelmoMaciasMatos = {
    type: MARRIAGE
};
var mtTelmoMaciasMatosIlda = {
    type: MARRIAGE
};
var mtMarcelinoMatosMatosLuzDivina = {
    type: MARRIAGE
};
var mtBlancaMariaMatosSamuel = {
    type: MARRIAGE
};
var mtElsaMatosMatosManuelDiaz = {
    type: MARRIAGE
};
var mtElsaDiazMatosHeysel = {
    type: MARRIAGE
};
var mtAbelinaMatosMatosRubenAguileraAcuna = {
    type: MARRIAGE
};
var mtKeniaAguileraMatosGerardoPelaez = {
    type: MARRIAGE
};
var mtKeniaAguileraMatosCarlosNunez = {
    type: MARRIAGE
};
var mtRubenAguileraMatosSandra = {
    type: MARRIAGE
};
var mtLuisEnriqueMatosMatosIrmaMorales = {
    type: MARRIAGE
};
var mtMiguelRamirezNunezPurificacionFloresProenza = {
    type: MARRIAGE
};
var mtErnestinaRamirezFloresNonamePereda = {
    type: MARRIAGE
};
var mtMiguelRamirezFloresEmiliaGonzalezFruto = {
    type: MARRIAGE
};
var mtVictorRamirezFloresOfeliaVargas = {
    type: MARRIAGE
};
var mtPurificacionRamirezVargasSalomeRodriguezPino = {
    type: MARRIAGE
};
var mtCesarRamirezFloresLidiaMilanReytor = {
    type: MARRIAGE
};
var mtObduliaRamirezTomasFerrandiSayasBazan = {
    type: MARRIAGE
};
var mtAlinetPelaezAguileraAdrian = {
    type: MARRIAGE
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
graph.add(1, 1, pBlancaMatosGuisado);
graph.add(1, 10, pMarcelinoMatosRondon);
graph.add(5, 1, pDignaElenaMatosMatos);
graph.add(5, 3, pDoraMatosMatos);
graph.add(5, 5, pMarcelinoMatosMatos);
graph.add(5, 7, pElsaMatosMatos);
graph.add(5, 9, pAbelinaMatosMatos);
graph.add(5, 11, pLuisEnriqueMatosMatos);

graph.add(10, 2, pAbelina);
graph.add(10, 3, pCorsina);
graph.add(10, 5, pFela);
graph.add(10, 6, pLuzMatosRondon);
graph.add(10, 7, pMiguelRamirezNunez);
graph.add(10, 8, pPurificacionFloresProenza);

graph.add(20, 2, pManuelAmadoRamirezFlores);
graph.add(20, 3, pCuca);
graph.add(20, 4, pLucia);
graph.add(20, 6, pTelmoMaciasMatos);
graph.add(20, 8, pLuzDivina);
graph.add(20, 10, pManuelDiaz);
graph.add(20, 12, pRubenAguileraAcuna);
graph.add(20, 14, pIrmaMorales);
graph.add(20, 15, pManuelAmadoRamirezFlores);
graph.add(20, 16, pErnestinaRamirezFlores);
graph.add(20, 17, pNonamePereda);
graph.add(20, 18, pMiguelRamirezFlores);
graph.add(20, 19, pEmiliaGonzalezFruto);
graph.add(20, 20, pVictorRamirezFlores);
graph.add(20, 21, pOfeliaVargas);
graph.add(20, 22, pCesarRamirezFlores);
graph.add(20, 23, pLidiaMilanReytor);
graph.add(20, 24, pEgidioRamirezFlores);
graph.add(20, 25, pNoeliaRamirezFlores);

graph.add(30, 1, pBlancaDeLaPurificacionRamirezMatos);
graph.add(30, 2, pJorgeLuisSoriaMaceira);
graph.add(30, 3, pAmadoMarcelinoRamirezMatos);
graph.add(30, 4, pCaridadMartinAlvarez);
graph.add(30, 5, pPilarMartin);
graph.add(30, 6, pRaulMartin);
graph.add(30, 7, pMiguelEnriqueRamirezMatos);
graph.add(30, 8, pAnaPerezFonseca);
graph.add(30, 9, pGisela);
graph.add(30, 0, pAntoniodeMarcosRamirezMatos);
graph.add(30, 11, pGladysAveraztruces);
graph.add(30, 12, pTelmoMaciasMatos);
graph.add(30, 13, pIlda);
graph.add(30, 14, pBlancaMariaMatos);
graph.add(30, 15, pSamuel);
graph.add(30, 16, pElsaDiazMatos);
graph.add(30, 17, pHeysel);
graph.add(30, 18, pKeniaAguileraMatos);
graph.add(30, 19, pGerardoPelaez);
graph.add(30, 20, pCarlosNunez);
graph.add(30, 21, pRubenAguileraMatos);
graph.add(30, 22, pSandra);
graph.add(30, 23, pIrmaMatosMorales);
graph.add(30, 24, pSoniaMatosMorales);
graph.add(30, 25, pLuisEnriqueMatosMorales);
graph.add(30, 26, pMauricioRamirezGonzalez);
graph.add(30, 27, pXiomaraRamirezGonzalez);
graph.add(30, 28, pMiriamRamirezGonzalez);
graph.add(30, 29, pPurificacionRamirezVargas);
graph.add(30, 30, pSalomeRodriguezPino);
graph.add(30, 31, pCesarRamirezFlores);
graph.add(30, 32, pEstrellaRamirezMilan);
graph.add(30, 33, pObduliaRamirezMilan);
graph.add(30, 34, pFelixRamirez);

graph.add(40, 1, pJorgeAmadoSoriaRamirez);
graph.add(40, 2, pJorgeLuisSoriaRamirez);
graph.add(40, 3, pCarlosEnriqueRamirezMartin);
graph.add(40, 4, pRaulRamirezMartin);
graph.add(40, 5, pYanitsiaRamirezPerez);
graph.add(40, 6, pHilderTorres);
graph.add(40, 7, pYaritskeRamirezPerez);
graph.add(40, 8, pOrlando);
graph.add(40, 9, pGisela);
graph.add(40, 10, pWilfredo);
graph.add(40, 11, pAndyMarcosRamirezAveraztruces);
graph.add(40, 12, pAntoniodeMarcosRamirezAveraztruces);
graph.add(40, 13, pElbaAguilar);
graph.add(40, 14, pMonicaMariaRamirez);
graph.add(40, 15, pMujerNegra);
graph.add(40, 16, pHijaNegrita);
graph.add(40, 17, pTelmoMacias);
graph.add(40, 18, pAntonio);
graph.add(40, 19, pJacqueline);
graph.add(40, 20, pHeysel2);
graph.add(40, 21, phembra1);
graph.add(40, 22, phembra2);
graph.add(40, 23, pAlinetPelaezAguilera);
graph.add(40, 24, pAdrian);
graph.add(40, 25, pCarlosNunezAguilera);
graph.add(40, 26, pRubenAguilera);
graph.add(40, 27, pImirsiRodriguezRamirez);
graph.add(40, 28, pRonaldRodriguezRamirez);
graph.add(40, 29, pTomasFerrandiSayasBazan);
graph.add(40, 30, pSandraFerrandiRamirez);
graph.add(40, 31, pDaniaFerrandiRamirez);
graph.add(40, 32, pHijaRubenNoname);

graph.add(50, 1, pJavierAlejandroTorresRamirez);
graph.add(50, 2, pMiguelAlejandroTorresRamirez);
graph.add(50, 3, pRoxana);
graph.add(50, 4, pRolandito);
graph.add(50, 5, pKarlaNunez);
graph.add(50, 6, pIsabela);

//relationship nodes
graph.add(1, 5, mtBlancaMatosGuisadoMarcelinoMatosRondon,
    [pBlancaMatosGuisado, pMarcelinoMatosRondon, pDignaElenaMatosMatos,
        pDoraMatosMatos, pMarcelinoMatosMatos, pElsaMatosMatos,
        pAbelinaMatosMatos, pLuisEnriqueMatosMatos
    ]);

graph.add(5, 10, mtDignaElenaMatosMatosManuelAmadoRamirezFlores, [pBlancaDeLaPurificacionRamirezMatos, pAmadoMarcelinoRamirezMatos, pMiguelEnriqueRamirezMatos, pAntoniodeMarcosRamirezMatos]);
graph.add(1, 10, mtBlancaDeLaPurificacionRamirezMatosJorgeLuisSoriaMaceira, [pBlancaDeLaPurificacionRamirezMatos, pJorgeLuisSoriaMaceira, pJorgeAmadoSoriaRamirez, pJorgeLuisSoriaRamirez]);
graph.add(1, 12, mtAmadoMarcelinoRamirezMatosCaridadMartinAlvarez, [pAmadoMarcelinoRamirezMatos, pCaridadMartinAlvarez, pCarlosEnriqueRamirezMartin, pRaulRamirezMartin]);
graph.add(1, 14, mtMiguelEnriqueRamirezMatosAnaPerezFonseca, [pMiguelEnriqueRamirezMatos, pAnaPerezFonseca, pYaritskeRamirezPerez, pYanitsiaRamirezPerez]);
graph.add(1, 16, mtYanitsiaRamirezPerezHilderTorres, [pYanitsiaRamirezPerez, pHilderTorres, pJavierAlejandroTorresRamirez, pMiguelAlejandroTorresRamirez]);
graph.add(1, 18, mtYaritskeRamirezPerezOrlando, [pYaritskeRamirezPerez, pOrlando, pRoxana, pRolandito]);
graph.add(1, 20, mtYaritskeRamirezPerezWilfredo, [pYaritskeRamirezPerez, pWilfredo]);
graph.add(1, 22, mtMiguelEnriqueRamirezMatosGisela, [pMiguelEnriqueRamirezMatos, pGisela]);
graph.add(1, 24, mtAntoniodeMarcosRamirezMatosGladysAveraztruces, [pAntoniodeMarcosRamirezMatos, pGladysAveraztruces, pAndyMarcosRamirezAveraztruces, pAntoniodeMarcosRamirezAveraztruces]);
graph.add(1, 26, mtAntoniodeMarcosRamirezAveraztrucesElbaAguilar, [pAntoniodeMarcosRamirezAveraztruces, pElbaAguilar, pMonicaMariaRamirez]);
graph.add(1, 28, mtAntoniodeMarcosRamirezAveraztrucesMujerNegra, [pAntoniodeMarcosRamirezAveraztruces, pMujerNegra, pHijaNegrita]);
graph.add(1, 30, mtDoraMatosMatosTelmoMaciasMatos, [pDoraMatosMatos, pTelmoMaciasMatos, pTelmoMaciasMatos]);
graph.add(1, 32, mtTelmoMaciasMatosIlda, [pTelmoMaciasMatos, pIlda, pTelmoMacias]);
graph.add(1, 34, mtMarcelinoMatosMatosLuzDivina, [pMarcelinoMatosMatos, pLuzDivina, pBlancaMariaMatos]);
graph.add(1, 36, mtBlancaMariaMatosSamuel, [pBlancaMariaMatos, pSamuel, pAntonio, pJacqueline]);
graph.add(1, 38, mtElsaMatosMatosManuelDiaz, [pElsaMatosMatos, pManuelDiaz, pElsaDiazMatos]);
graph.add(1, 40, mtElsaDiazMatosHeysel, [pElsaDiazMatos, pHeysel, pHeysel2, phembra1, phembra2]);
graph.add(1, 42, mtAbelinaMatosMatosRubenAguileraAcuna, [pAbelinaMatosMatos, pRubenAguileraAcuna, pKeniaAguileraMatos, pRubenAguileraMatos]);
graph.add(1, 44, mtKeniaAguileraMatosGerardoPelaez, [pKeniaAguileraMatos, pGerardoPelaez, pAlinetPelaezAguilera]);
graph.add(1, 46, mtKeniaAguileraMatosCarlosNunez, [pKeniaAguileraMatos, pCarlosNunez, pCarlosNunezAguilera]);
graph.add(1, 48, mtRubenAguileraMatosSandra, [pRubenAguileraMatos, pSandra, pRubenAguilera, pHijaRubenNoname]);
graph.add(1, 50, mtLuisEnriqueMatosMatosIrmaMorales, [pLuisEnriqueMatosMatos, pIrmaMorales, pIrmaMatosMorales, pSoniaMatosMorales, pLuisEnriqueMatosMorales]);
graph.add(1, 52, mtMiguelRamirezNunezPurificacionFloresProenza, [pMiguelRamirezNunez, pPurificacionFloresProenza,pMiguelRamirezFlores,pVictorRamirezFlores,pCesarRamirezFlores]);
graph.add(1, 54, mtErnestinaRamirezFloresNonamePereda, [pErnestinaRamirezFlores, pNonamePereda]);
graph.add(1, 56, mtMiguelRamirezFloresEmiliaGonzalezFruto, [pMiguelRamirezFlores, pEmiliaGonzalezFruto,pMauricioRamirezGonzalez,pXiomaraRamirezGonzalez,pMiriamRamirezGonzalez]);
graph.add(1, 58, mtVictorRamirezFloresOfeliaVargas, [pVictorRamirezFlores, pOfeliaVargas,pPurificacionRamirezVargas]);
graph.add(1, 60, mtPurificacionRamirezVargasSalomeRodriguezPino, [pPurificacionRamirezVargas, pSalomeRodriguezPino,pImirsiRodriguezRamirez,pRonaldRodriguezRamirez]);
graph.add(1, 62, mtCesarRamirezFloresLidiaMilanReytor, [pCesarRamirezFlores, pLidiaMilanReytor,pCesarRamirezMilan,pEstrellaRamirezMilan,pObduliaRamirezMilan]);
graph.add(1, 64, mtObduliaRamirezTomasFerrandiSayasBazan, [pObduliaRamirezMilan, pTomasFerrandiSayasBazan,pSandraFerrandiRamirez,pDaniaFerrandiRamirez]);
graph.add(1, 64, mtAlinetPelaezAguileraAdrian, [pAlinetPelaezAguilera, pAdrian]);
graph.add(1, 66, mtMiguelRamirezNunezPurificacionFloresProenza, [pManuelAmadoRamirezFlores, pErnestinaRamirezFlores, pMiguelRamirezFlores, pVictorRamirezFlores, pCesarRamirezFlores, pEgidioRamirezFlores, pNoeliaRamirezFlores]);
graph.add(1, 68, mtErnestinaRamirezFloresNonamePereda,[pErnestinaRamirezFlores,pNonamePereda]);
graph.rel(pDaniaFerrandiRamirez,pIsabela);
/*
graph.more(5, 50, mtLuisEnriqueMatosMatosIrmaMorales);
graph.more(5, 50, pSoniaMatosMorales);
graph.more(5, 50, pIrmaMatosMorales);
graph.more(5, 50, pLuisEnriqueMatosMorales);
*/
//---------------------------------------------------------
//relationship nodes. 
//These also include the edges from all people related to the central relationship node, 
//as well as any invisible node required for segmented edges, if present.

/*graph.add(1, 5, mtAbuelaPaternaAbueloPaterno, [pAbuelaPaterna, pAbueloPaterno, pPadre]);
graph.add(1, 3, mtAbueloMaternoAbuelaMaterna, [pAbueloMaterno, pAbuelaMaterna, pMadre]);
graph.add(5, 3.25, mtHijoConyuge, [pHijo, pConyuge]);
graph.add(4.25, 2.5, rlHijoNovia, [
    [
        pHijo, [4.25, 3.5],
        [5, 3.5]
    ],
    [
        pNovia, [4.25, 2.25]
    ]
]);
graph.add(3, 4, mtPadreMadre, [
    [pMadre],
    [pPadre],
    //hijo
    [pHijo, [4, 4],
        [4, 3.75]
    ],
    //hermano
    [pHermano, [4, 4],
        [4, 4.25]
    ]
]);
*/
//'more' nodes. Also includes the edge from the person node to the more node 

//graph.more(7, 4.25, pHermano);

//edges directly between two people, without a relationship

//graph.rel(pConyuge, pHijoAdoptivo);

//---------------------------------------------------------
//END DRAWING
//---------------------------------------------------------

graph.init();