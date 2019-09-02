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
/*
var pNoname = {
    name: 'No name',

    gender: MAN,


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

    gender: WOMAN,


    comments: 'Ruben Aguilera Acuña',
    profile: defaultProfile
};

var pKeniaAguileraMatos = {
    name: 'Kenia',

    gender: WOMAN,


    comments: 'Kenia Aguilera Matos',
    profile: defaultProfile
};

var pGerardoPelaez = {
    name: 'Gerardo',
    nickname: "El chino",
    gender: WOMAN,


    comments: 'Gerardo Pelaez',
    profile: defaultProfile
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
    gender: WOMAN,


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

//============================
//Soria tree
//============================

var pLuisMiroclesSoriaRamos = {
    name: 'Luis Mirocles',

    gender: MAN,


    comments: 'Luis Mirocles Soria Ramos',
    profile: defaultProfile
};
var pCarmenMaceiraPerez = {
    name: 'Carmen',
    nickname: 'Carmita',
    gender: WOMAN,


    comments: 'Carmen "Carmita" Maceira Perez',
    profile: defaultProfile
};
var pTaniaSoriaMaceira = {
    name: 'Tania',
    nickname: 'Taniecita',
    gender: WOMAN,


    comments: 'Tania "Taniecita" Soria Maceira',
    profile: defaultProfile
};
var pBernardinoPenaHernandez = {
    name: 'Bernardino',

    gender: MAN,


    comments: 'Bernardino Peña Hernandez',
    profile: defaultProfile
};
var pMarietaPenaHernandez = {
    name: 'Marieta',

    gender: WOMAN,


    comments: 'Marieta Peña Hernandez (n. 19 de julio)',
    profile: defaultProfile
};
var pNonameVidal = {
    name: '????',

    gender: MAN,


    comments: '? Vidal',
    profile: defaultProfile
};
var pDianetVidalPena = {
    name: 'Dianet',

    gender: WOMAN,


    comments: 'Dianet Vidal Peña',
    profile: defaultProfile
};
var pJuanGualbertoCoronaPerez = {
    name: 'Juan Gualberto',

    gender: MAN,


    comments: 'Juan Gualberto Corona Perez',
    profile: defaultProfile
};
var pTaniadelCarmenCoronaSoria = {
    name: 'Tania del Carmen',
    nickname: 'Tanin',
    gender: WOMAN,


    comments: 'Tania del Carmen "Tanin" Corona Soria',
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
var pJorgeAmadoSoriaRamirez = {
    name: '',
    nickname: 'Amado, Gordo',
    gender: MAN,
    birth: '14 dec 1984',

    comments: 'Jorge "Amado, Gordo" Amado Soria Ramirez',
    profile: defaultProfile
};
var pArietaSoriaFernandez = {
    name: 'Arieta',

    gender: WOMAN,
    birth: '9 nov 1983',

    comments: 'Arieta Soria Fernandez',
    profile: defaultProfile
};
var pAntonio = {
    name: 'Antonio',
    nickname: 'Tony Culebra',
    gender: MAN,


    comments: 'gallero',
    profile: defaultProfile
};
var pDavidJeremiasRodriguezSoria = {
    name: 'David Jeremias',

    gender: MAN,


    comments: 'David Jeremias Rodríguez Soria',
    profile: defaultProfile
};
var pDanieldeJesusRodriguezSoria = {
    name: 'Daniel de Jesus',

    gender: MAN,


    comments: 'Daniel de Jesus Rodríguez Soria',
    profile: defaultProfile
};
var pJosueRodriguezSoria = {
    name: 'Josue',

    gender: MAN,


    comments: 'Josue Rodríguez Soria',
    profile: defaultProfile
};
var pAdrianSoriaCanela = {
    name: 'Adrian',

    gender: MAN,
    birth: '25 mayo 1985',

    comments: 'Adrian Soria Canela',
    profile: defaultProfile
};
var pIsmaelAdrianSoria = {
    name: 'Ismael Adrian',

    gender: MAN,


    comments: 'Ismael Adrian Soria',
    profile: defaultProfile
};
var pAbrahamAhmedSoria = {
    name: 'Abraham Ahmed',

    gender: MAN,
    birth: 'nov 2011',

    comments: 'Abraham Ahmed Soria',
    profile: defaultProfile
};
var pJorgeMiguelSoriaCasero = {
    name: 'Jorge Miguel',

    gender: MAN,
    birth: '16 nov 2000',

    comments: 'Jorge Miguel Soria Casero',
    profile: defaultProfile
};
var pRaylenisSoria = {
    name: 'Raylenis',

    gender: WOMAN,
    birth: '2016',

    comments: 'Raylenis Soria',
    profile: defaultProfile
};
var pZenaidaSoriaRamos = {
    name: 'Zenaida',

    gender: MAN,


    comments: 'Zenaida Soria Ramos	',
    profile: defaultProfile
};
var pEstrellaSoriaRamos = {
    name: 'Estrella',

    gender: WOMAN,


    comments: 'Estrella Soria Ramos ',
    profile: defaultProfile
};
var pHeribertoQuevedo = {
    name: 'Heriberto',

    gender: MAN,


    comments: 'Heriberto Quevedo (adinerado con negocios de tostaderos de cafe y una cadena de cafeterias)',
    profile: defaultProfile
};
var pCaridadQuevedoSoria = {
    name: 'Caridad',
    nickname: 'cachitica',
    gender: WOMAN,


    comments: 'Caridad Quevedo Soria',
    profile: defaultProfile
};
var pWilliamCambara = {
    name: 'William',

    gender: MAN,


    comments: 'William Cambara',
    profile: defaultProfile
};
var pWilliamCambaraQuevedo = {
    name: 'William',
    nickname: 'williancito',
    gender: MAN,


    comments: 'William "williancito" Cambara Quevedo (comunista)',
    profile: defaultProfile
};
var pAlexander = {
    name: 'Alexander',

    gender: MAN,


    comments: 'Alexander',
    profile: defaultProfile
};
var pJorgeLuis = {
    name: 'Jorge Luis',

    gender: MAN,


    comments: 'Jorge Luis (murio muy pequenno, nacido el mismo anno que mi papa)',
    profile: defaultProfile
};
var pOniel = {
    name: 'Oniel',

    gender: MAN,


    comments: 'Oniel',
    profile: defaultProfile
};
var pAlina = {
    name: 'Alina',

    gender: WOMAN,


    comments: 'Alina',
    profile: defaultProfile
};
var pSoniaQuevedoSoria = {
    name: 'Sonia',

    gender: WOMAN,


    comments: 'Sonia Quevedo Soria (huyo a USA al triunfo de la revolucion, a la edad de alrededor de 30 annos)	',
    profile: defaultProfile
};
var pBelkisQuevedoSoria = {
    name: 'Belkis',
    nickname: 'Kiki',
    gender: WOMAN,


    comments: 'Belkis Quevedo Soria',
    profile: defaultProfile
};
var pNonameVazquez = {
    name: '????',

    gender: OTHER,


    comments: '? Vazquez ?',
    profile: defaultProfile
};
var pGabrielVazquezQuevedo = {
    name: 'Gabriel',

    gender: MAN,


    comments: 'Gabriel Vazquez Quevedo',
    profile: defaultProfile
};
var pAlexanderVazquezQuevedo = {
    name: 'Alexander',

    gender: MAN,


    comments: 'Alexander Vazquez Quevedo',
    profile: defaultProfile
};
var pIlianaVazquezQuevedo = {
    name: 'Iliana',

    gender: WOMAN,


    comments: 'Iliana Vazquez Quevedo',
    profile: defaultProfile
};
var pNonameToranzo = {
    name: '????',

    gender: MAN,


    comments: '? Toranzo (oficial de tropas especiales)',
    profile: defaultProfile
};
var pValkisToranzoVazquez = {
    name: 'Valkis',

    gender: WOMAN,


    comments: 'Valkis Toranzo Vazquez',
    profile: defaultProfile
};
var pBelkisToranzoVazquez = {
    name: 'Belkis',

    gender: WOMAN,


    comments: 'Belkis Toranzo Vazquez',
    profile: defaultProfile
};
var pBertaQuevedoSoria = {
    name: 'Berta',

    gender: WOMAN,


    comments: 'Berta Quevedo Soria (peluquera de Tele Rebelde en Santiago)',
    profile: defaultProfile
};
var pNonameDominguez = {
    name: '????',
    nickname: 'Bichichin',
    gender: MAN,


    comments: '? "Bichichin" Dominguez ?',
    profile: defaultProfile
};
var pRafaelDominguezQuevedo = {
    name: 'Rafael',

    gender: MAN,


    comments: 'Rafael Dominguez Quevedo',
    profile: defaultProfile
};
/*	hija desconocida*/
var pEnrique = {
    name: 'Enrique',

    gender: MAN,


    comments: 'Enrique',
    profile: defaultProfile
};
/*	hija desconocida*/
var pHeribertoQuevedoSoria = {
    name: 'Heriberto',
    nickname: 'Querer',
    gender: MAN,


    comments: 'Heriberto "Querer" Quevedo Soria (profesor de ingles en la escuela de idiomas Maiakosky en Santo Tomas)',
    profile: defaultProfile
};
var pClaribel = {
    name: 'Claribel',

    gender: WOMAN,


    comments: 'Claribel (nacida en manzanillo) ?',
    profile: defaultProfile
};
var pNonamePuchuchu = {
    name: 'Puchuchú',
    nickname: 'Puchuchú',
    gender: MAN,


    comments: '? "Puchuchú" ?',
    profile: defaultProfile
};
var pJorgeQuevedo = {
    name: 'Jorge',

    gender: MAN,


    comments: 'Jorge Quevedo',
    profile: defaultProfile
};
var pVivianQuevedo = {
    name: 'Vivian',
    gender: WOMAN,
    comments: 'Vivian Quevedo ?'
};
var pRolandoSoriaRamos = {
    name: 'Rolando',
    gender: MAN,
    comments: 'Rolando Soria Ramos'
};
var pFernanda = {
    name: 'Fernanda',
    gender: WOMAN,
    comments: 'Fernanda'
};
var pReyterSoria = {
    name: 'Reyter',
    gender: MAN,
    comments: 'Reyter Soria'
};

