//---------------------------------------------------------
//BEGIN DATA
//---------------------------------------------------------
function personCoor(GEN, col, person) {
    person.row = GEN;
    person.col = col;
    return person;
}

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

var pAmalSaifFonte = {
    name: 'Jorge Amado',
    //nickname: '',
    gender: MAN,
    birth: '14 dic 1984',
    //death: '',
    comments: 'Jorge Amado Soria Ramirez',
    profile: defaultProfile
};

var pJorgeLuisSoriaRamirez = {
    name: 'Amal',
    nickname: '',
    gender: MAN,
    birth: '09/08/1990',
    //death: '',
    comments: 'Amal Saif Fonte',
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

//============================
//Soria tree
//============================

var pMiguelSoria = {
    name: 'Miguel',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'miguel soria (huerfano a los 7 annos)',
    profile: defaultProfile
};

var pIluminadaRamos = {
    name: 'Iluminada',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Iluminada ramos (murio de pasmo, termino guajiro para el paro cardiaco respiratorio. Sobre los 40 annos de edad)',
    profile: defaultProfile
};

var pLuisMiroclesSoriaRamos = {
    name: 'Luis Mirocles',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Luis Mirocles Soria Ramos',
    profile: defaultProfile
};
var pCarmenMaceiraPerez = {
    name: 'Carmen',
    nickname: 'Carmita',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Carmen "Carmita" Maceira Perez',
    profile: defaultProfile
};
var pTaniaSoriaMaceira = {
    name: 'Tania',
    nickname: 'Taniecita',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Tania "Taniecita" Soria Maceira',
    profile: defaultProfile
};
var pBernardinoPenaHernandez = {
    name: 'Bernardino',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Bernardino Peña Hernandez',
    profile: defaultProfile
};
var pMarietaPenaHernandez = {
    name: 'Marieta',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Marieta Peña Hernandez (n. 19 de julio)',
    profile: defaultProfile
};
var pNonameVidal = {
    name: '????',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: '? Vidal',
    profile: defaultProfile
};
var pDianetVidalPena = {
    name: 'Dianet',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Dianet Vidal Peña',
    profile: defaultProfile
};
var pJuanGualbertoCoronaPerez = {
    name: 'Juan Gualberto',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Juan Gualberto Corona Perez',
    profile: defaultProfile
};
var pTaniadelCarmenCoronaSoria = {
    name: 'Tania del Carmen',
    nickname: 'Tanin',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Tania del Carmen "Tanin" Corona Soria',
    profile: defaultProfile
};
var pAriel = {
    name: 'Ariel',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Ariel ?',
    profile: defaultProfile
};
var pSaulo = {
    name: 'Saulo',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Saulo',
    profile: defaultProfile
};
var pBerenice = {
    name: 'Berenice',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Berenice',
    profile: defaultProfile
};
var pEleonora = {
    name: 'Eleonora',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Eleonora',
    profile: defaultProfile
};
var pTamaraSoriaMaceira = {
    name: 'Tamara',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Tamara Soria Maceira',
    profile: defaultProfile
};
var pCharlesFreeman = {
    name: 'Charles',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Charles Freeman (cubano descendiente de estadounidenses)',
    profile: defaultProfile
};
var pCarlosLuisFreemanSoria = {
    name: 'Carlos Luis',
    nickname: 'Carlitos',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Carlos Luis Freeman Soria',
    profile: defaultProfile
};
var pDalia = {
    name: 'Dalia',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: '',
    profile: defaultProfile
};
var pCarlosFreeman = {
    name: 'Carlos',
    //nickname: 'Carlitin',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Carlos Freeman ?',
    profile: defaultProfile
};
/*+ ??
	2 hijas desconocidas*/
var pAlina = {
    name: 'Alina',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Alina',
    profile: defaultProfile
};
var pJorgeCarlos = {
    name: 'Jorge Carlos',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Jorge Carlos ? ?, hijo de Alina',
    profile: defaultProfile
};
var pCarlosAlejandroFreeman = {
    name: 'Carlos Alejandro',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Carlos Alejandro Freeman',
    profile: defaultProfile
};
var pFelixArañoWanton = {
    name: 'Felix',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Felix Araño Wanton (fue Presidente del Poder Popular de la ciudad, recibio numerosas medallas y reconocimiento)',
    profile: defaultProfile
};
var pYordankaTitoMoreira = {
    name: 'Yordanka',
    //nickname: '',
    gender: WOMAN,
    birth: '19 nov 1976',
    //death: '',
    comments: 'Yordanka Tito Moreira',
    profile: defaultProfile
};
/*	hijo desconocido',*/
var pAnnelisPerezLegon = {
    name: 'Annelis',
    //nickname: 'Nelin',
    gender: WOMAN,
    birth: '26 junio 1972',
    //death: '',
    comments: 'Annelis "Nelin" Perez Legon',
    profile: defaultProfile
};
var pCarmenHelenestherSoriaPerez = {
    name: 'Carmen Helenesther',
    nickname: 'Carmencita',
    gender: WOMAN,
    birth: '27 marzo 2001',
    //death: '',
    comments: 'Carmen Helenesther Soria Perez (el segundo nombre era una combinacion de Helena y Esther debido a que en su momento no se podian poner tres nombres)',
    profile: defaultProfile
};
var pJorgeLuisSoriaPerez = {
    name: 'JorgeLuis',
    nickname: 'Mondongo, Cabeza de Zapote, Mongopavia',
    gender: MAN,
    birth: '2 oct 2011',
    //death: '',
    comments: 'Jorge Luis Soria Perez',
    profile: defaultProfile
};
var pJorgeAmadoSoriaRamirez = {
    name: '',
    nickname: 'Amado, Gordo',
    gender: MAN,
    birth: '14 dec 1984',
    //death: '',
    comments: 'Jorge "Amado, Gordo" Amado Soria Ramirez',
    profile: defaultProfile
};
var pArietaSoriaFernandez = {
    name: 'Arieta',
    //nickname: '',
    gender: WOMAN,
    birth: '9 nov 1983',
    //death: '',
    comments: 'Arieta Soria Fernandez',
    profile: defaultProfile
};
var pAntonio = {
    name: 'Antonio',
    nickname: 'Tony Culebra',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'gallero',
    profile: defaultProfile
};
var pDavidJeremiasNoNameSoria = {
    name: 'David Jeremias',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'David Jeremias ? Soria',
    profile: defaultProfile
};
var pDanieldeJesusNonameSoria = {
    name: 'Daniel de Jesus',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Daniel de Jesus ? Soria',
    profile: defaultProfile
};
var pJosueNonameSoria = {
    name: 'Josue',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Josue ? Soria',
    profile: defaultProfile
};
var pAdrianSoriaCanela = {
    name: 'Adrian',
    //nickname: '',
    gender: MAN,
    birth: '25 mayo 1985',
    //death: '',
    comments: 'Adrian Soria Canela',
    profile: defaultProfile
};
var pIsmaelAdrianSoria = {
    name: 'Ismael Adrian',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Ismael Adrian Soria',
    profile: defaultProfile
};
var pAbrahamAhmedSoria = {
    name: 'Abraham Ahmed',
    //nickname: '',
    gender: MAN,
    birth: 'nov 2011',
    //death: '',
    comments: 'Abraham Ahmed Soria',
    profile: defaultProfile
};
var pJorgeMiguelSoriaCasero = {
    name: 'Jorge Miguel',
    //nickname: '',
    gender: MAN,
    birth: '16 nov 2000',
    //death: '',
    comments: 'Jorge Miguel Soria Casero',
    profile: defaultProfile
};
var pRaylenisSoria = {
    name: 'Raylenis',
    //nickname: '',
    gender: WOMAN,
    birth: '2016',
    //death: '',
    comments: 'Raylenis Soria',
    profile: defaultProfile
};
var pZenaidaSoriaRamos = {
    name: 'Zenaida',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Zenaida Soria Ramos	',
    profile: defaultProfile
};
var pEstrellaSoriaRamos = {
    name: 'Estrella',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Estrella Soria Ramos ',
    profile: defaultProfile
};
var pHeribertoQuevedo = {
    name: 'Heriberto',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Heriberto Quevedo (adinerado con negocios de tostaderos de cafe y una cadena de cafeterias)',
    profile: defaultProfile
};
var pCaridadQuevedoSoria = {
    name: 'Caridad',
    nickname: 'cachitica',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Caridad Quevedo Soria',
    profile: defaultProfile
};
var pWilliamCambara = {
    name: 'William',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'William Cambara',
    profile: defaultProfile
};
var pWilliamCambaraQuevedo = {
    name: 'William',
    nickname: 'williancito',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'William "williancito" Cambara Quevedo (comunista)',
    profile: defaultProfile
};
var pAlexander = {
    name: 'Alexander',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Alexander',
    profile: defaultProfile
};
var pJorgeLuis = {
    name: 'Jorge Luis',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Jorge Luis (murio muy pequenno, nacido el mismo anno que mi papa)',
    profile: defaultProfile
};
var pOniel = {
    name: 'Oniel',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Oniel',
    profile: defaultProfile
};
var pAlina = {
    name: 'Alina',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Alina',
    profile: defaultProfile
};
var pSoniaQuevedoSoria = {
    name: 'Sonia',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Sonia Quevedo Soria (huyo a USA al triunfo de la revolucion, a la edad de alrededor de 30 annos)	',
    profile: defaultProfile
};
var pBelkisQuevedoSoria = {
    name: 'Belkis',
    nickname: 'Kiki',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Belkis Quevedo Soria',
    profile: defaultProfile
};
var pNonameVazquez = {
    name: '????',
    //nickname: '',
    gender: OTHER,
    birth: '',
    //death: '',
    comments: '? Vazquez ?',
    profile: defaultProfile
};
var pGabrielVazquezQuevedo = {
    name: 'Gabriel',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Gabriel Vazquez Quevedo',
    profile: defaultProfile
};
var pAlexanderVazquezQuevedo = {
    name: 'Alexander',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Alexander Vazquez Quevedo',
    profile: defaultProfile
};
var pIlianaVazquezQuevedo = {
    name: 'Iliana',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Iliana Vazquez Quevedo',
    profile: defaultProfile
};
var pNonameToranzo = {
    name: '????',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: '? Toranzo (oficial de tropas especiales)',
    profile: defaultProfile
};
var pValkisToranzoVazquez = {
    name: 'Valkis',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Valkis Toranzo Vazquez',
    profile: defaultProfile
};
var pBelkisToranzoVazquez = {
    name: 'Belkis',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Belkis Toranzo Vazquez',
    profile: defaultProfile
};
var pBertaQuevedoSoria = {
    name: 'Berta',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Berta Quevedo Soria (peluquera de Tele Rebelde en Santiago)',
    profile: defaultProfile
};
var pNonameDominguez = {
    name: '????',
    nickname: 'Bichichin',
    gender: MAN,
    birth: '',
    //death: '',
    comments: '? "Bichichin" Dominguez ?',
    profile: defaultProfile
};
var pRafaelDominguezQuevedo = {
    name: 'Rafael',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Rafael Dominguez Quevedo',
    profile: defaultProfile
};
/*	hija desconocida*/
var pEnrique = {
    name: 'Enrique',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Enrique',
    profile: defaultProfile
};
/*	hija desconocida*/
var pHeribertoQuevedoSoria = {
    name: 'Heriberto',
    nickname: 'Querer',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Heriberto "Querer" Quevedo Soria (profesor de ingles en la escuela de idiomas Maiakosky en Santo Tomas)',
    profile: defaultProfile
};
var pClaribel = {
    name: 'Claribel',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Claribel (nacida en manzanillo) ?',
    profile: defaultProfile
};
var pNoname = {
    name: 'Puchuchú',
    nickname: 'Puchuchú',
    gender: MAN,
    birth: '',
    //death: '',
    comments: '? "Puchuchú" ?',
    profile: defaultProfile
};
var pJorgeQuevedo = {
    name: 'Jorge',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Jorge Quevedo',
    profile: defaultProfile
};
var pVivianQuevedo = {
    name: 'Vivian',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Vivian Quevedo ?',
    profile: defaultProfile
};
var pRolandoSoriaRamos = {
    name: 'Rolando',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Rolando Soria Ramos',
    profile: defaultProfile
};
var pFernanda = {
    name: 'Fernanda',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Fernanda',
    profile: defaultProfile
};
var pReyterSoria = {
    name: 'Reyter',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Reyter Soria',
    profile: defaultProfile
};

var pReyterSoria = {
    name: 'Reyter',
    nickname: 'Reytico',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Reyter "Reytico" Soria',
    profile: defaultProfile
};
var pRobinSoria = {
    name: 'Robin',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Robin Soria (estudio en mendive, un anno mayor que mi hermano, de pelo negro y ojos verdes)',
    profile: defaultProfile
};
var pYolandaPineiro = {
    name: 'Yolanda',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Yolanda Piñeiro ',
    profile: defaultProfile
};
var pRoldanSoriaPineiro = {
    name: 'Roldan',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Roldan Soria Piñeiro (cardiologo)',
    profile: defaultProfile
};
var pReynierSoriaPineiro = {
    name: 'Reynier',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Reynier Soria Piñeiro (ginecologo)',
    profile: defaultProfile
};
var pTeresaSoria = {
    name: 'Teresa',
    nickname: 'Teresita',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Teresa Soria',
    profile: defaultProfile
};
/*		hija desconocida*/
var pJustina = {
    name: 'Justina',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Justina ?',
    profile: defaultProfile
};
var pLuisSoria = {
    name: 'Luis',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Luis Soria',
    profile: defaultProfile
};
var pRafaelSoria = {
    name: 'Rafael',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Rafael Soria (murio de peritonitis en el hospital)',
    profile: defaultProfile
};
var pNonameAguilera = {
    name: '????',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: '? Aguilera',
    profile: defaultProfile
};
var pJorgeLuisSoriaAguilera = {
    name: 'Jorge Luis',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Jorge Luis Soria Aguilera',
    profile: defaultProfile
};
var pRobertoSoria = {
    name: 'Roberto',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Roberto Soria (engrasador de la termoelectrica Rente y luego en Nuevitas)',
    profile: defaultProfile
};
/*+ ?
	hijo varon (paracaidista de la FAR)
	hija hembra*/
var pLourdesSoria = {
    name: 'Lourdes',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Lourdes Soria',
    profile: defaultProfile
};
/*+
2 hembras desconocidas
1 varon desconocido*/


//Arbol de Carmen Maceira Perez
var pUrsulaBenitezPerez = {
    name: 'Ursula',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Ursula Benitez Perez',
    profile: defaultProfile
};
var pJoseMaceira = {
    name: 'Jose',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Jose Maceira (tuvo mas de 36 hijos por la zona de Santiago y el Cristo, algunos conocidos y otros no. En la zona agricultural conocida como los llanos de Maceira)',
    profile: defaultProfile
};
var pCarmenMaceiraPerez = {
    name: 'Carmen',
    //nickname: '',
    gender: WOMAN,
    birth: '28 nov 1924',
    death: '6 ago 2014',
    comments: 'Carmen Maceira Perez (inscrita por error como Perez, pero al final se enorgullecia de eso)',
    profile: defaultProfile
};
var pSaraMaceiraBenitez = {
    name: 'Sara',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Sara Maceira Benitez (n. 1923 m. 2004,2005) ',
    profile: defaultProfile
};
var pRaulVilaCarratala = {
    name: 'Raul',
    nickname: 'Tio Pegueta',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Raul "Tio Pegueta" Vilá Carratalá (hacia jabas de tiritas, viajante de jabones con buen dinero, renuncio a ello para apoyar la Revolucion. juez lego, primer delegado de la circunscripcion del 26 de julio, vanguardia en zafra, fundador del PSP y el partido comunista)',
    profile: defaultProfile
};
var pRamonMaceiraBenitez = {
    name: 'Ramon',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Ramon Maceira Benitez (combatiente del ejercito Rebelde)',
    profile: defaultProfile
};
var pConcepcion = {
    name: 'Concepcion',
    nickname: 'Concha',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'cabaretera de bar',
    profile: defaultProfile
};
var pIsabelMaceira = {
    name: 'Isabela',
    nickname: 'Isabelita',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Isabel "Isabelita" Maceira',
    profile: defaultProfile
};
var pNonamePanchitoMaceira = {
    name: 'Panchito',
    //nickname: 'Panchito',
    gender: MAN,
    birth: '',
    //death: '',
    comments: '? "Panchito" Maceira',
    profile: defaultProfile
};

var pSamiraYamirkaMaceira = {
    name: 'Samira',
    nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Samira Yamirka Maceira',
    profile: defaultProfile
};
var pNadiaMaceira = {
    name: 'Nadia',
    nickname: 'Pucha',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Nadia Maceira(laboratorista)',
    profile: defaultProfile
};
var pNonamePucha = {
    name: '????',
    nickname: 'Pucha',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: '',
    profile: defaultProfile
};
var pJorgeMaceira = {
    name: 'Jorge',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Jorge Maceira',
    profile: defaultProfile
};
var pGustavoMaceira = {
    name: 'Gustavo',
    nickname: 'Gustavito',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Gustavo Maceira',
    profile: defaultProfile
};
var pJoseMaceiraBenitez = {
    name: 'Jose',
    nickname: 'Pepe',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Jose Maceira Benitez',
    profile: defaultProfile
};
var pNorma = {
    name: 'Norma',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Norma',
    profile: defaultProfile
};
var pRodolfoValentinoMaceira = {
    name: 'Rodolfo',
    nickname: 'Valentin',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Rodolfo Valentino Maceira',
    profile: defaultProfile
};
var pValentina = {
    name: 'Valentina',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Valentina ',
    profile: defaultProfile
};
var pValiaMaceira = {
    name: 'Valia',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: '(medico)',
    profile: defaultProfile
};
var pRodolfoValentinoMaceira = {
    name: 'Rodolfo',
    nickname: 'Valentincito',
    gender: MAN,
    birth: '',
    //death: '',
    comments: '',
    profile: defaultProfile
};
var pBertaMaceiraBenitez = {
    name: 'Berta',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Berta Maceira Benitez',
    profile: defaultProfile
};
var pNonameVicente = {
    name: '???',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: '? Vicente',
    profile: defaultProfile
};
var pRaulVicenteMaceira = {
    name: 'Raul',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Raul Vicente Maceira',
    profile: defaultProfile
};
var pNonameUSA = {
    name: '???',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: '(estadounidense en USA)',
    profile: defaultProfile
};
var pLuisaMaceiraBenitez = {
    name: 'Luisa',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Luisa Maceira Benitez',
    profile: defaultProfile
};
var pGloriaMaceiraBenitez = {
    name: 'Gloria',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Gloria Maceira Benitez',
    profile: defaultProfile
};
var pMoisesCalzadaBenitez = {
    name: 'Moises',
    nickname: 'Tacuba',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Moises Calzada Benitez (combatiente del Ejercito Rebelde, bajo de la sierra como capitan, participo en misiones militares en el exterior)',
    profile: defaultProfile
};
var pMoisesMarioCalzadaMaceira = {
    name: 'Moises',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Moises Mario Calzada Maceira',
    profile: defaultProfile
};
var pEloyMaceiraBenitez = {
    name: 'Eloy',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Eloy Maceira Benitez',
    profile: defaultProfile
};
var pCarmen = {
    name: 'Carmen',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: '',
    profile: defaultProfile
};
var pEloyMaceira = {
    name: 'Eloy',
    nickname: 'Eloycito',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Eloy Maceira',
    profile: defaultProfile
};
var pNoNameMaceira = {
    name: '????',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'hija hembra Maceira',
    profile: defaultProfile
};
var pIrela = {
    name: 'Irela',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: '',
    profile: defaultProfile
};
var pErnestoMaceira = {
    name: 'Ernesto',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Ernesto Maceira',
    profile: defaultProfile
};
var pTaniaMaceira = {
    name: 'Tania',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Tania Maceira',
    profile: defaultProfile
};

//Rama periferica de Jose Maceira
var pMarioMaceira = {
    name: 'Mario',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Mario Maceira',
    profile: defaultProfile
};
var pIlianaMaceira = {
    name: 'Iliana',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Iliana Maceira',
    profile: defaultProfile
};
var pNonameManzano = {
    name: '????',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: '? Manzano (cardiologo en el hosp provincial, muy blanco, muy rubicundo, muy gordo)',
    profile: defaultProfile
};
var pIlianaManzano = {
    name: 'Iliana',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Iliana Manzano (medico)',
    profile: defaultProfile
};
var pErnestoManzano = {
    name: 'Ernesto',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Ernesto Manzano (medico, muy blanco, muy rubicundo, muy gordo) ',
    profile: defaultProfile
};



//Annelis 
var pWilfredoLegonWaldarrama = {
    name: 'Wilfredo',
    nickname: 'Papa Chino',
    gender: MAN,
    birth: '30 ene ????',
    death: '2003',
    comments: 'Wilfredo Legon Waldarrama ',
    profile: defaultProfile
};
var pEstherRodriguezHurtado = {
    name: 'Esther',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Esther Rodriguez Hurtado',
    profile: defaultProfile
};
var pMercedesdelaCandelariaLegonRodriguez = {
    name: 'Mercedes de la Candelaria',
    //nickname: '',
    gender: WOMAN,
    birth: '2 feb 1951',
    //death: '',
    comments: 'Mercedes de la Candelaria Legon Rodriguez ',
    profile: defaultProfile
};
var pJorgePerez = {
    name: 'Jorge',
    //nickname: '',
    gender: MAN,
    birth: '',
    //death: '',
    comments: 'Jorge Perez (nacido Evasio)',
    profile: defaultProfile
};
var pAnnelisPerezLegon = {
    name: 'Annelis',
    //nickname: '',
    gender: WOMAN,
    birth: '',
    //death: '',
    comments: 'Annelis Perez Legon',
    profile: defaultProfile
};
var pRafaelPerezSantana = {
    name: 'Rafael',
    //nickname: '',
    gender: MAN,
    birth: '26 ene 1946',
    //death: '',
    comments: 'Rafael Perez Santana',
    profile: defaultProfile
};
var pRafaelPerezLegon = {
    name: 'Rafael',
    nickname: 'Rafaelito',
    gender: MAN,
    birth: '13 Jul 1988',
    //death: '',
    comments: 'Rafael Perez Legon',
    profile: defaultProfile
};
var pDayesiRizoCala = {
    name: 'Dayesi',
    //nickname: '',
    gender: MAN,
    birth: '30 ene 1988',
    //death: '',
    comments: 'Dayesi Rizo Cala',
    profile: defaultProfile
};
var pSelenePerezRizo = {
    name: 'Selene',
    //nickname: '',
    gender: MAN,
    birth: '10 nov 2018',
    //death: '',
    comments: 'Selene Perez Rizo',
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

var mtMiguelSoriaIluminadaRamos = {
    type: MARRIAGE
};
//MARRIAGEs soria

var mtLuisMiroclesSoriaRamosCarmenMaceiraPerez = {
    type: MARRIAGE
};

var mtTaniaSoriaMaceiraBernardinoPenaHernandez = {
    type: MARRIAGE
};

var mtMarietaPenaHernandezNonameVidal = {
    type: MARRIAGE
};

var mtTaniaSoriaMaceiraJuanGualbertoCoronaPerez = {
    type: MARRIAGE
};

var mtTaniadelCarmenCoronaSoriaAriel = {
    type: MARRIAGE
};

var mtTamaraSoriaMaceiraCharlesFreeman = {
    type: MARRIAGE
};

var mtCarlosLuisFreemanSoriaDalia = {
    type: MARRIAGE
};

var mtCarlosLuisFreemanSoriaAlina = {
    type: MARRIAGE
};

var mtTamaraSoriaMaceiraFelixArañoWanton = {
    type: MARRIAGE
};

var mtJorgeLuisSoriaRamirezYordankaTitoMoreira = {
    type: MARRIAGE
};

var mtJorgeLuisSoriaRamirezAnnelisPerezLegon = {
    type: MARRIAGE
};

var mtJorgeAmadoSoriaRamirezAmalSaifFonte = {
    type: MARRIAGE
};

var mtArietaSoriaFernandezAntonio = {
    type: MARRIAGE
};

var mtEstrellaSoriaRamosHeribertoQuevedo = {
    type: MARRIAGE
};

var mtCaridadQuevedoSoriaWilliamCambara = {
    type: MARRIAGE
};

var mtSoniaQuevedoSoria = {
    type: MARRIAGE
};

var mtBelkisQuevedoSoriaNonameVazquez = {
    type: MARRIAGE
};

var mtIlianaVazquezQuevedoNonameToranzo = {
    type: MARRIAGE
};

var mtBertaQuevedoSoriaNonameDominguez = {
    type: MARRIAGE
};

var mtHeribertoQuevedoSoriaClaribel = {
    type: MARRIAGE
};

var mtRolandoSoriaRamosFernanda = {
    type: MARRIAGE
};

var mtReyterSoriaYolandaPiñeiro = {
    type: MARRIAGE
};

var mtMiguelSoriaJustina = {
    type: MARRIAGE
};

var mtRafaelSoriaNonameAguilera = {
    type: MARRIAGE
};

var mtUrsulaBenitezPerezJoseMaceira = {
    type: MARRIAGE
};

var mtSaraMaceiraBenitezRaulVilaCarratala = {
    type: MARRIAGE
};

var mtRamonMaceiraBenitezConcepcion = {
    type: MARRIAGE
};

var mtRamonMaceiraBenitezNonamePucha = {
    type: MARRIAGE
};

var mtJoseMaceiraBenitezNorma = {
    type: MARRIAGE
};

var mtRodolfoValentinoMaceiraValentina = {
    type: MARRIAGE
};

var mtBertaMaceiraBenitezNonameVicente = {
    type: MARRIAGE
};

var mtBertaMaceiraBenitezNonameUSA = {
    type: MARRIAGE
};

var mtGloriaMaceiraBenitezMoisesCalzadaBenitez = {
    type: MARRIAGE
};

var mtEloyMaceiraBenitezCarmen = {
    type: MARRIAGE
};

var mtEloyMaceiraBenitezIrela = {
    type: MARRIAGE
};

var mtIlianaMaceiraNonameManzano = {
    type: MARRIAGE
};

var mtWilfredoLegonWaldarramaEstherRodriguezHurtado = {
    type: MARRIAGE
};

var mtMercedesdelaCandelariaLegonRodriguezJorgePerez = {
    type: MARRIAGE
};

var mtMercedesdelaCandelariaLegonRodriguezRafaelPerezSantana = {
    type: MARRIAGE
};

var mtRafaelPerezLegonDayesiRizoCala = {
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
var GEN_SEPARATOR = 5;
var FIRST_GEN_ROW = 0;
var SECOND_GEN_ROW = FIRST_GEN_ROW + GEN_SEPARATOR;
var THIRD_GEN_ROW = SECOND_GEN_ROW + GEN_SEPARATOR;
var FOURTH_GEN_ROW = THIRD_GEN_ROW + GEN_SEPARATOR;
var FIFTH_GEN_ROW = FOURTH_GEN_ROW + GEN_SEPARATOR;
x = 3;
i = 2;
x -= i;
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pBlancaMatosGuisado));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pMarcelinoMatosRondon));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pAbelina));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pCorsina));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pMiguelRamirezNunez));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pPurificacionFloresProenza));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pFela));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pLuzMatosRondon));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pMiguelSoria));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pIluminadaRamos));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pZenaidaSoriaRamos));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pEstrellaSoriaRamos));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pHeribertoQuevedo));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pRolandoSoriaRamos));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pFernanda));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pJustina));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pUrsulaBenitezPerez));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pJoseMaceira));
graph.addPerson(personCoor(FIRST_GEN_ROW, x += i, pMoisesMarioCalzadaMaceira));

