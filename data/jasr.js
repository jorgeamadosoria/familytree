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
    name: 'Manuel Amado',
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
    name: 'Jorge Amado',
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

var pPilarMartinAlvarez = {
    name: 'Pilar',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Pilar Martin Alvarez, gemela de Cary',
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
var pCucaAlvarez = {
    name: 'Cuca',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Cuca es la mama de Pilar y Cary',
    profile: defaultProfile
};
var pLuciaAlvarez = {
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
    name: 'Rolando',
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
    name: 'Gisela',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: '',
    profile: defaultProfile
};

var pGiselaHija = {
    name: 'Gisela',
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

var pTelmoMaciasMatosHijo = {
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
    name: 'Telmo',
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
    name: 'Manuel Diaz',
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

var pFelixRamirezMilan = {
    name: 'Felix',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Felix Ramirez Milan',
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
var mtAntoniodeMarcosRamirezMatosElbaAguilar = {
    type: MARRIAGE
};
var rlAntoniodeMarcosRamirezMatosMujerNegra = {
    type: RELATIONSHIP
};
var mtDoraMatosMatosTelmoMaciasMatos = {
    type: MARRIAGE
};
var mtTelmoMaciasMatosHijoIlda = {
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
var GEN_SEPARATOR=5;
var FIRST_GEN_ROW=0;
var SECOND_GEN_ROW=FIRST_GEN_ROW+GEN_SEPARATOR;
var THIRD_GEN_ROW=SECOND_GEN_ROW+GEN_SEPARATOR;
var FOURTH_GEN_ROW=THIRD_GEN_ROW+GEN_SEPARATOR;
var FIFTH_GEN_ROW=FOURTH_GEN_ROW+GEN_SEPARATOR;
x = 3;
i = 2;
x -= i;
pBlancaMatosGuisado.row = FIRST_GEN_ROW;
pBlancaMatosGuisado.col = x += i;
graph.addPerson(pBlancaMatosGuisado);
pMarcelinoMatosRondon.row = FIRST_GEN_ROW;
pMarcelinoMatosRondon.col = x += i;
graph.addPerson(pMarcelinoMatosRondon);
pAbelina.row = FIRST_GEN_ROW;
pAbelina.col = x += i;
graph.addPerson(pAbelina);
pCorsina.row = FIRST_GEN_ROW;
pCorsina.col = x += i;
graph.addPerson(pCorsina);
pMiguelRamirezNunez.row = FIRST_GEN_ROW;
pMiguelRamirezNunez.col = x += i;
graph.addPerson(pMiguelRamirezNunez);
pPurificacionFloresProenza.row = FIRST_GEN_ROW;
pPurificacionFloresProenza.col = x += i;
graph.addPerson(pPurificacionFloresProenza);
pFela.row = FIRST_GEN_ROW;
pFela.col = x += i;
graph.addPerson(pFela);
pLuzMatosRondon.row = FIRST_GEN_ROW;
pLuzMatosRondon.col = x += i;
graph.addPerson(pLuzMatosRondon);

x = 1;
i = 2;
x -= i;
pDoraMatosMatos.row = SECOND_GEN_ROW;
pDoraMatosMatos.col = x += i;
graph.addPerson(pDoraMatosMatos);
pMarcelinoMatosMatos.row = SECOND_GEN_ROW;
pMarcelinoMatosMatos.col = x += i;
graph.addPerson(pMarcelinoMatosMatos);
pLuzDivina.row = SECOND_GEN_ROW;
pLuzDivina.col = x += i;
graph.addPerson(pLuzDivina);
pElsaMatosMatos.row = SECOND_GEN_ROW;
pElsaMatosMatos.col = x += i;
graph.addPerson(pElsaMatosMatos);
pManuelDiaz.row = SECOND_GEN_ROW;
pManuelDiaz.col = x += i;
graph.addPerson(pManuelDiaz);
x += i*1.5;
pAbelinaMatosMatos.row = SECOND_GEN_ROW;
pAbelinaMatosMatos.col = x += i;
graph.addPerson(pAbelinaMatosMatos);
pRubenAguileraAcuna.row = SECOND_GEN_ROW;
pRubenAguileraAcuna.col = x += i;
graph.addPerson(pRubenAguileraAcuna);
x += i*3.5;
pLuisEnriqueMatosMatos.row = SECOND_GEN_ROW;
pLuisEnriqueMatosMatos.col = x += i;
graph.addPerson(pLuisEnriqueMatosMatos);
pIrmaMorales.row = SECOND_GEN_ROW;
pIrmaMorales.col = x += i;
graph.addPerson(pIrmaMorales);
x += i*8;
pDignaElenaMatosMatos.row = SECOND_GEN_ROW;
pDignaElenaMatosMatos.col = x += i;
graph.addPerson(pDignaElenaMatosMatos);
pManuelAmadoRamirezFlores.row = SECOND_GEN_ROW;
pManuelAmadoRamirezFlores.col = x += i;
graph.addPerson(pManuelAmadoRamirezFlores);
pTelmoMaciasMatos.row = SECOND_GEN_ROW;
pTelmoMaciasMatos.col = x += i;
graph.addPerson(pTelmoMaciasMatos);
x += i*4.5;
pCucaAlvarez.row = SECOND_GEN_ROW;
pCucaAlvarez.col = x += i;
graph.addPerson(pCucaAlvarez);
pLuciaAlvarez.row = SECOND_GEN_ROW;
pLuciaAlvarez.col = x += i;
graph.addPerson(pLuciaAlvarez);
pMiguelRamirezFlores.row = SECOND_GEN_ROW;
pMiguelRamirezFlores.col = x += i;
graph.addPerson(pMiguelRamirezFlores);
pEmiliaGonzalezFruto.row = SECOND_GEN_ROW;
pEmiliaGonzalezFruto.col = x += i;
graph.addPerson(pEmiliaGonzalezFruto);
pVictorRamirezFlores.row = SECOND_GEN_ROW;
pVictorRamirezFlores.col = x += i;
graph.addPerson(pVictorRamirezFlores);
pOfeliaVargas.row = SECOND_GEN_ROW;
pOfeliaVargas.col = x += i;
graph.addPerson(pOfeliaVargas);
x += i*3;
pCesarRamirezFlores.row = SECOND_GEN_ROW;
pCesarRamirezFlores.col = x += i;
graph.addPerson(pCesarRamirezFlores);
pLidiaMilanReytor.row = SECOND_GEN_ROW;
pLidiaMilanReytor.col = x += i;
graph.addPerson(pLidiaMilanReytor);
pEgidioRamirezFlores.row = SECOND_GEN_ROW;
pEgidioRamirezFlores.col = x += i;
graph.addPerson(pEgidioRamirezFlores);
pNoeliaRamirezFlores.row = SECOND_GEN_ROW;
pNoeliaRamirezFlores.col = x += i;
graph.addPerson(pNoeliaRamirezFlores);
pErnestinaRamirezFlores.row = SECOND_GEN_ROW;
pErnestinaRamirezFlores.col = x += i;
graph.addPerson(pErnestinaRamirezFlores);
pNonamePereda.row = SECOND_GEN_ROW;
pNonamePereda.col = x += i;
graph.addPerson(pNonamePereda);

x = 0;
i = 2;
x -= i;
pTelmoMaciasMatosHijo.row = THIRD_GEN_ROW;
pTelmoMaciasMatosHijo.col = x += i;
graph.addPerson(pTelmoMaciasMatosHijo);
pIlda.row = THIRD_GEN_ROW;
pIlda.col = x += i;
graph.addPerson(pIlda);
pBlancaMariaMatos.row = THIRD_GEN_ROW;
pBlancaMariaMatos.col = x += i;
graph.addPerson(pBlancaMariaMatos);
pSamuel.row = THIRD_GEN_ROW;
pSamuel.col = x += i;
graph.addPerson(pSamuel);
pElsaDiazMatos.row = THIRD_GEN_ROW;
pElsaDiazMatos.col = x += i;
graph.addPerson(pElsaDiazMatos);
pHeysel.row = THIRD_GEN_ROW;
pHeysel.col = x += i;
graph.addPerson(pHeysel);
pKeniaAguileraMatos.row = THIRD_GEN_ROW;
pKeniaAguileraMatos.col = x += i;
graph.addPerson(pKeniaAguileraMatos);
pGerardoPelaez.row = THIRD_GEN_ROW;
pGerardoPelaez.col = x += i;
graph.addPerson(pGerardoPelaez);
x += i*1;
pCarlosNunez.row = THIRD_GEN_ROW;
pCarlosNunez.col = x += i;
graph.addPerson(pCarlosNunez);
pRubenAguileraMatos.row = THIRD_GEN_ROW;
pRubenAguileraMatos.col = x += i;
graph.addPerson(pRubenAguileraMatos);
pSandra.row = THIRD_GEN_ROW;
pSandra.col = x += i;
graph.addPerson(pSandra);
pIrmaMatosMorales.row = THIRD_GEN_ROW;
pIrmaMatosMorales.col = x += i;
graph.addPerson(pIrmaMatosMorales);
pSoniaMatosMorales.row = THIRD_GEN_ROW;
pSoniaMatosMorales.col = x += i;
graph.addPerson(pSoniaMatosMorales);
pLuisEnriqueMatosMorales.row = THIRD_GEN_ROW;
pLuisEnriqueMatosMorales.col = x += i;
graph.addPerson(pLuisEnriqueMatosMorales);
x += i*0.5;
pMiguelEnriqueRamirezMatos.row = THIRD_GEN_ROW;
pMiguelEnriqueRamirezMatos.col = x += i;
graph.addPerson(pMiguelEnriqueRamirezMatos);
pAnaPerezFonseca.row = THIRD_GEN_ROW;
pAnaPerezFonseca.col = x += i;
graph.addPerson(pAnaPerezFonseca);
x += i*3;
pGisela.row = THIRD_GEN_ROW;
pGisela.col = x += i;
graph.addPerson(pGisela);
x += i*0.5;
pBlancaDeLaPurificacionRamirezMatos.row = THIRD_GEN_ROW;
pBlancaDeLaPurificacionRamirezMatos.col = x += i;
graph.addPerson(pBlancaDeLaPurificacionRamirezMatos);
pJorgeLuisSoriaMaceira.row = THIRD_GEN_ROW;
pJorgeLuisSoriaMaceira.col = x += i;
graph.addPerson(pJorgeLuisSoriaMaceira);
pAntoniodeMarcosRamirezMatos.row = THIRD_GEN_ROW;
pAntoniodeMarcosRamirezMatos.col = x += i;
graph.addPerson(pAntoniodeMarcosRamirezMatos);
pGladysAveraztruces.row = THIRD_GEN_ROW;
pGladysAveraztruces.col = x += i;
graph.addPerson(pGladysAveraztruces);
x += i*0.5;
pElbaAguilar.row = THIRD_GEN_ROW;
pElbaAguilar.col = x += i;
graph.addPerson(pElbaAguilar);
pMujerNegra.row = THIRD_GEN_ROW;
pMujerNegra.col = x += i;
graph.addPerson(pMujerNegra);
pAmadoMarcelinoRamirezMatos.row = THIRD_GEN_ROW;
pAmadoMarcelinoRamirezMatos.col = x += i;
graph.addPerson(pAmadoMarcelinoRamirezMatos);
pCaridadMartinAlvarez.row = THIRD_GEN_ROW;
pCaridadMartinAlvarez.col = x += i;
graph.addPerson(pCaridadMartinAlvarez);
pPilarMartinAlvarez.row = THIRD_GEN_ROW;
pPilarMartinAlvarez.col = x += i;
graph.addPerson(pPilarMartinAlvarez);
pMauricioRamirezGonzalez.row = THIRD_GEN_ROW;
pMauricioRamirezGonzalez.col = x += i;
graph.addPerson(pMauricioRamirezGonzalez);
pXiomaraRamirezGonzalez.row = THIRD_GEN_ROW;
pXiomaraRamirezGonzalez.col = x += i;
graph.addPerson(pXiomaraRamirezGonzalez);
pMiriamRamirezGonzalez.row = THIRD_GEN_ROW;
pMiriamRamirezGonzalez.col = x += i;
graph.addPerson(pMiriamRamirezGonzalez);
pPurificacionRamirezVargas.row = THIRD_GEN_ROW;
pPurificacionRamirezVargas.col = x += i;
graph.addPerson(pPurificacionRamirezVargas);
pSalomeRodriguezPino.row = THIRD_GEN_ROW;
pSalomeRodriguezPino.col = x += i;
graph.addPerson(pSalomeRodriguezPino);
pRaulMartin.row = THIRD_GEN_ROW;
pRaulMartin.col = x += i;
graph.addPerson(pRaulMartin);
pCesarRamirezMilan.row = THIRD_GEN_ROW;
pCesarRamirezMilan.col = x += i;
graph.addPerson(pCesarRamirezMilan);
pEstrellaRamirezMilan.row = THIRD_GEN_ROW;
pEstrellaRamirezMilan.col = x += i;
graph.addPerson(pEstrellaRamirezMilan);
pObduliaRamirezMilan.row = THIRD_GEN_ROW;
pObduliaRamirezMilan.col = x += i;
graph.addPerson(pObduliaRamirezMilan);
pTomasFerrandiSayasBazan.row = THIRD_GEN_ROW;
pTomasFerrandiSayasBazan.col = x += i;
graph.addPerson(pTomasFerrandiSayasBazan);
pFelixRamirezMilan.row = THIRD_GEN_ROW;
pFelixRamirezMilan.col = x += i;
graph.addPerson(pFelixRamirezMilan);

x = 1;
i = 2;
x -= i;
pTelmoMacias.row = FOURTH_GEN_ROW;
pTelmoMacias.col = x += i;
graph.addPerson(pTelmoMacias);
x += i*0.5;
pAntonio.row = FOURTH_GEN_ROW;
pAntonio.col = x += i;
graph.addPerson(pAntonio);
pJacqueline.row = FOURTH_GEN_ROW;
pJacqueline.col = x += i;
graph.addPerson(pJacqueline);
x += i*2.5;
pAlinetPelaezAguilera.row = FOURTH_GEN_ROW;
pAlinetPelaezAguilera.col = x += i;
graph.addPerson(pAlinetPelaezAguilera);
pAdrian.row = FOURTH_GEN_ROW;
pAdrian.col = x += i;
graph.addPerson(pAdrian);
pCarlosNunezAguilera.row = FOURTH_GEN_ROW;
pCarlosNunezAguilera.col = x += i;
graph.addPerson(pCarlosNunezAguilera);
x += i*0.5;
pRubenAguilera.row = FOURTH_GEN_ROW;
pRubenAguilera.col = x += i;
graph.addPerson(pRubenAguilera);
pHijaRubenNoname.row = FOURTH_GEN_ROW;
pHijaRubenNoname.col = x += i;
graph.addPerson(pHijaRubenNoname);
x += i*3;
pYanitsiaRamirezPerez.row = FOURTH_GEN_ROW;
pYanitsiaRamirezPerez.col = x += i;
graph.addPerson(pYanitsiaRamirezPerez);
pHilderTorres.row = FOURTH_GEN_ROW;
pHilderTorres.col = x += i;
graph.addPerson(pHilderTorres);
pYaritskeRamirezPerez.row = FOURTH_GEN_ROW;
pYaritskeRamirezPerez.col = x += i;
graph.addPerson(pYaritskeRamirezPerez);
pOrlando.row = FOURTH_GEN_ROW;
pOrlando.col = x += i;
graph.addPerson(pOrlando);
pWilfredo.row = FOURTH_GEN_ROW;
pWilfredo.col = x += i;
graph.addPerson(pWilfredo);
pGiselaHija.row = FOURTH_GEN_ROW;
pGiselaHija.col = x += i;
graph.addPerson(pGiselaHija);
x += i*1;
pJorgeAmadoSoriaRamirez.row = FOURTH_GEN_ROW;
pJorgeAmadoSoriaRamirez.col = x += i;
graph.addPerson(pJorgeAmadoSoriaRamirez);
pJorgeLuisSoriaRamirez.row = FOURTH_GEN_ROW;
pJorgeLuisSoriaRamirez.col = x += i;
graph.addPerson(pJorgeLuisSoriaRamirez);
pAndyMarcosRamirezAveraztruces.row = FOURTH_GEN_ROW;
pAndyMarcosRamirezAveraztruces.col = x += i;
graph.addPerson(pAndyMarcosRamirezAveraztruces);
pAntoniodeMarcosRamirezAveraztruces.row = FOURTH_GEN_ROW;
pAntoniodeMarcosRamirezAveraztruces.col = x += i;
graph.addPerson(pAntoniodeMarcosRamirezAveraztruces);
pMonicaMariaRamirez.row = FOURTH_GEN_ROW;
pMonicaMariaRamirez.col = x += i;
graph.addPerson(pMonicaMariaRamirez);
x+=3;
pCarlosEnriqueRamirezMartin.row = FOURTH_GEN_ROW;
pCarlosEnriqueRamirezMartin.col = x += i;
graph.addPerson(pCarlosEnriqueRamirezMartin);
pRaulRamirezMartin.row = FOURTH_GEN_ROW;
pRaulRamirezMartin.col = x += i;
graph.addPerson(pRaulRamirezMartin);
x+=8;
pImirsiRodriguezRamirez.row = FOURTH_GEN_ROW;
pImirsiRodriguezRamirez.col = x += i;
graph.addPerson(pImirsiRodriguezRamirez);
pRonaldRodriguezRamirez.row = FOURTH_GEN_ROW;
pRonaldRodriguezRamirez.col = x += i;
graph.addPerson(pRonaldRodriguezRamirez);
x+=6;
pSandraFerrandiRamirez.row = FOURTH_GEN_ROW;
pSandraFerrandiRamirez.col = x += i;
graph.addPerson(pSandraFerrandiRamirez);
pDaniaFerrandiRamirez.row = FOURTH_GEN_ROW;
pDaniaFerrandiRamirez.col = x += i;
graph.addPerson(pDaniaFerrandiRamirez);

x = 1;
i = 2;
x -= i;
x+=29;
pJavierAlejandroTorresRamirez.row = FIFTH_GEN_ROW;
pJavierAlejandroTorresRamirez.col = x += i;
graph.addPerson(pJavierAlejandroTorresRamirez);
pMiguelAlejandroTorresRamirez.row = FIFTH_GEN_ROW;
pMiguelAlejandroTorresRamirez.col = x += i;
graph.addPerson(pMiguelAlejandroTorresRamirez);
pRoxana.row = FIFTH_GEN_ROW;
pRoxana.col = x += i;
graph.addPerson(pRoxana);
pRolandito.row = FIFTH_GEN_ROW;
pRolandito.col = x += i;
graph.addPerson(pRolandito);
pKarlaNunez.row = FIFTH_GEN_ROW;
pKarlaNunez.col = x += i;
graph.addPerson(pKarlaNunez);
x+=41;
pIsabela.row = FIFTH_GEN_ROW;
pIsabela.col = x += i;
graph.addPerson(pIsabela);



//relationship nodes
graph.rel(pDaniaFerrandiRamirez, pIsabela);
graph.rel(pCucaAlvarez, pPilarMartinAlvarez,[[pCucaAlvarez.row+3,pCucaAlvarez.col],[pPilarMartinAlvarez.row-2,pPilarMartinAlvarez.col]]);
graph.rel(pCucaAlvarez, pCaridadMartinAlvarez,[[pCucaAlvarez.row+3,pCucaAlvarez.col],[pCaridadMartinAlvarez.row-2,pCaridadMartinAlvarez.col]]);
graph.add(pBlancaMatosGuisado.row, pMarcelinoMatosRondon.col - 1,
    mtBlancaMatosGuisadoMarcelinoMatosRondon,
    [pBlancaMatosGuisado, pMarcelinoMatosRondon,
        [pDignaElenaMatosMatos,
            [pBlancaMatosGuisado.row + 3, pMarcelinoMatosRondon.col - 1],
            [pDignaElenaMatosMatos.row - 2, pDignaElenaMatosMatos.col]
        ],
        [pDoraMatosMatos,
            [pBlancaMatosGuisado.row + 3, pMarcelinoMatosRondon.col - 1],
            [pDoraMatosMatos.row - 2, pDoraMatosMatos.col]
        ],
        [pMarcelinoMatosMatos,
            [pBlancaMatosGuisado.row + 3, pMarcelinoMatosRondon.col - 1],
            [pMarcelinoMatosMatos.row - 2, pMarcelinoMatosMatos.col]
        ],
        [pElsaMatosMatos,
            [pBlancaMatosGuisado.row + 3, pMarcelinoMatosRondon.col - 1],
            [pElsaMatosMatos.row - 2, pElsaMatosMatos.col]
        ],
        [pAbelinaMatosMatos,
            [pBlancaMatosGuisado.row + 3, pMarcelinoMatosRondon.col - 1],
            [pAbelinaMatosMatos.row - 2, pAbelinaMatosMatos.col]
        ],
        [pLuisEnriqueMatosMatos,
            [pBlancaMatosGuisado.row + 3, pMarcelinoMatosRondon.col - 1],
            [pLuisEnriqueMatosMatos.row - 2, pLuisEnriqueMatosMatos.col]
        ]
    ]
);
graph.add(pMiguelRamirezNunez, pPurificacionFloresProenza.col - 1,
    mtMiguelRamirezNunezPurificacionFloresProenza,
    [pMiguelRamirezNunez, pPurificacionFloresProenza, pManuelAmadoRamirezFlores, pErnestinaRamirezFlores, pMiguelRamirezFlores, pVictorRamirezFlores, pCesarRamirezFlores, pEgidioRamirezFlores, pNoeliaRamirezFlores]);
graph.add(pLuisEnriqueMatosMatos.row, pIrmaMorales.col - 1,
    mtLuisEnriqueMatosMatosIrmaMorales, 
    [pLuisEnriqueMatosMatos, pIrmaMorales, 
        [pIrmaMatosMorales,
            [pLuisEnriqueMatosMatos.row+3,pIrmaMorales.col - 1],
            [pIrmaMatosMorales.row - 2,pIrmaMatosMorales.col]
        ], 
        [pSoniaMatosMorales,
            [pLuisEnriqueMatosMatos.row+3,pIrmaMorales.col - 1],
            [pSoniaMatosMorales.row - 2,pSoniaMatosMorales.col]
        ], 
        [pLuisEnriqueMatosMorales,
            [pLuisEnriqueMatosMatos.row+3,pIrmaMorales.col - 1],
            [pLuisEnriqueMatosMorales.row - 2,pLuisEnriqueMatosMorales.col]
        ]
    ]
);
graph.add(pDignaElenaMatosMatos.row, pManuelAmadoRamirezFlores.col - 1,
    mtDignaElenaMatosMatosManuelAmadoRamirezFlores, 
    [pDignaElenaMatosMatos, pManuelAmadoRamirezFlores, 
        [pBlancaDeLaPurificacionRamirezMatos,
            [pDignaElenaMatosMatos.row+3,pManuelAmadoRamirezFlores.col-1],
            [pBlancaDeLaPurificacionRamirezMatos.row-2,pBlancaDeLaPurificacionRamirezMatos.col]
        ],
        [pAmadoMarcelinoRamirezMatos,
            [pDignaElenaMatosMatos.row+3,pManuelAmadoRamirezFlores.col-1],
            [pAmadoMarcelinoRamirezMatos.row-2,pAmadoMarcelinoRamirezMatos.col]
        ],
        [pMiguelEnriqueRamirezMatos,
            [pDignaElenaMatosMatos.row+3,pManuelAmadoRamirezFlores.col-1],
            [pMiguelEnriqueRamirezMatos.row-2,pMiguelEnriqueRamirezMatos.col]
        ],
        [pAntoniodeMarcosRamirezMatos,
            [pDignaElenaMatosMatos.row+3,pManuelAmadoRamirezFlores.col-1],
            [pAntoniodeMarcosRamirezMatos.row-2,pAntoniodeMarcosRamirezMatos.col]
        ]
    ]
);
graph.add(pDoraMatosMatos, pTelmoMaciasMatos.col - 1, mtDoraMatosMatosTelmoMaciasMatos,
    [pDoraMatosMatos, pTelmoMaciasMatos, pTelmoMaciasMatosHijo]
);
graph.add(pMarcelinoMatosMatos.row, pLuzDivina.col - 1,
    mtMarcelinoMatosMatosLuzDivina,
    [pMarcelinoMatosMatos, pLuzDivina, pBlancaMariaMatos]
);
graph.add(pElsaMatosMatos.row, pManuelDiaz.col - 1, mtElsaMatosMatosManuelDiaz,
    [pElsaMatosMatos, pManuelDiaz, pElsaDiazMatos]
);
graph.add(pAbelinaMatosMatos.row, pRubenAguileraAcuna.col - 1,
    mtAbelinaMatosMatosRubenAguileraAcuna,
    [pAbelinaMatosMatos, pRubenAguileraAcuna,
        [pKeniaAguileraMatos, 
            [pAbelinaMatosMatos.row + 3, pRubenAguileraAcuna.col - 1], 
            [pKeniaAguileraMatos.row - 2, pKeniaAguileraMatos.col]
        ],
        [pRubenAguileraMatos, 
            [pAbelinaMatosMatos.row + 3, pRubenAguileraAcuna.col - 1],
            [pRubenAguileraMatos.row - 2, pRubenAguileraMatos.col]
        ]
    ]
);
graph.add(pErnestinaRamirezFlores.row, pNonamePereda.col - 1,
    mtErnestinaRamirezFloresNonamePereda,
    [
        pErnestinaRamirezFlores,
        pNonamePereda
    ]
);
graph.add(pMiguelRamirezFlores.row, pEmiliaGonzalezFruto.col - 1,
    mtMiguelRamirezFloresEmiliaGonzalezFruto,
    [pMiguelRamirezFlores, pEmiliaGonzalezFruto, 
        [pMauricioRamirezGonzalez,[pMiguelRamirezFlores.row+3,pEmiliaGonzalezFruto.col-1],[pMauricioRamirezGonzalez.row-2,pMauricioRamirezGonzalez.col]],
        [pXiomaraRamirezGonzalez,[pMiguelRamirezFlores.row+3,pEmiliaGonzalezFruto.col-1],[pXiomaraRamirezGonzalez.row-2,pXiomaraRamirezGonzalez.col]], 
        [pMiriamRamirezGonzalez,[pMiguelRamirezFlores.row+3,pEmiliaGonzalezFruto.col-1],[pMiriamRamirezGonzalez.row-2,pMiriamRamirezGonzalez.col]]
    ]
);
graph.add(pVictorRamirezFlores.row, pOfeliaVargas.col - 1,
    mtVictorRamirezFloresOfeliaVargas,
    [pVictorRamirezFlores, pOfeliaVargas, pPurificacionRamirezVargas]
);
graph.add(pCesarRamirezFlores.row, pLidiaMilanReytor.col - 1,
    mtCesarRamirezFloresLidiaMilanReytor,
    [pCesarRamirezFlores,pLidiaMilanReytor,
        [pCesarRamirezMilan,[pCesarRamirezFlores.row+3,pLidiaMilanReytor.col-1],
        [pCesarRamirezMilan.row-2,pCesarRamirezMilan.col]],
        [pEstrellaRamirezMilan,[pCesarRamirezFlores.row+3,pLidiaMilanReytor.col-1],
        [pEstrellaRamirezMilan.row-2,pEstrellaRamirezMilan.col]],
        [pObduliaRamirezMilan,[pCesarRamirezFlores.row+3,pLidiaMilanReytor.col-1],
        [pObduliaRamirezMilan.row-2,pObduliaRamirezMilan.col]],
        [pFelixRamirezMilan,[pCesarRamirezFlores.row+3,pLidiaMilanReytor.col-1],[pFelixRamirezMilan.row-2,pFelixRamirezMilan.col]]
    ]
);
graph.add(pTelmoMaciasMatosHijo.row, pIlda.col - 1,
    mtTelmoMaciasMatosHijoIlda,
    [pTelmoMaciasMatosHijo, pIlda, pTelmoMacias]
);
graph.add(pBlancaMariaMatos.row, pSamuel.col - 1,
    mtBlancaMariaMatosSamuel,
    [pBlancaMariaMatos, pSamuel, 
        [pAntonio,[pBlancaMariaMatos.row+3,pSamuel.col-1],[pAntonio.row-2,pAntonio.col]], 
        [pJacqueline,[pBlancaMariaMatos.row+3,pSamuel.col-1],[pJacqueline.row-2,pJacqueline.col]]
    ]
);
graph.add(pBlancaDeLaPurificacionRamirezMatos.row, pJorgeLuisSoriaMaceira.col - 1,
    mtBlancaDeLaPurificacionRamirezMatosJorgeLuisSoriaMaceira,
    [
        pBlancaDeLaPurificacionRamirezMatos,
        pJorgeLuisSoriaMaceira,
        [pJorgeAmadoSoriaRamirez,[pBlancaDeLaPurificacionRamirezMatos.row+3,pJorgeLuisSoriaMaceira.col-1],[pJorgeAmadoSoriaRamirez.row-2,pJorgeAmadoSoriaRamirez.col]],
        [pJorgeLuisSoriaRamirez,[pBlancaDeLaPurificacionRamirezMatos.row+3,pJorgeLuisSoriaMaceira.col-1],[pJorgeLuisSoriaRamirez.row-2,pJorgeLuisSoriaRamirez.col]]
    ]
);
graph.add(pAmadoMarcelinoRamirezMatos.row, pCaridadMartinAlvarez.col - 1,
    mtAmadoMarcelinoRamirezMatosCaridadMartinAlvarez,
    [pAmadoMarcelinoRamirezMatos, pCaridadMartinAlvarez, 
        [pCarlosEnriqueRamirezMartin,[pAmadoMarcelinoRamirezMatos.row+3,pCaridadMartinAlvarez.col-1],[pCarlosEnriqueRamirezMartin.row-2,pCarlosEnriqueRamirezMartin.col]],
        [pRaulRamirezMartin,[pAmadoMarcelinoRamirezMatos.row+3,pCaridadMartinAlvarez.col-1],[pRaulRamirezMartin.row-2,pRaulRamirezMartin.col]]
    ]
);
graph.add(pElsaDiazMatos.row, pHeysel.col - 1, mtElsaDiazMatosHeysel,
    [pElsaDiazMatos, pHeysel]
);
graph.add(pMiguelEnriqueRamirezMatos.row - 1, pGisela.col - 1,
    mtMiguelEnriqueRamirezMatosGisela,
    [
        [pMiguelEnriqueRamirezMatos,
            [
                pMiguelEnriqueRamirezMatos.row - 1,
                pMiguelEnriqueRamirezMatos.col
            ]
        ],
        [pGisela, [pGisela.row - 1, pGisela.col]],
        [pGiselaHija,
            [
                pMiguelEnriqueRamirezMatos.row - 1,
                pGisela.col - 1
            ],
            [
                pGiselaHija.row - 2,
                pGiselaHija.col
            ]
        ]
    ]
);
graph.add(pMiguelEnriqueRamirezMatos.row, pAnaPerezFonseca.col - 1,
    mtMiguelEnriqueRamirezMatosAnaPerezFonseca,
    [pMiguelEnriqueRamirezMatos, pAnaPerezFonseca, 
        [pYaritskeRamirezPerez,[pMiguelEnriqueRamirezMatos.row+3,pAnaPerezFonseca.col-1],[pYaritskeRamirezPerez.row-2,pYaritskeRamirezPerez.col]], 
        [pYanitsiaRamirezPerez,[pMiguelEnriqueRamirezMatos.row+3,pAnaPerezFonseca.col-1],[pYanitsiaRamirezPerez.row-2,pYanitsiaRamirezPerez.col]]
    ]
);
graph.add(pAntoniodeMarcosRamirezMatos.row, pGladysAveraztruces.col - 1,
    mtAntoniodeMarcosRamirezMatosGladysAveraztruces,
    [pAntoniodeMarcosRamirezMatos, pGladysAveraztruces, 
        [pAndyMarcosRamirezAveraztruces,[pAntoniodeMarcosRamirezMatos.row+3,pGladysAveraztruces.col-1],[pAndyMarcosRamirezAveraztruces.row-2,pAndyMarcosRamirezAveraztruces.col]],
        [pAntoniodeMarcosRamirezAveraztruces,[pAntoniodeMarcosRamirezMatos.row+3,pGladysAveraztruces.col-1],[pAntoniodeMarcosRamirezAveraztruces.row-2,pAntoniodeMarcosRamirezAveraztruces.col]]
    ]
);
graph.add(pAntoniodeMarcosRamirezMatos.row - 1, pMujerNegra.col - 1,
    rlAntoniodeMarcosRamirezMatosMujerNegra,
    [
        [pAntoniodeMarcosRamirezMatos,
            [pAntoniodeMarcosRamirezMatos.row - 1, pAntoniodeMarcosRamirezMatos.col]
        ],
        [pMujerNegra, [pMujerNegra.row - 1, pMujerNegra.col]]
    ]
);
graph.add(pAntoniodeMarcosRamirezMatos.row - 0.75, pElbaAguilar.col - 1,
    mtAntoniodeMarcosRamirezMatosElbaAguilar,
    [
        [pAntoniodeMarcosRamirezMatos, [pAntoniodeMarcosRamirezMatos.row - 0.75, pAntoniodeMarcosRamirezMatos.col]],
        [pElbaAguilar, [pElbaAguilar.row - 0.75, pElbaAguilar.col]], pMonicaMariaRamirez
    ]);
graph.add(pKeniaAguileraMatos.row, pGerardoPelaez.col - 1,
    mtKeniaAguileraMatosGerardoPelaez,
    [pKeniaAguileraMatos, pGerardoPelaez, pAlinetPelaezAguilera]);
graph.add(pKeniaAguileraMatos.row - 1, pCarlosNunez.col - 1,
    mtKeniaAguileraMatosCarlosNunez,
    [
        [pKeniaAguileraMatos, [pKeniaAguileraMatos.row - 1, pKeniaAguileraMatos.col]],
        [pCarlosNunez, [pCarlosNunez.row - 1, pCarlosNunez.col]], pCarlosNunezAguilera
    ]);
graph.add(pRubenAguileraMatos.row, pSandra.col - 1, mtRubenAguileraMatosSandra, 
    [pRubenAguileraMatos, pSandra, 
        [pRubenAguilera,[pRubenAguileraMatos.row+3,pSandra.col-1],[pRubenAguilera.row-2,pRubenAguilera.col]],
        [pHijaRubenNoname,[pRubenAguileraMatos.row+3,pSandra.col-1],[pHijaRubenNoname.row-2,pHijaRubenNoname.col]]
    ]
);
graph.add(pPurificacionRamirezVargas.row, pSalomeRodriguezPino.col - 1, mtPurificacionRamirezVargasSalomeRodriguezPino, 
    [pPurificacionRamirezVargas, pSalomeRodriguezPino, 
        [pImirsiRodriguezRamirez,[pPurificacionRamirezVargas.row+3,pSalomeRodriguezPino.col-1],[pImirsiRodriguezRamirez.row-2,pImirsiRodriguezRamirez.col]], 
        [pRonaldRodriguezRamirez,[pPurificacionRamirezVargas.row+3,pSalomeRodriguezPino.col-1],[pRonaldRodriguezRamirez.row-2,pRonaldRodriguezRamirez.col]]
    ]
);
graph.add(pObduliaRamirezMilan.row, pTomasFerrandiSayasBazan.col - 1, mtObduliaRamirezTomasFerrandiSayasBazan, 
    [pObduliaRamirezMilan, pTomasFerrandiSayasBazan, 
        [pSandraFerrandiRamirez,[pObduliaRamirezMilan.row+3,pTomasFerrandiSayasBazan.col-1],[pSandraFerrandiRamirez.row-2,pSandraFerrandiRamirez.col]], 
        [pDaniaFerrandiRamirez,[pObduliaRamirezMilan.row+3,pTomasFerrandiSayasBazan.col-1],[pDaniaFerrandiRamirez.row-2,pDaniaFerrandiRamirez.col]
    ]
]);
graph.add(pAlinetPelaezAguilera.row, pAdrian.col - 1, mtAlinetPelaezAguileraAdrian,
    [pAlinetPelaezAguilera, pAdrian]);
graph.add(pYanitsiaRamirezPerez.row, pHilderTorres.col - 1, mtYanitsiaRamirezPerezHilderTorres,
    [pYanitsiaRamirezPerez, pHilderTorres, 
        [pJavierAlejandroTorresRamirez,[pYanitsiaRamirezPerez.row+3,pHilderTorres.col-1],[pJavierAlejandroTorresRamirez.row-2,pJavierAlejandroTorresRamirez.col]], 
        [pMiguelAlejandroTorresRamirez,[pYanitsiaRamirezPerez.row+3,pHilderTorres.col-1],[pMiguelAlejandroTorresRamirez.row-2,pMiguelAlejandroTorresRamirez.col]]
    ]
);
graph.add(pYaritskeRamirezPerez.row, pOrlando.col - 1, mtYaritskeRamirezPerezOrlando,
    [pYaritskeRamirezPerez, pOrlando, 
        [pRoxana,[pYaritskeRamirezPerez.row+3,pOrlando.col-1],[pRoxana.row-2,pRoxana.col]], 
        [pRolandito,[pYaritskeRamirezPerez.row+3,pOrlando.col-1],[pRolandito.row-2,pRolandito.col]]
    ]
);
graph.add(pYaritskeRamirezPerez.row - 1, pWilfredo.col - 1, mtYaritskeRamirezPerezWilfredo,
    [
        [pYaritskeRamirezPerez, [pYaritskeRamirezPerez.row - 1, pYaritskeRamirezPerez.col]],
        [pWilfredo, [pWilfredo.row - 1, pWilfredo.col]]
    ]);
//graph.more(12,35,mtElsaDiazMatosHeysel);
//graph.more(rlAntoniodeMarcosRamirezMatosMujerNegra);
//---------------------------------------------------------
//END DRAWING
//---------------------------------------------------------

graph.init();