var pNonameReyterSpouse = {
    gender: MAN,
};

var pReyterReyticoSoria = {
    name: 'Reyter',
    nickname: 'Reytico',
    gender: MAN,
    comments: 'Reyter "Reytico" Soria'
};
var pRobinSoria = {
    name: 'Robin',
    gender: MAN,
    comments: 'Robin Soria (estudio en mendive, un anno mayor que mi hermano, de pelo negro y ojos verdes)'
};
var pYolandaPineiro = {
    name: 'Yolanda',
    gender: MAN,
    comments: 'Yolanda Piñeiro '
};
var pRoldanSoriaPineiro = {
    name: 'Roldan',
    gender: MAN,
    comments: 'Roldan Soria Piñeiro (cardiologo)'
};
var pReynierSoriaPineiro = {
    name: 'Reynier',
    gender: MAN,
    comments: 'Reynier Soria Piñeiro (ginecologo)'
};
var pTeresaSoria = {
    name: 'Teresa',
    nickname: 'Teresita',
    gender: WOMAN,
    comments: 'Teresa Soria'
};
/*		hija desconocida*/
var pJustina = {
    name: 'Justina',
    gender: WOMAN,
    comments: 'Justina ?'
};
var pLuisSoria = {
    name: 'Luis',
    gender: MAN,
    comments: 'Luis Soria'
};
var pRafaelSoria = {
    name: 'Rafael',

    gender: MAN,


    comments: 'Rafael Soria (murio de peritonitis en el hospital)'
};
var pNonameAguilera = {
    gender: MAN,
    comments: '? Aguilera'
};
var pJorgeLuisSoriaAguilera = {
    name: 'Jorge Luis',
    gender: MAN,


    comments: 'Jorge Luis Soria Aguilera'
};
var pRobertoSoria = {
    name: 'Roberto',

    gender: MAN,


    comments: 'Roberto Soria (engrasador de la termoelectrica Rente y luego en Nuevitas)'
};
/*+ ?
	hijo varon (paracaidista de la FAR)
	hija hembra*/