x = 1;
i = 2;
x -= i;
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pDoraMatosMatos));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pMarcelinoMatosMatos));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pLuzDivina));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pElsaMatosMatos));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pManuelDiaz));
x += i * 1.5;
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pAbelinaMatosMatos));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pRubenAguileraAcuna));
x += i * 3.5;
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pLuisEnriqueMatosMatos));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pIrmaMorales));
x += i * 8;
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pDignaElenaMatosMatos));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pManuelAmadoRamirezFlores));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pTelmoMaciasMatos));
x += i * 4.5;
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pCucaAlvarez));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pLuciaAlvarez));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pMiguelRamirezFlores));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pEmiliaGonzalezFruto));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pVictorRamirezFlores));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pOfeliaVargas));
x += i * 3;
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pCesarRamirezFlores));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pLidiaMilanReytor));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pEgidioRamirezFlores));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pNoeliaRamirezFlores));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pErnestinaRamirezFlores));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pNonamePereda));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pLuisMiroclesSoriaRamos));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pCarmenMaceiraPerez));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pCaridadQuevedoSoria));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pWilliamCambara));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pSoniaQuevedoSoria));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pBelkisQuevedoSoria));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pNonameVazquez));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pBertaQuevedoSoria));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pNonameDominguez));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pHeribertoQuevedoSoria));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pClaribel));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pReyterSoria));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pYolandaPineiro));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pTeresaSoria));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pLuisSoria));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pRafaelSoria));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pNonameAguilera));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pRobertoSoria));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pLourdesSoria));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pCarmenMaceiraPerez));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pSaraMaceiraBenitez));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pRaulVilaCarratala));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pRamonMaceiraBenitez));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pConcepcion));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pNonamePucha));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pJoseMaceiraBenitez));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pNorma));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pBertaMaceiraBenitez));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pNonameVicente));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pNonameUSA));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pLuisaMaceiraBenitez));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pGloriaMaceiraBenitez));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pMoisesCalzadaBenitez));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pEloyMaceiraBenitez));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pCarmen));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pIrela));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pMarioMaceira));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pWilfredoLegonWaldarrama));
graph.addPerson(personCoor(SECOND_GEN_ROW, x += i, pEstherRodriguezHurtado));