var pLourdesSoria = {
    name: 'Lourdes',

    gender: WOMAN,


    comments: 'Lourdes Soria'
};
/*+
2 hembras desconocidas
1 varon desconocido*/


//Arbol de Carmen Maceira Perez
var pUrsulaBenitezPerez = {
    name: 'Ursula',

    gender: WOMAN,


    comments: 'Ursula Benitez Perez'
};
var pJoseMaceira = {
    name: 'Jose',

    gender: MAN,


    comments: 'Jose Maceira (tuvo mas de 36 hijos por la zona de Santiago y el Cristo, algunos conocidos y otros no. En la zona agricultural conocida como los llanos de Maceira)',
    profile: defaultProfile
};
var pCarmenMaceiraPerez = {
    name: 'Carmen',

    gender: WOMAN,
    birth: '28 nov 1924',
    death: '6 ago 2014',
    comments: 'Carmen Maceira Perez (inscrita por error como Perez, pero al final se enorgullecia de eso)'
};
var pSaraMaceiraBenitez = {
    name: 'Sara',

    gender: WOMAN,


    comments: 'Sara Maceira Benitez (n. 1923 m. 2004,2005) ',
    profile: defaultProfile
};
var pRaulVilaCarratala = {
    name: 'Raul',
    nickname: 'Tio Pegueta',
    gender: MAN,


    comments: 'Raul "Tio Pegueta" Vilá Carratalá (hacia jabas de tiritas, viajante de jabones con buen dinero, renuncio a ello para apoyar la Revolucion. juez lego, primer delegado de la circunscripcion del 26 de julio, vanguardia en zafra, fundador del PSP y el partido comunista)',
    profile: defaultProfile
};
var pRamonMaceiraBenitez = {
    name: 'Ramon',
    gender: MAN,
    comments: 'Ramon Maceira Benitez (combatiente del ejercito Rebelde)'
};
var pConcepcion = {
    name: 'Concepcion',
    nickname: 'Concha',
    gender: WOMAN,


    comments: 'cabaretera de bar',
    profile: defaultProfile
};
var pIsabelMaceira = {
    name: 'Isabela',
    nickname: 'Isabelita',
    gender: WOMAN,


    comments: 'Isabel "Isabelita" Maceira',
    profile: defaultProfile
};
var pNonamePanchitoMaceira = {
    name: 'Panchito',
    //nickname: 'Panchito',
    gender: MAN,


    comments: '? "Panchito" Maceira',
    profile: defaultProfile
};

var pSamiraYamirkaMaceira = {
    name: 'Samira',
    nickname: '',
    gender: WOMAN,


    comments: 'Samira Yamirka Maceira',
    profile: defaultProfile
};
var pNadiaMaceira = {
    name: 'Nadia',
    nickname: 'Pucha',
    gender: WOMAN,


    comments: 'Nadia Maceira(laboratorista)',
    profile: defaultProfile
};
var pNonamePucha = {
    nickname: 'Pucha',
    gender: WOMAN,
};

var pNonameRamonSpouse = {
    gender: WOMAN,
};

var pJorgeMaceira = {
    name: 'Jorge',

    gender: MAN,


    comments: 'Jorge Maceira'
};
var pGustavoMaceira = {
    name: 'Gustavo',
    nickname: 'Gustavito',
    gender: MAN,


    comments: 'Gustavo Maceira'
};
var pJoseMaceiraBenitez = {
    name: 'Jose',
    nickname: 'Pepe',
    gender: MAN,


    comments: 'Jose Maceira Benitez'
};
var pNorma = {
    name: 'Norma',

    gender: WOMAN,


    comments: 'Norma'
};
var pRodolfoValentinoMaceira = {
    name: 'Rodolfo',
    nickname: 'Valentin',
    gender: MAN,


    comments: 'Rodolfo Valentino Maceira'
};
var pValentina = {
    name: 'Valentina',

    gender: WOMAN,


    comments: 'Valentina '
};
var pValiaMaceira = {
    name: 'Valia',
    gender: WOMAN,
    comments: '(medico)'
};
var pRodolfoValentinoMaceira2 = {
    name: 'Rodolfo',
    nickname: 'Valentincito',
    gender: MAN,


};
var pBertaMaceiraBenitez = {
    name: 'Berta',
    gender: WOMAN,
    comments: 'Berta Maceira Benitez'
};
var pNonameVicente = {
    gender: MAN,
    comments: '? Vicente'
};
var pRaulVicenteMaceira = {
    name: 'Raul',

    gender: MAN,


    comments: 'Raul Vicente Maceira'
};
var pNonameUSA = {
    name: '???',

    gender: MAN,


    comments: '(estadounidense en USA)'
};
var pLuisaMaceiraBenitez = {
    name: 'Luisa',
    gender: WOMAN,
    comments: 'Luisa Maceira Benitez'
};
var pGloriaMaceiraBenitez = {
    name: 'Gloria',
    gender: WOMAN,
    comments: 'Gloria Maceira Benitez'
};
var pMoisesCalzadaBenitez = {
    name: 'Moises',
    nickname: 'Tacuba',
    gender: MAN,
    comments: 'Moises Calzada Benitez (combatiente del Ejercito Rebelde, bajo de la sierra como capitan, participo en misiones militares en el exterior)'
};
var pMoisesMarioCalzadaMaceira = {
    name: 'Moises',
    gender: MAN,
    comments: 'Moises Mario Calzada Maceira'
};
var pEloyMaceiraBenitez = {
    name: 'Eloy',
    gender: MAN,
    comments: 'Eloy Maceira Benitez'
};
var pCarmen = {
    name: 'Carmen',
    gender: WOMAN,
};
var pEloyMaceira = {
    name: 'Eloy',
    nickname: 'Eloycito',
    gender: MAN,
    comments: 'Eloy Maceira'
};
var pNoNameMaceira = {
    gender: WOMAN,
    comments: 'hija hembra Maceira'
};
var pIrela = {
    name: 'Irela',
    gender: WOMAN,
};
var pErnestoMaceira = {
    name: 'Ernesto',
    gender: MAN,
    comments: 'Ernesto Maceira'
};
var pTaniaMaceira = {
    name: 'Tania',
    gender: WOMAN,
    comments: 'Tania Maceira'
};