x = 0;
i = 2;
x -= i;
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pTelmoMaciasMatosHijo));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pIlda));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pBlancaMariaMatos));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pSamuel));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pElsaDiazMatos));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pHeysel));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pKeniaAguileraMatos));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pGerardoPelaez));
x += i * 1;
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pCarlosNunez));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pRubenAguileraMatos));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pSandra));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pIrmaMatosMorales));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pSoniaMatosMorales));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pLuisEnriqueMatosMorales));
x += i * 0.5;
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pMiguelEnriqueRamirezMatos));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pAnaPerezFonseca));
x += i * 3;
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pGisela));
x += i * 0.5;
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pBlancaDeLaPurificacionRamirezMatos));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pJorgeLuisSoriaMaceira));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pAntoniodeMarcosRamirezMatos));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pGladysAveraztruces));
x += i * 0.5;
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pElbaAguilar));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pMujerNegra));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pAmadoMarcelinoRamirezMatos));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pCaridadMartinAlvarez));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pPilarMartinAlvarez));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pMauricioRamirezGonzalez));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pXiomaraRamirezGonzalez));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pMiriamRamirezGonzalez));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pPurificacionRamirezVargas));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pSalomeRodriguezPino));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pRaulMartin));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pCesarRamirezMilan));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pEstrellaRamirezMilan));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pObduliaRamirezMilan));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pTomasFerrandiSayasBazan));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pFelixRamirezMilan));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pTaniaSoriaMaceira));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pBernardinoPenaHernandez));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pJuanGualbertoCoronaPerez));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pTamaraSoriaMaceira));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pCharlesFreeman));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pFelixArañoWanton));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pWilliamCambaraQuevedo));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pAlexander));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pJorgeLuis));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pOniel));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pAlina));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pGabrielVazquezQuevedo));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pAlexanderVazquezQuevedo));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pIlianaVazquezQuevedo));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pNonameToranzo));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pRafaelDominguezQuevedo));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pEnrique));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pNoname));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pJorgeQuevedo));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pVivianQuevedo));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pReyterSoria));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pRobinSoria));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pRoldanSoriaPineiro));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pReynierSoriaPineiro));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pJorgeLuisSoriaAguilera));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pIsabelMaceira));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pNonamePanchitoMaceira));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pJorgeMaceira));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pGustavoMaceira));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pRodolfoValentinoMaceira));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pValentina));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pRaulVicenteMaceira));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pEloyMaceira));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pNoNameMaceira));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pErnestoMaceira));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pTaniaMaceira));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pIlianaMaceira));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pNonameManzano));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pMercedesdelaCandelariaLegonRodriguez));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pJorgePerez));
graph.addPerson(personCoor(THIRD_GEN_ROW, x += i, pRafaelPerezSantana));

x = 1;
i = 2;
x -= i;
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pTelmoMacias));
x += i * 0.5;
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pAntonio));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pJacqueline));
x += i * 2.5;
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pAlinetPelaezAguilera));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pAdrian));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pCarlosNunezAguilera));
x += i * 0.5;
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pRubenAguilera));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pHijaRubenNoname));
x += i * 3;
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pYanitsiaRamirezPerez));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pHilderTorres));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pYaritskeRamirezPerez));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pOrlando));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pWilfredo));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pGiselaHija));
x += i * 1;
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pJorgeAmadoSoriaRamirez));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pAmalSaifFonte));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pJorgeLuisSoriaRamirez));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pAndyMarcosRamirezAveraztruces));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pAntoniodeMarcosRamirezAveraztruces));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pMonicaMariaRamirez));
x += 3;
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pCarlosEnriqueRamirezMartin));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pRaulRamirezMartin));
x += 8;
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pImirsiRodriguezRamirez));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pRonaldRodriguezRamirez));
x += 6;
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pSandraFerrandiRamirez));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pDaniaFerrandiRamirez));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pMarietaPenaHernandez));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pNonameVidal));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pTaniadelCarmenCoronaSoria));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pAriel));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pCarlosLuisFreemanSoria));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pDalia));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pAlina));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pYordankaTitoMoreira));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pAnnelisPerezLegon));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pJorgeAmadoSoriaRamirez));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pArietaSoriaFernandez));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pAntonio));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pAdrianSoriaCanela));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pJorgeMiguelSoriaCasero));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pValkisToranzoVazquez));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pBelkisToranzoVazquez));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pSamiraYamirkaMaceira));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pNadiaMaceira));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pValiaMaceira));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pRodolfoValentinoMaceira));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pIlianaManzano));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pErnestoManzano));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pAnnelisPerezLegon));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pRafaelPerezLegon));
graph.addPerson(personCoor(FOURTH_GEN_ROW, x += i, pDayesiRizoCala));