//Rama periferica de Jose Maceira
var pMarioMaceira = {
    name: 'Mario',
    gender: MAN,
    comments: 'Mario Maceira'
};
var pIlianaMaceira = {
    name: 'Iliana',
    gender: WOMAN,
    comments: 'Iliana Maceira'
};
var pNonameManzano = {
    gender: MAN,
    comments: '? Manzano (cardiologo en el hosp provincial, muy blanco, muy rubicundo, muy gordo)'
};
var pIlianaManzano = {
    name: 'Iliana',
    gender: WOMAN,
    comments: 'Iliana Manzano (medico)'
};
var pErnestoManzano = {
    name: 'Ernesto',
    gender: MAN,
    comments: 'Ernesto Manzano (medico, muy blanco, muy rubicundo, muy gordo) '
};

var pAnnelisPerezLegon = {
    name: 'Annelis',
    gender: WOMAN,

    comments: 'Annelis Perez Legon',
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
x = graph.addPeople(FIRST_GEN_ROW, x += i,
    pBlancaMatosGuisado, pMarcelinoMatosRondon, pAbelina,
    pCorsina, pFela, pLuzMatosRondon);
x = graph.addPeople(FIRST_GEN_ROW, x += i * 10.5, pMiguelRamirezNunez, pPurificacionFloresProenza,
    pMiguelSoria, pJustina,
    pIluminadaRamos, pZenaidaSoriaRamos, pEstrellaSoriaRamos,
    pHeribertoQuevedo, pRolandoSoriaRamos, pFernanda,
    pUrsulaBenitezPerez, pJoseMaceira,
    pMoisesMarioCalzadaMaceira);

x = 1;
i = 2;
x -= i;
x = graph.addPeople(SECOND_GEN_ROW, x += i,
    pDoraMatosMatos, pMarcelinoMatosMatos,
    pLuzDivina, pElsaMatosMatos,
    pManuelDiaz, pAbelinaMatosMatos,
    pRubenAguileraAcuna, pLuisEnriqueMatosMatos,
    pIrmaMorales, pDignaElenaMatosMatos,
    pManuelAmadoRamirezFlores, pTelmoMaciasMatos,
    pCucaAlvarez, pLuciaAlvarez,
    pMiguelRamirezFlores, pEmiliaGonzalezFruto,
    pVictorRamirezFlores, pOfeliaVargas,
    pCesarRamirezFlores, pLidiaMilanReytor,
    pEgidioRamirezFlores, pNoeliaRamirezFlores,
    pErnestinaRamirezFlores, pNonamePereda,
    pLuisMiroclesSoriaRamos, pCarmenMaceiraPerez,
    pCaridadQuevedoSoria, pWilliamCambara,
    pSoniaQuevedoSoria, pBelkisQuevedoSoria,
    pNonameVazquez, pBertaQuevedoSoria,
    pNonameDominguez, pHeribertoQuevedoSoria,
    pClaribel, pReyterSoria, pNonameReyterSpouse,
    pYolandaPineiro, pTeresaSoria,
    pLuisSoria, pRafaelSoria,
    pNonameAguilera, pRobertoSoria,
    pLourdesSoria, pSaraMaceiraBenitez,
    pRaulVilaCarratala, pRamonMaceiraBenitez,
    pNonameRamonSpouse,
    pConcepcion, pNonamePucha,
    pJoseMaceiraBenitez, pNorma,
    pBertaMaceiraBenitez, pNonameVicente,
    pNonameUSA, pLuisaMaceiraBenitez,
    pGloriaMaceiraBenitez, pMoisesCalzadaBenitez,
    pEloyMaceiraBenitez, pCarmen,
    pIrela, pMarioMaceira);

x = 0;
i = 2;
x -= i;
x = graph.addPeople(THIRD_GEN_ROW, x += i,
    pTelmoMaciasMatosHijo, pIlda, pBlancaMariaMatos,
    pSamuel, pElsaDiazMatos, pHeysel,
    pKeniaAguileraMatos, pGerardoPelaez, pCarlosNunez,
    pRubenAguileraMatos, pSandra, pIrmaMatosMorales,
    pSoniaMatosMorales, pLuisEnriqueMatosMorales, pMiguelEnriqueRamirezMatos,
    pAnaPerezFonseca, pGisela, pBlancaDeLaPurificacionRamirezMatos,
    pJorgeLuisSoriaMaceira, pAntoniodeMarcosRamirezMatos, pGladysAveraztruces,
    pElbaAguilar, pAmadoMarcelinoRamirezMatos,
    pCaridadMartinAlvarez, pPilarMartinAlvarez, pMauricioRamirezGonzalez,
    pXiomaraRamirezGonzalez, pMiriamRamirezGonzalez, pPurificacionRamirezVargas,
    pSalomeRodriguezPino, pRaulMartin, pCesarRamirezMilan,
    pEstrellaRamirezMilan, pObduliaRamirezMilan, pTomasFerrandiSayasBazan,
    pFelixRamirezMilan, pTaniaSoriaMaceira, pBernardinoPenaHernandez,
    pJuanGualbertoCoronaPerez, pTamaraSoriaMaceira, pCharlesFreeman,
    pFelixArañoWanton, pWilliamCambaraQuevedo, pAlexander,
    pJorgeLuis, pOniel, pAlina,
    pGabrielVazquezQuevedo, pAlexanderVazquezQuevedo, pIlianaVazquezQuevedo,
    pNonameToranzo, pRafaelDominguezQuevedo, pEnrique,
    pNonamePuchuchu, pJorgeQuevedo, pVivianQuevedo,
    pReyterReyticoSoria, pRobinSoria, pRoldanSoriaPineiro,
    pReynierSoriaPineiro, pJorgeLuisSoriaAguilera, pIsabelMaceira,
    pNonamePanchitoMaceira, pJorgeMaceira, pGustavoMaceira,
    pRodolfoValentinoMaceira, pValentina, pRaulVicenteMaceira,
    pEloyMaceira, pNoNameMaceira, pErnestoMaceira,
    pTaniaMaceira, pIlianaMaceira, pNonameManzano
     );

x = 1;
i = 2;
x -= i;
x = graph.addPeople(FOURTH_GEN_ROW, x += i,
    pTelmoMacias, pAntonio, pJacqueline,
    pAlinetPelaezAguilera, pAdrian, pCarlosNunezAguilera,
    pRubenAguilera, pHijaRubenNoname, pYanitsiaRamirezPerez,
    pHilderTorres, pYaritskeRamirezPerez, pOrlando,
    pWilfredo, pGiselaHija, pJorgeAmadoSoriaRamirez,
    pAmalSaifFonte, pJorgeLuisSoriaRamirez, pAndyMarcosRamirezAveraztruces,
    pAntoniodeMarcosRamirezAveraztruces, pMonicaMariaRamirez, pCarlosEnriqueRamirezMartin,
    pRaulRamirezMartin, pImirsiRodriguezRamirez, pRonaldRodriguezRamirez,
    pSandraFerrandiRamirez, pDaniaFerrandiRamirez, pMarietaPenaHernandez,
    pNonameVidal, pTaniadelCarmenCoronaSoria, pAriel,
    pCarlosLuisFreemanSoria, pDalia, pAlina,
    pYordankaTitoMoreira, pAnnelisPerezLegon, pJorgeAmadoSoriaRamirez,
    pArietaSoriaFernandez, pAntonio, pAdrianSoriaCanela,
    pJorgeMiguelSoriaCasero, pValkisToranzoVazquez, pBelkisToranzoVazquez,
    pSamiraYamirkaMaceira, pNadiaMaceira, pValiaMaceira,
    pRodolfoValentinoMaceira2, pIlianaManzano, pErnestoManzano
     );

x = 1;
i = 2;
x -= i;
x = graph.addPeople(FIFTH_GEN_ROW, x += i,
    pJavierAlejandroTorresRamirez, pMiguelAlejandroTorresRamirez,
    pRoxana, pRolandito,
    pKarlaNunez, pIsabela,
    pDianetVidalPena, pSaulo,
    pBerenice, pEleonora,
    pCarlosFreeman, pJorgeCarlos,
    pCarlosAlejandroFreeman, pCarmenHelenestherSoriaPerez,
    pJorgeLuisSoriaPerez, pDavidJeremiasRodriguezSoria,
    pDanieldeJesusRodriguezSoria, pJosueRodriguezSoria,
    pIsmaelAdrianSoria, pAbrahamAhmedSoria,
    pRaylenisSoria);

//RELATIONSHIP DATA
/*
var relationship = {
    date : date, //null. The date in which the relationship was formalized
    type: string //type of relationship, one of MARRIAGE, RELATIONSHIP
}
 */
//relationship nodes

graph.rel(pDaniaFerrandiRamirez, pIsabela);
graph.rel(pJorgeLuisSoriaMaceira, pJorgeMiguelSoriaCasero);
graph.rel(pJorgeLuisSoriaMaceira, pAdrianSoriaCanela);
graph.rel(pJorgeLuisSoriaMaceira, pArietaSoriaFernandez);
graph.rel(pJorgeMiguelSoriaCasero, pRaylenisSoria);
graph.rel(pAlina, pJorgeCarlos);
graph.rel(pCucaAlvarez, pPilarMartinAlvarez);
graph.rel(pCucaAlvarez, pCaridadMartinAlvarez);
graph.rel(pAdrianSoriaCanela, pIsmaelAdrianSoria);
graph.rel(pAdrianSoriaCanela, pAbrahamAhmedSoria);

graph.add(pBlancaMatosGuisado.row, pMarcelinoMatosRondon.col - 1, {
    date: '13/12/2012',
    type: MARRIAGE
}, [pBlancaMatosGuisado, pMarcelinoMatosRondon,
    pDignaElenaMatosMatos,
    pDoraMatosMatos,
    pMarcelinoMatosMatos,
    pElsaMatosMatos,
    pAbelinaMatosMatos,
    pLuisEnriqueMatosMatos
]);


graph.addMt(pMiguelRamirezNunez.row, pPurificacionFloresProenza.col - 1,
    [pMiguelRamirezNunez, pPurificacionFloresProenza,
        pManuelAmadoRamirezFlores, pErnestinaRamirezFlores,
        pMiguelRamirezFlores, pVictorRamirezFlores,
        pCesarRamirezFlores, pEgidioRamirezFlores, pNoeliaRamirezFlores
    ]);


graph.addMt(pMiguelSoria.row, pJustina.col - 1, [
    pMiguelSoria,
    pJustina,
    pLuisSoria,
    pRafaelSoria,
    pRobertoSoria,
    pLourdesSoria
]);

graph.addMt(pMiguelSoria.row - 1, pIluminadaRamos.col - 1, [
    pMiguelSoria,
    pIluminadaRamos,
    pLuisMiroclesSoriaRamos,
    pZenaidaSoriaRamos,
    pEstrellaSoriaRamos,
    pRolandoSoriaRamos
]);

graph.addMt(pLuisEnriqueMatosMatos.row, pIrmaMorales.col - 1,
    [pLuisEnriqueMatosMatos, pIrmaMorales,
        pSoniaMatosMorales,
        pLuisEnriqueMatosMorales,
    ]);

graph.addMt(pDignaElenaMatosMatos.row, pManuelAmadoRamirezFlores.col - 1,
    [pDignaElenaMatosMatos, pManuelAmadoRamirezFlores,
        pBlancaDeLaPurificacionRamirezMatos,
        pAmadoMarcelinoRamirezMatos,
        pMiguelEnriqueRamirezMatos,
        pAntoniodeMarcosRamirezMatos
    ]);

graph.addMt(pDoraMatosMatos, pTelmoMaciasMatos.col - 1,
    [pDoraMatosMatos, pTelmoMaciasMatos, pTelmoMaciasMatosHijo]);
graph.addMt(pMarcelinoMatosMatos.row, pLuzDivina.col - 1,
    [pMarcelinoMatosMatos, pLuzDivina, pBlancaMariaMatos]
);
graph.addMt(pElsaMatosMatos.row, pManuelDiaz.col - 1,
    [pElsaMatosMatos, pManuelDiaz, pElsaDiazMatos]);

graph.addMt(pAbelinaMatosMatos.row, pRubenAguileraAcuna.col - 1,
    [pAbelinaMatosMatos, pRubenAguileraAcuna,
        pKeniaAguileraMatos,
        pRubenAguileraMatos,
    ]
);

graph.addMt(pErnestinaRamirezFlores.row, pNonamePereda.col - 1,
    [
        pErnestinaRamirezFlores,
        pNonamePereda
    ]
);
graph.addMt(pMiguelRamirezFlores.row, pEmiliaGonzalezFruto.col - 1,
    [
        pMiguelRamirezFlores, pEmiliaGonzalezFruto,
        pMauricioRamirezGonzalez,
        pXiomaraRamirezGonzalez,
        pMiriamRamirezGonzalez,
    ]
);

graph.addMt(pVictorRamirezFlores.row, pOfeliaVargas.col - 1,
    [pVictorRamirezFlores, pOfeliaVargas, pPurificacionRamirezVargas]);
graph.addMt(pCesarRamirezFlores.row, pLidiaMilanReytor.col - 1,
    [pCesarRamirezFlores, pLidiaMilanReytor,
        pCesarRamirezMilan,
        pEstrellaRamirezMilan,
        pObduliaRamirezMilan,
        pFelixRamirezMilan,
    ]);
graph.addMt(pTelmoMaciasMatosHijo.row, pIlda.col - 1,
    [pTelmoMaciasMatosHijo, pIlda, pTelmoMacias]);
graph.addMt(pBlancaMariaMatos.row, pSamuel.col - 1,
    [pBlancaMariaMatos, pSamuel,
        pAntonio,
        pJacqueline
    ]);
graph.addMt(pBlancaDeLaPurificacionRamirezMatos.row, pJorgeLuisSoriaMaceira.col - 1,
    [
        pBlancaDeLaPurificacionRamirezMatos,
        pJorgeLuisSoriaMaceira,
        pJorgeAmadoSoriaRamirez,
        pJorgeLuisSoriaRamirez
    ]);
graph.addMt(pAmadoMarcelinoRamirezMatos.row, pCaridadMartinAlvarez.col - 1,
    [pAmadoMarcelinoRamirezMatos, pCaridadMartinAlvarez,
        pRaulRamirezMartin,
    ]);
graph.addMt(pElsaDiazMatos.row, pHeysel.col - 1, [pElsaDiazMatos, pHeysel]);
graph.addMt(pMiguelEnriqueRamirezMatos.row - 1, pGisela.col - 1,
    [
        pMiguelEnriqueRamirezMatos,
        pGisela,
        pGiselaHija,
    ]);
graph.addMt(pMiguelEnriqueRamirezMatos.row, pAnaPerezFonseca.col - 1,
    [pMiguelEnriqueRamirezMatos, pAnaPerezFonseca,
        pYaritskeRamirezPerez,
        pYanitsiaRamirezPerez
    ]
);
graph.addMt(pAntoniodeMarcosRamirezMatos.row, pGladysAveraztruces.col - 1,
    [pAntoniodeMarcosRamirezMatos, pGladysAveraztruces,
        pAndyMarcosRamirezAveraztruces,
        pAntoniodeMarcosRamirezAveraztruces
    ]);

graph.addMt(pAntoniodeMarcosRamirezMatos.row - 0.75, pElbaAguilar.col - 1,
    [
        pAntoniodeMarcosRamirezMatos,
        pElbaAguilar,
        pMonicaMariaRamirez
    ]);
graph.addMt(pKeniaAguileraMatos.row, pGerardoPelaez.col - 1,
    [pKeniaAguileraMatos, pGerardoPelaez, pAlinetPelaezAguilera]);

graph.addMt(pKeniaAguileraMatos.row - 1, pCarlosNunez.col - 1,
    [
        pKeniaAguileraMatos,
        pCarlosNunez,
        pCarlosNunezAguilera
    ]);
graph.addMt(pRubenAguileraMatos.row, pSandra.col - 1,
    [pRubenAguileraMatos,
        pSandra,
        pRubenAguilera,
        pHijaRubenNoname
    ]);
graph.addMt(pPurificacionRamirezVargas.row, pSalomeRodriguezPino.col - 1,
    [pPurificacionRamirezVargas, pSalomeRodriguezPino,
        pImirsiRodriguezRamirez,
        pRonaldRodriguezRamirez
    ]);
graph.addMt(pObduliaRamirezMilan.row, pTomasFerrandiSayasBazan.col - 1,
    [pObduliaRamirezMilan, pTomasFerrandiSayasBazan,
        pSandraFerrandiRamirez,
        pDaniaFerrandiRamirez
    ]);
graph.addMt(pAlinetPelaezAguilera.row, pAdrian.col - 1,
    [pAlinetPelaezAguilera, pAdrian]);
graph.addMt(pYanitsiaRamirezPerez.row, pHilderTorres.col - 1, 
    [pYanitsiaRamirezPerez, pHilderTorres, 
    pJavierAlejandroTorresRamirez, 
    pMiguelAlejandroTorresRamirez, 
]);
graph.addMt(pYaritskeRamirezPerez.row, pOrlando.col - 1,
    [pYaritskeRamirezPerez, pOrlando,
        pRoxana,
        pRolandito
    ]);

graph.addMt(pYaritskeRamirezPerez.row - 1, pWilfredo.col - 1, [
    pYaritskeRamirezPerez,
    pWilfredo
]);

graph.addMt(pRamonMaceiraBenitez.row - 1, pConcepcion.col - 1, [
    pRamonMaceiraBenitez,
    pConcepcion,
    pIsabelMaceira
]);

graph.addMt(pRamonMaceiraBenitez.row - 1, pNonamePucha.col - 1, [
    pRamonMaceiraBenitez,
    pNonamePucha,
    pJorgeMaceira,
    pGustavoMaceira
]);

graph.addMt(pRamonMaceiraBenitez.row - 1, pNonameRamonSpouse.col - 1, [
    pRamonMaceiraBenitez,
    pNonameRamonSpouse
]);

graph.addMt(pJoseMaceiraBenitez.row - 1, pNorma.col - 1, [
    pJoseMaceiraBenitez,
    pNorma,
    pRodolfoValentinoMaceira
]);

graph.addMt(pRodolfoValentinoMaceira.row - 1, pValentina.col - 1, [
    pRodolfoValentinoMaceira,
    pValentina,
    pValiaMaceira,
    pRodolfoValentinoMaceira2
]);

graph.addMt(pBertaMaceiraBenitez.row - 1, pNonameVicente.col - 1, [
    pBertaMaceiraBenitez,
    pNonameVicente,
    pRaulVicenteMaceira
]);

graph.addMt(pBertaMaceiraBenitez.row - 1, pNonameUSA.col - 1, [
    pBertaMaceiraBenitez,
    pNonameUSA
]);

graph.addMt(pGloriaMaceiraBenitez.row - 1, pMoisesCalzadaBenitez.col - 1, [
    pGloriaMaceiraBenitez,
    pMoisesCalzadaBenitez,
    pMoisesMarioCalzadaMaceira
]);

graph.addMt(pSaraMaceiraBenitez.row - 1, pRaulVilaCarratala.col - 1, [
    pSaraMaceiraBenitez,
    pRaulVilaCarratala
]);



graph.addMt(pEloyMaceiraBenitez.row - 1, pCarmen.col - 1, [
    pEloyMaceiraBenitez,
    pCarmen,
    pEloyMaceira,
    pNoNameMaceira
]);

graph.addMt(pEloyMaceiraBenitez.row - 1, pIrela.col - 1, [
    pEloyMaceiraBenitez,
    pIrela,
    pErnestoMaceira,
    pTaniaMaceira
]);

graph.addMt(pTaniaSoriaMaceira.row - 1, pJuanGualbertoCoronaPerez.col - 1, [
    pTaniaSoriaMaceira,
    pJuanGualbertoCoronaPerez,
    pTaniadelCarmenCoronaSoria
]);

graph.addMt(pTaniadelCarmenCoronaSoria.row - 1, pAriel.col - 1, [
    pTaniadelCarmenCoronaSoria,
    pAriel,
    pSaulo,
    pBerenice,
    pEleonora
]);

graph.addMt(pTamaraSoriaMaceira.row - 1, pCharlesFreeman.col - 1, [
    pTamaraSoriaMaceira,
    pCharlesFreeman,
    pCarlosLuisFreemanSoria
]);

graph.addMt(pCarlosLuisFreemanSoria.row - 1, pDalia.col - 1, [
    pCarlosLuisFreemanSoria,
    pDalia,
    pCarlosAlejandroFreeman
]);

graph.addMt(pCarlosLuisFreemanSoria.row - 1, pAlina.col - 1, [
    pCarlosLuisFreemanSoria,
    pAlina,
    pCarlosFreeman
]);

graph.addMt(pTamaraSoriaMaceira.row - 1, pFelixArañoWanton.col - 1, [
    pTamaraSoriaMaceira,
    pFelixArañoWanton
]);


graph.addMt(pLuisMiroclesSoriaRamos.row - 1, pCarmenMaceiraPerez.col - 1, [
    pLuisMiroclesSoriaRamos,
    pCarmenMaceiraPerez,
    pTaniaSoriaMaceira,
    pTamaraSoriaMaceira,
    pJorgeLuisSoriaMaceira
]);

graph.addMt(pTaniaSoriaMaceira.row - 1, pBernardinoPenaHernandez.col - 1, [
    pTaniaSoriaMaceira,
    pBernardinoPenaHernandez,
    pMarietaPenaHernandez
]);

graph.addMt(pTaniaSoriaMaceira.row - 1, pBernardinoPenaHernandez.col - 1, [
    pTaniaSoriaMaceira,
    pBernardinoPenaHernandez,
    pMarietaPenaHernandez
]);

graph.addMt(pIlianaMaceira.row - 1, pNonameManzano.col - 1, [
    pIlianaMaceira,
    pNonameManzano,
    pIlianaManzano,
    pErnestoManzano
]);

graph.addMt(pIsabelMaceira.row - 1, pNonamePanchitoMaceira.col - 1, [
    pIsabelMaceira,
    pNonamePanchitoMaceira,
    pSamiraYamirkaMaceira,
    pNadiaMaceira
]);

graph.addMt(pReyterSoria.row - 1, pNonameReyterSpouse.col - 1, [
    pReyterSoria,
    pNonameReyterSpouse,
    pReyterReyticoSoria,
    pRobinSoria
]);

graph.addMt(pReyterSoria.row - 1, pYolandaPineiro.col - 1, [
    pReyterSoria,
    pYolandaPineiro,
    pRoldanSoriaPineiro,
    pReynierSoriaPineiro
]);

graph.addMt(pRolandoSoriaRamos.row - 1, pFernanda.col - 1, [
    pRolandoSoriaRamos, 
    pFernanda, 
    pReyterSoria, 
    pTeresaSoria
]);

graph.addMt(pMarietaPenaHernandez.row, pNonameVidal.col - 1, [
    pMarietaPenaHernandez, 
    pNonameVidal, 
    pDianetVidalPena
]);

graph.addMt(pJorgeLuisSoriaRamirez.row - 1, pYordankaTitoMoreira.col - 1, [
    pJorgeLuisSoriaRamirez,
    pYordankaTitoMoreira
]);

graph.addMt(pJorgeLuisSoriaRamirez.row - 1, pAnnelisPerezLegon.col - 1, [
    pJorgeLuisSoriaRamirez,
    pAnnelisPerezLegon, 
    pCarmenHelenestherSoriaPerez,
    pJorgeLuisSoriaPerez
]);

graph.addMt(pArietaSoriaFernandez.row - 1, pAntonio.col - 1, [
    pArietaSoriaFernandez,
    pAntonio, 
    pDavidJeremiasRodriguezSoria,
    pDanieldeJesusRodriguezSoria, 
    pJosueRodriguezSoria
]);

graph.addMt(pIlianaVazquezQuevedo.row - 1, pNonameToranzo.col - 1, [
    pIlianaVazquezQuevedo,
    pNonameToranzo, 
    pValkisToranzoVazquez,
    pBelkisToranzoVazquez
]);

graph.addMt(pBertaQuevedoSoria.row - 1, pNonameDominguez.col - 1, [
    pBertaQuevedoSoria,
    pNonameDominguez, 
    pRafaelDominguezQuevedo, 
    pEnrique
]);

graph.addMt(pBelkisQuevedoSoria.row - 1, pNonameVazquez.col - 1, [
    pBelkisQuevedoSoria, 
    pNonameVazquez, 
    pGabrielVazquezQuevedo,
    pIlianaVazquezQuevedo, 
    pAlexanderVazquezQuevedo
]);

graph.addMt(pHeribertoQuevedoSoria.row - 1, pClaribel.col - 1, [
    pHeribertoQuevedoSoria, 
    pClaribel, 
    pNonamePuchuchu, 
    pJorgeQuevedo,
    pVivianQuevedo
]);

graph.addMt(pRafaelSoria.row - 1, pNonameAguilera.col - 1, [
    pRafaelSoria, 
    pNonameAguilera, 
    pJorgeLuisSoriaAguilera
]);


graph.addMt(pCaridadQuevedoSoria.row - 1, pWilliamCambara.col - 1, [
    pCaridadQuevedoSoria, 
    pWilliamCambara, 
    pWilliamCambaraQuevedo, 
    pAlexander, 
    pJorgeLuis, 
    pOniel, 
    pAlina
]);

graph.addMt(pEstrellaSoriaRamos.row - 1, pHeribertoQuevedo.col - 1, [
    pEstrellaSoriaRamos, 
    pHeribertoQuevedo, 
    pCaridadQuevedoSoria, 
    pSoniaQuevedoSoria, 
    pBelkisQuevedoSoria, 
    pBertaQuevedoSoria, 
    pHeribertoQuevedoSoria
]);

graph.addMt(pUrsulaBenitezPerez.row - 1, pJoseMaceira.col - 1, [
    pUrsulaBenitezPerez,
    pJoseMaceira, 
    pCarmenMaceiraPerez, 
    pSaraMaceiraBenitez, 
    pJoseMaceiraBenitez, 
    pBertaMaceiraBenitez,
    pLuisaMaceiraBenitez, 
    pGloriaMaceiraBenitez, 
    pEloyMaceiraBenitez
]);

//graph.more(12,35,mtElsaDiazMatosHeysel);
//graph.more(pCarlosFreeman);
//graph.more(pRobertoSoria);
//graph.more(pLourdesSoria);
//graph.more(pTeresaSoria);
//graph.more(mtRamonMaceiraBenitezNoname);

//---------------------------------------------------------
//END DRAWING
//---------------------------------------------------------

graph.init();