x = 1;
i = 2;
x -= i;
x += 29;
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pJavierAlejandroTorresRamirez));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pMiguelAlejandroTorresRamirez));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pRoxana));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pRolandito));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pKarlaNunez));
x += 41;
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pIsabela));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pDianetVidalPena));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pSaulo));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pBerenice));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pEleonora));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pCarlosFreeman));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pJorgeCarlos));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pCarlosAlejandroFreeman));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pCarmenHelenestherSoriaPerez));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pJorgeLuisSoriaPerez));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pDavidJeremiasNoNameSoria));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pDanieldeJesusNonameSoria));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pJosueNonameSoria));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pIsmaelAdrianSoria));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pAbrahamAhmedSoria));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pRaylenisSoria));
graph.addPerson(personCoor(FIFTH_GEN_ROW, x += i, pSelenePerezRizo));


//relationship nodes
graph.rel(pDaniaFerrandiRamirez, pIsabela);
graph.rel(pCucaAlvarez, pPilarMartinAlvarez, [
    [pCucaAlvarez.row + 3, pCucaAlvarez.col],
    [pPilarMartinAlvarez.row - 2, pPilarMartinAlvarez.col]
]);
graph.rel(pCucaAlvarez, pCaridadMartinAlvarez, [
    [pCucaAlvarez.row + 3, pCucaAlvarez.col],
    [pCaridadMartinAlvarez.row - 2, pCaridadMartinAlvarez.col]
]);
graph.add(pBlancaMatosGuisado.row, pMarcelinoMatosRondon.col - 1,
    mtBlancaMatosGuisadoMarcelinoMatosRondon, [pBlancaMatosGuisado, pMarcelinoMatosRondon, [pDignaElenaMatosMatos, [pBlancaMatosGuisado.row + 3, pMarcelinoMatosRondon.col - 1],
            [pDignaElenaMatosMatos.row - 2, pDignaElenaMatosMatos.col]
        ],
        [pDoraMatosMatos, [pBlancaMatosGuisado.row + 3, pMarcelinoMatosRondon.col - 1],
            [pDoraMatosMatos.row - 2, pDoraMatosMatos.col]
        ],
        [pMarcelinoMatosMatos, [pBlancaMatosGuisado.row + 3, pMarcelinoMatosRondon.col - 1],
            [pMarcelinoMatosMatos.row - 2, pMarcelinoMatosMatos.col]
        ],
        [pElsaMatosMatos, [pBlancaMatosGuisado.row + 3, pMarcelinoMatosRondon.col - 1],
            [pElsaMatosMatos.row - 2, pElsaMatosMatos.col]
        ],
        [pAbelinaMatosMatos, [pBlancaMatosGuisado.row + 3, pMarcelinoMatosRondon.col - 1],
            [pAbelinaMatosMatos.row - 2, pAbelinaMatosMatos.col]
        ],
        [pLuisEnriqueMatosMatos, [pBlancaMatosGuisado.row + 3, pMarcelinoMatosRondon.col - 1],
            [pLuisEnriqueMatosMatos.row - 2, pLuisEnriqueMatosMatos.col]
        ]
    ]
);
graph.add(pMiguelRamirezNunez, pPurificacionFloresProenza.col - 1,
    mtMiguelRamirezNunezPurificacionFloresProenza, [pMiguelRamirezNunez, pPurificacionFloresProenza, pManuelAmadoRamirezFlores, pErnestinaRamirezFlores, pMiguelRamirezFlores, pVictorRamirezFlores, pCesarRamirezFlores, pEgidioRamirezFlores, pNoeliaRamirezFlores]);
graph.add(pLuisEnriqueMatosMatos.row, pIrmaMorales.col - 1,
    mtLuisEnriqueMatosMatosIrmaMorales, [pLuisEnriqueMatosMatos, pIrmaMorales, [pIrmaMatosMorales, [pLuisEnriqueMatosMatos.row + 3, pIrmaMorales.col - 1],
            [pIrmaMatosMorales.row - 2, pIrmaMatosMorales.col]
        ],
        [pSoniaMatosMorales, [pLuisEnriqueMatosMatos.row + 3, pIrmaMorales.col - 1],
            [pSoniaMatosMorales.row - 2, pSoniaMatosMorales.col]
        ],
        [pLuisEnriqueMatosMorales, [pLuisEnriqueMatosMatos.row + 3, pIrmaMorales.col - 1],
            [pLuisEnriqueMatosMorales.row - 2, pLuisEnriqueMatosMorales.col]
        ]
    ]
);
graph.add(pDignaElenaMatosMatos.row, pManuelAmadoRamirezFlores.col - 1,
    mtDignaElenaMatosMatosManuelAmadoRamirezFlores, [pDignaElenaMatosMatos, pManuelAmadoRamirezFlores, [pBlancaDeLaPurificacionRamirezMatos, [pDignaElenaMatosMatos.row + 3, pManuelAmadoRamirezFlores.col - 1],
            [pBlancaDeLaPurificacionRamirezMatos.row - 2, pBlancaDeLaPurificacionRamirezMatos.col]
        ],
        [pAmadoMarcelinoRamirezMatos, [pDignaElenaMatosMatos.row + 3, pManuelAmadoRamirezFlores.col - 1],
            [pAmadoMarcelinoRamirezMatos.row - 2, pAmadoMarcelinoRamirezMatos.col]
        ],
        [pMiguelEnriqueRamirezMatos, [pDignaElenaMatosMatos.row + 3, pManuelAmadoRamirezFlores.col - 1],
            [pMiguelEnriqueRamirezMatos.row - 2, pMiguelEnriqueRamirezMatos.col]
        ],
        [pAntoniodeMarcosRamirezMatos, [pDignaElenaMatosMatos.row + 3, pManuelAmadoRamirezFlores.col - 1],
            [pAntoniodeMarcosRamirezMatos.row - 2, pAntoniodeMarcosRamirezMatos.col]
        ]
    ]
);
graph.add(pDoraMatosMatos, pTelmoMaciasMatos.col - 1, mtDoraMatosMatosTelmoMaciasMatos, [pDoraMatosMatos, pTelmoMaciasMatos, pTelmoMaciasMatosHijo]);
graph.add(pMarcelinoMatosMatos.row, pLuzDivina.col - 1,
    mtMarcelinoMatosMatosLuzDivina, [pMarcelinoMatosMatos, pLuzDivina, pBlancaMariaMatos]
);
graph.add(pElsaMatosMatos.row, pManuelDiaz.col - 1, mtElsaMatosMatosManuelDiaz, [pElsaMatosMatos, pManuelDiaz, pElsaDiazMatos]);
graph.add(pAbelinaMatosMatos.row, pRubenAguileraAcuna.col - 1,
    mtAbelinaMatosMatosRubenAguileraAcuna, [pAbelinaMatosMatos, pRubenAguileraAcuna, [pKeniaAguileraMatos, [pAbelinaMatosMatos.row + 3, pRubenAguileraAcuna.col - 1],
            [pKeniaAguileraMatos.row - 2, pKeniaAguileraMatos.col]
        ],
        [pRubenAguileraMatos, [pAbelinaMatosMatos.row + 3, pRubenAguileraAcuna.col - 1],
            [pRubenAguileraMatos.row - 2, pRubenAguileraMatos.col]
        ]
    ]
);
graph.add(pErnestinaRamirezFlores.row, pNonamePereda.col - 1,
    mtErnestinaRamirezFloresNonamePereda, [
        pErnestinaRamirezFlores,
        pNonamePereda
    ]
);
graph.add(pMiguelRamirezFlores.row, pEmiliaGonzalezFruto.col - 1,
    mtMiguelRamirezFloresEmiliaGonzalezFruto, [pMiguelRamirezFlores, pEmiliaGonzalezFruto, [pMauricioRamirezGonzalez, [pMiguelRamirezFlores.row + 3, pEmiliaGonzalezFruto.col - 1],
            [pMauricioRamirezGonzalez.row - 2, pMauricioRamirezGonzalez.col]
        ],
        [pXiomaraRamirezGonzalez, [pMiguelRamirezFlores.row + 3, pEmiliaGonzalezFruto.col - 1],
            [pXiomaraRamirezGonzalez.row - 2, pXiomaraRamirezGonzalez.col]
        ],
        [pMiriamRamirezGonzalez, [pMiguelRamirezFlores.row + 3, pEmiliaGonzalezFruto.col - 1],
            [pMiriamRamirezGonzalez.row - 2, pMiriamRamirezGonzalez.col]
        ]
    ]
);
graph.add(pVictorRamirezFlores.row, pOfeliaVargas.col - 1,
    mtVictorRamirezFloresOfeliaVargas, [pVictorRamirezFlores, pOfeliaVargas, pPurificacionRamirezVargas]
);
graph.add(pCesarRamirezFlores.row, pLidiaMilanReytor.col - 1,
    mtCesarRamirezFloresLidiaMilanReytor, [pCesarRamirezFlores, pLidiaMilanReytor, [pCesarRamirezMilan, [pCesarRamirezFlores.row + 3, pLidiaMilanReytor.col - 1],
            [pCesarRamirezMilan.row - 2, pCesarRamirezMilan.col]
        ],
        [pEstrellaRamirezMilan, [pCesarRamirezFlores.row + 3, pLidiaMilanReytor.col - 1],
            [pEstrellaRamirezMilan.row - 2, pEstrellaRamirezMilan.col]
        ],
        [pObduliaRamirezMilan, [pCesarRamirezFlores.row + 3, pLidiaMilanReytor.col - 1],
            [pObduliaRamirezMilan.row - 2, pObduliaRamirezMilan.col]
        ],
        [pFelixRamirezMilan, [pCesarRamirezFlores.row + 3, pLidiaMilanReytor.col - 1],
            [pFelixRamirezMilan.row - 2, pFelixRamirezMilan.col]
        ]
    ]
);
graph.add(pTelmoMaciasMatosHijo.row, pIlda.col - 1,
    mtTelmoMaciasMatosHijoIlda, [pTelmoMaciasMatosHijo, pIlda, pTelmoMacias]
);
graph.add(pBlancaMariaMatos.row, pSamuel.col - 1,
    mtBlancaMariaMatosSamuel, [pBlancaMariaMatos, pSamuel, [pAntonio, [pBlancaMariaMatos.row + 3, pSamuel.col - 1],
            [pAntonio.row - 2, pAntonio.col]
        ],
        [pJacqueline, [pBlancaMariaMatos.row + 3, pSamuel.col - 1],
            [pJacqueline.row - 2, pJacqueline.col]
        ]
    ]
);
graph.add(pBlancaDeLaPurificacionRamirezMatos.row, pJorgeLuisSoriaMaceira.col - 1,
    mtBlancaDeLaPurificacionRamirezMatosJorgeLuisSoriaMaceira, [
        pBlancaDeLaPurificacionRamirezMatos,
        pJorgeLuisSoriaMaceira, [pJorgeAmadoSoriaRamirez, [pBlancaDeLaPurificacionRamirezMatos.row + 3, pJorgeLuisSoriaMaceira.col - 1],
            [pJorgeAmadoSoriaRamirez.row - 2, pJorgeAmadoSoriaRamirez.col]
        ],
        [pJorgeLuisSoriaRamirez, [pBlancaDeLaPurificacionRamirezMatos.row + 3, pJorgeLuisSoriaMaceira.col - 1],
            [pJorgeLuisSoriaRamirez.row - 2, pJorgeLuisSoriaRamirez.col]
        ]
    ]
);
graph.add(pAmadoMarcelinoRamirezMatos.row, pCaridadMartinAlvarez.col - 1,
    mtAmadoMarcelinoRamirezMatosCaridadMartinAlvarez, [pAmadoMarcelinoRamirezMatos, pCaridadMartinAlvarez, [pCarlosEnriqueRamirezMartin, [pAmadoMarcelinoRamirezMatos.row + 3, pCaridadMartinAlvarez.col - 1],
            [pCarlosEnriqueRamirezMartin.row - 2, pCarlosEnriqueRamirezMartin.col]
        ],
        [pRaulRamirezMartin, [pAmadoMarcelinoRamirezMatos.row + 3, pCaridadMartinAlvarez.col - 1],
            [pRaulRamirezMartin.row - 2, pRaulRamirezMartin.col]
        ]
    ]
);
graph.add(pElsaDiazMatos.row, pHeysel.col - 1, mtElsaDiazMatosHeysel, [pElsaDiazMatos, pHeysel]);
graph.add(pMiguelEnriqueRamirezMatos.row - 1, pGisela.col - 1,
    mtMiguelEnriqueRamirezMatosGisela, [
        [pMiguelEnriqueRamirezMatos, [
            pMiguelEnriqueRamirezMatos.row - 1,
            pMiguelEnriqueRamirezMatos.col
        ]],
        [pGisela, [pGisela.row - 1, pGisela.col]],
        [pGiselaHija, [
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
    mtMiguelEnriqueRamirezMatosAnaPerezFonseca, [pMiguelEnriqueRamirezMatos, pAnaPerezFonseca, [pYaritskeRamirezPerez, [pMiguelEnriqueRamirezMatos.row + 3, pAnaPerezFonseca.col - 1],
            [pYaritskeRamirezPerez.row - 2, pYaritskeRamirezPerez.col]
        ],
        [pYanitsiaRamirezPerez, [pMiguelEnriqueRamirezMatos.row + 3, pAnaPerezFonseca.col - 1],
            [pYanitsiaRamirezPerez.row - 2, pYanitsiaRamirezPerez.col]
        ]
    ]
);
graph.add(pAntoniodeMarcosRamirezMatos.row, pGladysAveraztruces.col - 1,
    mtAntoniodeMarcosRamirezMatosGladysAveraztruces, [pAntoniodeMarcosRamirezMatos, pGladysAveraztruces, [pAndyMarcosRamirezAveraztruces, [pAntoniodeMarcosRamirezMatos.row + 3, pGladysAveraztruces.col - 1],
            [pAndyMarcosRamirezAveraztruces.row - 2, pAndyMarcosRamirezAveraztruces.col]
        ],
        [pAntoniodeMarcosRamirezAveraztruces, [pAntoniodeMarcosRamirezMatos.row + 3, pGladysAveraztruces.col - 1],
            [pAntoniodeMarcosRamirezAveraztruces.row - 2, pAntoniodeMarcosRamirezAveraztruces.col]
        ]
    ]
);
graph.add(pAntoniodeMarcosRamirezMatos.row - 1, pMujerNegra.col - 1,
    rlAntoniodeMarcosRamirezMatosMujerNegra, [
        [pAntoniodeMarcosRamirezMatos, [pAntoniodeMarcosRamirezMatos.row - 1, pAntoniodeMarcosRamirezMatos.col]],
        [pMujerNegra, [pMujerNegra.row - 1, pMujerNegra.col]]
    ]
);
graph.add(pAntoniodeMarcosRamirezMatos.row - 0.75, pElbaAguilar.col - 1,
    mtAntoniodeMarcosRamirezMatosElbaAguilar, [
        [pAntoniodeMarcosRamirezMatos, [pAntoniodeMarcosRamirezMatos.row - 0.75, pAntoniodeMarcosRamirezMatos.col]],
        [pElbaAguilar, [pElbaAguilar.row - 0.75, pElbaAguilar.col]], pMonicaMariaRamirez
    ]);
graph.add(pKeniaAguileraMatos.row, pGerardoPelaez.col - 1,
    mtKeniaAguileraMatosGerardoPelaez, [pKeniaAguileraMatos, pGerardoPelaez, pAlinetPelaezAguilera]);
graph.add(pKeniaAguileraMatos.row - 1, pCarlosNunez.col - 1,
    mtKeniaAguileraMatosCarlosNunez, [
        [pKeniaAguileraMatos, [pKeniaAguileraMatos.row - 1, pKeniaAguileraMatos.col]],
        [pCarlosNunez, [pCarlosNunez.row - 1, pCarlosNunez.col]], pCarlosNunezAguilera
    ]);
graph.add(pRubenAguileraMatos.row, pSandra.col - 1, mtRubenAguileraMatosSandra, [pRubenAguileraMatos, pSandra, [pRubenAguilera, [pRubenAguileraMatos.row + 3, pSandra.col - 1],
        [pRubenAguilera.row - 2, pRubenAguilera.col]
    ],
    [pHijaRubenNoname, [pRubenAguileraMatos.row + 3, pSandra.col - 1],
        [pHijaRubenNoname.row - 2, pHijaRubenNoname.col]
    ]
]);
graph.add(pPurificacionRamirezVargas.row, pSalomeRodriguezPino.col - 1, mtPurificacionRamirezVargasSalomeRodriguezPino, [pPurificacionRamirezVargas, pSalomeRodriguezPino, [pImirsiRodriguezRamirez, [pPurificacionRamirezVargas.row + 3, pSalomeRodriguezPino.col - 1],
        [pImirsiRodriguezRamirez.row - 2, pImirsiRodriguezRamirez.col]
    ],
    [pRonaldRodriguezRamirez, [pPurificacionRamirezVargas.row + 3, pSalomeRodriguezPino.col - 1],
        [pRonaldRodriguezRamirez.row - 2, pRonaldRodriguezRamirez.col]
    ]
]);
graph.add(pObduliaRamirezMilan.row, pTomasFerrandiSayasBazan.col - 1, mtObduliaRamirezTomasFerrandiSayasBazan, [pObduliaRamirezMilan, pTomasFerrandiSayasBazan, [pSandraFerrandiRamirez, [pObduliaRamirezMilan.row + 3, pTomasFerrandiSayasBazan.col - 1],
        [pSandraFerrandiRamirez.row - 2, pSandraFerrandiRamirez.col]
    ],
    [pDaniaFerrandiRamirez, [pObduliaRamirezMilan.row + 3, pTomasFerrandiSayasBazan.col - 1],
        [pDaniaFerrandiRamirez.row - 2, pDaniaFerrandiRamirez.col]
    ]
]);
graph.add(pAlinetPelaezAguilera.row, pAdrian.col - 1, mtAlinetPelaezAguileraAdrian, [pAlinetPelaezAguilera, pAdrian]);
graph.add(pYanitsiaRamirezPerez.row, pHilderTorres.col - 1, mtYanitsiaRamirezPerezHilderTorres, [pYanitsiaRamirezPerez, pHilderTorres, [pJavierAlejandroTorresRamirez, [pYanitsiaRamirezPerez.row + 3, pHilderTorres.col - 1],
        [pJavierAlejandroTorresRamirez.row - 2, pJavierAlejandroTorresRamirez.col]
    ],
    [pMiguelAlejandroTorresRamirez, [pYanitsiaRamirezPerez.row + 3, pHilderTorres.col - 1],
        [pMiguelAlejandroTorresRamirez.row - 2, pMiguelAlejandroTorresRamirez.col]
    ]
]);
graph.add(pYaritskeRamirezPerez.row, pOrlando.col - 1, mtYaritskeRamirezPerezOrlando, [pYaritskeRamirezPerez, pOrlando, [pRoxana, [pYaritskeRamirezPerez.row + 3, pOrlando.col - 1],
        [pRoxana.row - 2, pRoxana.col]
    ],
    [pRolandito, [pYaritskeRamirezPerez.row + 3, pOrlando.col - 1],
        [pRolandito.row - 2, pRolandito.col]
    ]
]);
graph.add(pYaritskeRamirezPerez.row - 1, pWilfredo.col - 1, mtYaritskeRamirezPerezWilfredo, [
    [pYaritskeRamirezPerez, [pYaritskeRamirezPerez.row - 1, pYaritskeRamirezPerez.col]],
    [pWilfredo, [pWilfredo.row - 1, pWilfredo.col]]
]);
//graph.more(12,35,mtElsaDiazMatosHeysel);
//graph.more(rlAntoniodeMarcosRamirezMatosMujerNegra);

//graph.more(pCarlosFreeman);
//---------------------------------------------------------
//END DRAWING
//---------------------------------------------------------

graph.init();