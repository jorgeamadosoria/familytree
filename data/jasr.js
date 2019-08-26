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
    name: 'Jorge Amado',

    gender: MAN,
    birth: '14 dic 1984',

    comments: 'Jorge Amado Soria Ramirez',
    profile: defaultProfile
};

var pJorgeLuisSoriaRamirez = {
    name: 'Amal',
    nickname: '',
    gender: WOMAN,
    birth: '09/08/1990',

    comments: 'Amal Saif Fonte',
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

var pMujerNegra = {
    name: '???',

    gender: WOMAN,


    comments: 'MujerNegra(extra mat)',
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


    comments: 'Noelia Ramirez Flores',
    profile: defaultProfile
};

//============================
//Soria tree
//============================

var pMiguelSoria = {
    name: 'Miguel',

    gender: MAN,


    comments: 'miguel soria (huerfano a los 7 annos)',
    profile: defaultProfile
};

var pIluminadaRamos = {
    name: 'Iluminada',

    gender: WOMAN,


    comments: 'Iluminada ramos (murio de pasmo, termino guajiro para el paro cardiaco respiratorio. Sobre los 40 annos de edad)',
    profile: defaultProfile
};

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
var pAriel = {
    name: 'Ariel',

    gender: MAN,


    comments: 'Ariel ?',
    profile: defaultProfile
};
var pSaulo = {
    name: 'Saulo',

    gender: MAN,


    comments: 'Saulo',
    profile: defaultProfile
};
var pBerenice = {
    name: 'Berenice',

    gender: WOMAN,


    comments: 'Berenice',
    profile: defaultProfile
};
var pEleonora = {
    name: 'Eleonora',

    gender: WOMAN,


    comments: 'Eleonora',
    profile: defaultProfile
};
var pTamaraSoriaMaceira = {
    name: 'Tamara',

    gender: WOMAN,


    comments: 'Tamara Soria Maceira'
};
var pCharlesFreeman = {
    name: 'Charles',

    gender: MAN,


    comments: 'Charles Freeman (cubano descendiente de estadounidenses)'
};
var pCarlosLuisFreemanSoria = {
    name: 'Carlos Luis',
    nickname: 'Carlitos',
    gender: MAN,
    comments: 'Carlos Luis Freeman Soria'
};
var pDalia = {
    name: 'Dalia',
    gender: WOMAN,
};
var pCarlosFreeman = {
    name: 'Carlos',
    nickname: 'Carlitin',
    gender: MAN,
    comments: 'Carlos Freeman ?'
};
var pAlina = {
    name: 'Alina',
    gender: WOMAN,
};
var pJorgeCarlos = {
    name: 'Jorge Carlos',
    gender: MAN,
    comments: 'Jorge Carlos ? ?, hijo de Alina'
};
var pCarlosAlejandroFreeman = {
    name: 'Carlos Alejandro',
    gender: MAN,
    comments: 'Carlos Alejandro Freeman'
};
var pFelixArañoWanton = {
    name: 'Felix',

    gender: MAN,


    comments: 'Felix Araño Wanton (fue Presidente del Poder Popular de la ciudad, recibio numerosas medallas y reconocimiento)'
};
var pYordankaTitoMoreira = {
    name: 'Yordanka',
    gender: WOMAN,
    birth: '19 nov 1976',
    comments: 'Yordanka Tito Moreira'
};
/*	hijo desconocido',*/
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
var pDavidJeremiasNoNameSoria = {
    name: 'David Jeremias',

    gender: MAN,


    comments: 'David Jeremias ? Soria',
    profile: defaultProfile
};
var pDanieldeJesusNonameSoria = {
    name: 'Daniel de Jesus',

    gender: MAN,


    comments: 'Daniel de Jesus ? Soria',
    profile: defaultProfile
};
var pJosueNonameSoria = {
    name: 'Josue',

    gender: MAN,


    comments: 'Josue ? Soria',
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



//Annelis 
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
graph.addPeople(FIRST_GEN_ROW, x += i, 
    pBlancaMatosGuisado, pMarcelinoMatosRondon, pAbelina, 
    pCorsina, pMiguelRamirezNunez, pPurificacionFloresProenza, 
    pFela, pLuzMatosRondon, pJustina, pMiguelSoria, 
    pIluminadaRamos, pZenaidaSoriaRamos, pEstrellaSoriaRamos, 
    pHeribertoQuevedo, pRolandoSoriaRamos, pFernanda, 
     pUrsulaBenitezPerez, pJoseMaceira, 
    pMoisesMarioCalzadaMaceira);

x = 1;
i = 2;
x -= i;
graph.addPeople(SECOND_GEN_ROW, x += i, 
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
    pIrela, pMarioMaceira, 
    pWilfredoLegonWaldarrama, pEstherRodriguezHurtado);

x = 0;
i = 2;
x -= i;
graph.addPeople(THIRD_GEN_ROW, x += i, 
    pTelmoMaciasMatosHijo, pIlda, pBlancaMariaMatos, 
    pSamuel, pElsaDiazMatos, pHeysel, 
    pKeniaAguileraMatos, pGerardoPelaez, pCarlosNunez, 
    pRubenAguileraMatos, pSandra, pIrmaMatosMorales, 
    pSoniaMatosMorales, pLuisEnriqueMatosMorales, pMiguelEnriqueRamirezMatos, 
    pAnaPerezFonseca, pGisela, pBlancaDeLaPurificacionRamirezMatos, 
    pJorgeLuisSoriaMaceira, pAntoniodeMarcosRamirezMatos, pGladysAveraztruces, 
    pElbaAguilar, pMujerNegra, pAmadoMarcelinoRamirezMatos, 
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
    pTaniaMaceira, pIlianaMaceira, pNonameManzano, 
    pMercedesdelaCandelariaLegonRodriguez, pJorgePerez, pRafaelPerezSantana);

x = 1;
i = 2;
x -= i;
graph.addPeople(FOURTH_GEN_ROW, x += i, 
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
    pRodolfoValentinoMaceira2, pIlianaManzano, pErnestoManzano,
    pRafaelPerezLegon, pDayesiRizoCala);

x = 1;
i = 2;
x -= i;
graph.addPeople(FIFTH_GEN_ROW, x += i, 
    pJavierAlejandroTorresRamirez, pMiguelAlejandroTorresRamirez, 
    pRoxana, pRolandito, 
    pKarlaNunez, pIsabela, 
    pDianetVidalPena, pSaulo, 
    pBerenice, pEleonora, 
    pCarlosFreeman, pJorgeCarlos, 
    pCarlosAlejandroFreeman, pCarmenHelenestherSoriaPerez, 
    pJorgeLuisSoriaPerez, pDavidJeremiasNoNameSoria, 
    pDanieldeJesusNonameSoria, pJosueNonameSoria, 
    pIsmaelAdrianSoria, pAbrahamAhmedSoria, 
    pRaylenisSoria, pSelenePerezRizo);

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
graph.rel(pAlina,pJorgeCarlos);
graph.rel(pCucaAlvarez, pPilarMartinAlvarez, [
    [pCucaAlvarez.row + 3, pCucaAlvarez.col],
    [pPilarMartinAlvarez.row - 2, pPilarMartinAlvarez.col]
]);

graph.rel(pCucaAlvarez, pCaridadMartinAlvarez, [
    [pCucaAlvarez.row + 3, pCucaAlvarez.col],
    [pCaridadMartinAlvarez.row - 2, pCaridadMartinAlvarez.col]
]);
graph.rel(pAdrianSoriaCanela, pIsmaelAdrianSoria, [
    [pAdrianSoriaCanela.row - 2, pAdrianSoriaCanela.col],
    [pIsmaelAdrianSoria.row - 2, pIsmaelAdrianSoria.col]
]);

graph.rel(pAdrianSoriaCanela, pAbrahamAhmedSoria, [
    [pAbrahamAhmedSoria.row - 2, pAbrahamAhmedSoria.col],
    [pAbrahamAhmedSoria.row - 2, pAbrahamAhmedSoria.col]
]);

graph.add(pBlancaMatosGuisado.row, pMarcelinoMatosRondon.col - 1,
    {
        date: '13/12/2012',
        type: MARRIAGE
    }, [pBlancaMatosGuisado, pMarcelinoMatosRondon, [pDignaElenaMatosMatos, [pBlancaMatosGuisado.row + 3, pMarcelinoMatosRondon.col - 1],
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
graph.addMt(pMiguelRamirezNunez, pPurificacionFloresProenza.col - 1,
     [pMiguelRamirezNunez, pPurificacionFloresProenza, pManuelAmadoRamirezFlores, pErnestinaRamirezFlores, pMiguelRamirezFlores, pVictorRamirezFlores, pCesarRamirezFlores, pEgidioRamirezFlores, pNoeliaRamirezFlores]);
graph.addMt(pLuisEnriqueMatosMatos.row, pIrmaMorales.col - 1,
     [pLuisEnriqueMatosMatos, pIrmaMorales, [pIrmaMatosMorales, [pLuisEnriqueMatosMatos.row + 3, pIrmaMorales.col - 1],
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
graph.addMt(pDignaElenaMatosMatos.row, pManuelAmadoRamirezFlores.col - 1,
     [pDignaElenaMatosMatos, pManuelAmadoRamirezFlores, [pBlancaDeLaPurificacionRamirezMatos, [pDignaElenaMatosMatos.row + 3, pManuelAmadoRamirezFlores.col - 1],
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
graph.addMt(pDoraMatosMatos, pTelmoMaciasMatos.col - 1, [pDoraMatosMatos, pTelmoMaciasMatos, pTelmoMaciasMatosHijo]);
graph.addMt(pMarcelinoMatosMatos.row, pLuzDivina.col - 1,
    [pMarcelinoMatosMatos, pLuzDivina, pBlancaMariaMatos]
);
graph.addMt(pElsaMatosMatos.row, pManuelDiaz.col - 1,  [pElsaMatosMatos, pManuelDiaz, pElsaDiazMatos]);
graph.addMt(pAbelinaMatosMatos.row, pRubenAguileraAcuna.col - 1,
     [pAbelinaMatosMatos, pRubenAguileraAcuna, [pKeniaAguileraMatos, [pAbelinaMatosMatos.row + 3, pRubenAguileraAcuna.col - 1],
            [pKeniaAguileraMatos.row - 2, pKeniaAguileraMatos.col]
        ],
        [pRubenAguileraMatos, [pAbelinaMatosMatos.row + 3, pRubenAguileraAcuna.col - 1],
            [pRubenAguileraMatos.row - 2, pRubenAguileraMatos.col]
        ]
    ]
);

graph.addMt(pErnestinaRamirezFlores.row, pNonamePereda.col - 1,
     [
        pErnestinaRamirezFlores,
        pNonamePereda
    ]
);
graph.addMt(pMiguelRamirezFlores.row, pEmiliaGonzalezFruto.col - 1,
     [pMiguelRamirezFlores, pEmiliaGonzalezFruto, [pMauricioRamirezGonzalez, [pMiguelRamirezFlores.row + 3, pEmiliaGonzalezFruto.col - 1],
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

graph.addMt(pVictorRamirezFlores.row, pOfeliaVargas.col - 1,
    [pVictorRamirezFlores, pOfeliaVargas, pPurificacionRamirezVargas]
);
graph.addMt(pCesarRamirezFlores.row, pLidiaMilanReytor.col - 1,
    [pCesarRamirezFlores, pLidiaMilanReytor, [pCesarRamirezMilan, [pCesarRamirezFlores.row + 3, pLidiaMilanReytor.col - 1],
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
graph.addMt(pTelmoMaciasMatosHijo.row, pIlda.col - 1,
     [pTelmoMaciasMatosHijo, pIlda, pTelmoMacias]
);
graph.addMt(pBlancaMariaMatos.row, pSamuel.col - 1,
     [pBlancaMariaMatos, pSamuel, [pAntonio, [pBlancaMariaMatos.row + 3, pSamuel.col - 1],
            [pAntonio.row - 2, pAntonio.col]
        ],
        [pJacqueline, [pBlancaMariaMatos.row + 3, pSamuel.col - 1],
            [pJacqueline.row - 2, pJacqueline.col]
        ]
    ]
);
graph.addMt(pBlancaDeLaPurificacionRamirezMatos.row, pJorgeLuisSoriaMaceira.col - 1,
    [
        pBlancaDeLaPurificacionRamirezMatos,
        pJorgeLuisSoriaMaceira, [pJorgeAmadoSoriaRamirez, [pBlancaDeLaPurificacionRamirezMatos.row + 3, pJorgeLuisSoriaMaceira.col - 1],
            [pJorgeAmadoSoriaRamirez.row - 2, pJorgeAmadoSoriaRamirez.col]
        ],
        [pJorgeLuisSoriaRamirez, [pBlancaDeLaPurificacionRamirezMatos.row + 3, pJorgeLuisSoriaMaceira.col - 1],
            [pJorgeLuisSoriaRamirez.row - 2, pJorgeLuisSoriaRamirez.col]
        ]
    ]
);
graph.addMt(pAmadoMarcelinoRamirezMatos.row, pCaridadMartinAlvarez.col - 1,
    [pAmadoMarcelinoRamirezMatos, pCaridadMartinAlvarez, [pCarlosEnriqueRamirezMartin, [pAmadoMarcelinoRamirezMatos.row + 3, pCaridadMartinAlvarez.col - 1],
            [pCarlosEnriqueRamirezMartin.row - 2, pCarlosEnriqueRamirezMartin.col]
        ],
        [pRaulRamirezMartin, [pAmadoMarcelinoRamirezMatos.row + 3, pCaridadMartinAlvarez.col - 1],
            [pRaulRamirezMartin.row - 2, pRaulRamirezMartin.col]
        ]
    ]
);
graph.addMt(pElsaDiazMatos.row, pHeysel.col - 1, [pElsaDiazMatos, pHeysel]);
graph.addMt(pMiguelEnriqueRamirezMatos.row - 1, pGisela.col - 1,
    [
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
graph.addMt(pMiguelEnriqueRamirezMatos.row, pAnaPerezFonseca.col - 1,
    [pMiguelEnriqueRamirezMatos, pAnaPerezFonseca, [pYaritskeRamirezPerez, [pMiguelEnriqueRamirezMatos.row + 3, pAnaPerezFonseca.col - 1],
            [pYaritskeRamirezPerez.row - 2, pYaritskeRamirezPerez.col]
        ],
        [pYanitsiaRamirezPerez, [pMiguelEnriqueRamirezMatos.row + 3, pAnaPerezFonseca.col - 1],
            [pYanitsiaRamirezPerez.row - 2, pYanitsiaRamirezPerez.col]
        ]
    ]
);
graph.addMt(pAntoniodeMarcosRamirezMatos.row, pGladysAveraztruces.col - 1,
    [pAntoniodeMarcosRamirezMatos, pGladysAveraztruces, [pAndyMarcosRamirezAveraztruces, [pAntoniodeMarcosRamirezMatos.row + 3, pGladysAveraztruces.col - 1],
            [pAndyMarcosRamirezAveraztruces.row - 2, pAndyMarcosRamirezAveraztruces.col]
        ],
        [pAntoniodeMarcosRamirezAveraztruces, [pAntoniodeMarcosRamirezMatos.row + 3, pGladysAveraztruces.col - 1],
            [pAntoniodeMarcosRamirezAveraztruces.row - 2, pAntoniodeMarcosRamirezAveraztruces.col]
        ]
    ]
);
graph.add(pAntoniodeMarcosRamirezMatos.row - 1, pMujerNegra.col - 1,
    {type:RELATIONSHIP}, [
        [pAntoniodeMarcosRamirezMatos, [pAntoniodeMarcosRamirezMatos.row - 1, pAntoniodeMarcosRamirezMatos.col]],
        [pMujerNegra, [pMujerNegra.row - 1, pMujerNegra.col]]
    ]
);

graph.addMt(pAntoniodeMarcosRamirezMatos.row - 0.75, pElbaAguilar.col - 1,
    [
        [pAntoniodeMarcosRamirezMatos, [pAntoniodeMarcosRamirezMatos.row - 0.75, pAntoniodeMarcosRamirezMatos.col]],
        [pElbaAguilar, [pElbaAguilar.row - 0.75, pElbaAguilar.col]], pMonicaMariaRamirez
    ]);
graph.addMt(pKeniaAguileraMatos.row, pGerardoPelaez.col - 1,
    [pKeniaAguileraMatos, pGerardoPelaez, pAlinetPelaezAguilera]);
graph.addMt(pKeniaAguileraMatos.row - 1, pCarlosNunez.col - 1,
    [
        [pKeniaAguileraMatos, [pKeniaAguileraMatos.row - 1, pKeniaAguileraMatos.col]],
        [pCarlosNunez, [pCarlosNunez.row - 1, pCarlosNunez.col]], pCarlosNunezAguilera
    ]);
graph.addMt(pRubenAguileraMatos.row, pSandra.col - 1, [pRubenAguileraMatos, pSandra, [pRubenAguilera, [pRubenAguileraMatos.row + 3, pSandra.col - 1],
        [pRubenAguilera.row - 2, pRubenAguilera.col]
    ],
    [pHijaRubenNoname, [pRubenAguileraMatos.row + 3, pSandra.col - 1],
        [pHijaRubenNoname.row - 2, pHijaRubenNoname.col]
    ]
]);
graph.addMt(pPurificacionRamirezVargas.row, pSalomeRodriguezPino.col - 1, [pPurificacionRamirezVargas, pSalomeRodriguezPino, [pImirsiRodriguezRamirez, [pPurificacionRamirezVargas.row + 3, pSalomeRodriguezPino.col - 1],
        [pImirsiRodriguezRamirez.row - 2, pImirsiRodriguezRamirez.col]
    ],
    [pRonaldRodriguezRamirez, [pPurificacionRamirezVargas.row + 3, pSalomeRodriguezPino.col - 1],
        [pRonaldRodriguezRamirez.row - 2, pRonaldRodriguezRamirez.col]
    ]
]);
graph.addMt(pObduliaRamirezMilan.row, pTomasFerrandiSayasBazan.col - 1, [pObduliaRamirezMilan, pTomasFerrandiSayasBazan, [pSandraFerrandiRamirez, [pObduliaRamirezMilan.row + 3, pTomasFerrandiSayasBazan.col - 1],
        [pSandraFerrandiRamirez.row - 2, pSandraFerrandiRamirez.col]
    ],
    [pDaniaFerrandiRamirez, [pObduliaRamirezMilan.row + 3, pTomasFerrandiSayasBazan.col - 1],
        [pDaniaFerrandiRamirez.row - 2, pDaniaFerrandiRamirez.col]
    ]
]);
graph.addMt(pAlinetPelaezAguilera.row, pAdrian.col - 1, [pAlinetPelaezAguilera, pAdrian]);
graph.addMt(pYanitsiaRamirezPerez.row, pHilderTorres.col - 1, [pYanitsiaRamirezPerez, pHilderTorres, [pJavierAlejandroTorresRamirez, [pYanitsiaRamirezPerez.row + 3, pHilderTorres.col - 1],
        [pJavierAlejandroTorresRamirez.row - 2, pJavierAlejandroTorresRamirez.col]
    ],
    [pMiguelAlejandroTorresRamirez, [pYanitsiaRamirezPerez.row + 3, pHilderTorres.col - 1],
        [pMiguelAlejandroTorresRamirez.row - 2, pMiguelAlejandroTorresRamirez.col]
    ]
]);
graph.addMt(pYaritskeRamirezPerez.row, pOrlando.col - 1, [pYaritskeRamirezPerez, pOrlando, [pRoxana, [pYaritskeRamirezPerez.row + 3, pOrlando.col - 1],
        [pRoxana.row - 2, pRoxana.col]
    ],
    [pRolandito, [pYaritskeRamirezPerez.row + 3, pOrlando.col - 1],
        [pRolandito.row - 2, pRolandito.col]
    ]
]);

graph.addMt(pYaritskeRamirezPerez.row - 1, pWilfredo.col - 1, [
    [pYaritskeRamirezPerez, [pYaritskeRamirezPerez.row - 1, pYaritskeRamirezPerez.col]],
    [pWilfredo, [pWilfredo.row - 1, pWilfredo.col]]
]);

graph.addMt(pRamonMaceiraBenitez.row - 1, pConcepcion.col - 1, [
    [pRamonMaceiraBenitez, [pRamonMaceiraBenitez.row - 1, pRamonMaceiraBenitez.col]],
    [pConcepcion, [pConcepcion.row - 1, pConcepcion.col]],
    [pIsabelMaceira, [pIsabelMaceira.row - 1, pIsabelMaceira.col]]
]);

graph.addMt(pRamonMaceiraBenitez.row - 1, pNonamePucha.col - 1, [
    [pRamonMaceiraBenitez, [pRamonMaceiraBenitez.row - 1, pRamonMaceiraBenitez.col]],
    [pNonamePucha, [pNonamePucha.row - 1, pNonamePucha.col]],
    [pJorgeMaceira, [pJorgeMaceira.row - 1, pJorgeMaceira.col]],
    [pGustavoMaceira, [pGustavoMaceira.row - 1, pGustavoMaceira.col]]
]);


graph.addMt(pRamonMaceiraBenitez.row - 1, pNonameRamonSpouse.col - 1, [
    [pRamonMaceiraBenitez, [pRamonMaceiraBenitez.row - 1, pRamonMaceiraBenitez.col]],
    [pNonameRamonSpouse, [pNonameRamonSpouse.row - 1, pNonameRamonSpouse.col]],
]);

graph.addMt(pJoseMaceiraBenitez.row - 1, pNorma.col - 1, [
    [pJoseMaceiraBenitez, [pJoseMaceiraBenitez.row - 1, pJoseMaceiraBenitez.col]],
    [pNorma, [pNorma.row - 1, pNorma.col]],
    [pRodolfoValentinoMaceira, [pRodolfoValentinoMaceira.row - 1, pRodolfoValentinoMaceira.col]]
]);

graph.addMt(pRodolfoValentinoMaceira.row - 1, pValentina.col - 1, [
    [pRodolfoValentinoMaceira, [pRodolfoValentinoMaceira.row - 1, pRodolfoValentinoMaceira.col]],
    [pValentina, [pValentina.row - 1, pValentina.col]],
    [pValiaMaceira, [pValiaMaceira.row - 1, pValiaMaceira.col]],
    [pRodolfoValentinoMaceira2, [pRodolfoValentinoMaceira2.row - 1, pRodolfoValentinoMaceira2.col]]
]);

graph.addMt(pBertaMaceiraBenitez.row - 1, pNonameVicente.col - 1,  [
    [pBertaMaceiraBenitez, [pBertaMaceiraBenitez.row - 1, pBertaMaceiraBenitez.col]],
    [pNonameVicente, [pNonameVicente.row - 1, pNonameVicente.col]],
    [pRaulVicenteMaceira, [pRaulVicenteMaceira.row - 1, pRaulVicenteMaceira.col]]
]);

graph.addMt(pBertaMaceiraBenitez.row - 1, pNonameUSA.col - 1, [
    [pBertaMaceiraBenitez, [pBertaMaceiraBenitez.row - 1, pBertaMaceiraBenitez.col]],
    [pNonameUSA, [pNonameUSA.row - 1, pNonameUSA.col]]
]);

graph.addMt(pGloriaMaceiraBenitez.row - 1, pMoisesCalzadaBenitez.col - 1, [
    [pGloriaMaceiraBenitez, [pGloriaMaceiraBenitez.row - 1, pGloriaMaceiraBenitez.col]],
    [pMoisesCalzadaBenitez, [pMoisesCalzadaBenitez.row - 1, pMoisesCalzadaBenitez.col]],
    [pMoisesMarioCalzadaMaceira, [pMoisesMarioCalzadaMaceira.row - 1, pMoisesMarioCalzadaMaceira.col]]
]);

graph.addMt(pSaraMaceiraBenitez.row - 1, pRaulVilaCarratala.col - 1, [
    [pSaraMaceiraBenitez, [pSaraMaceiraBenitez.row - 1, pSaraMaceiraBenitez.col]],
    [pRaulVilaCarratala, [pRaulVilaCarratala.row - 1, pRaulVilaCarratala.col]]
]);



graph.addMt(pEloyMaceiraBenitez.row - 1, pCarmen.col - 1, [
    [pEloyMaceiraBenitez, [pEloyMaceiraBenitez.row - 1, pEloyMaceiraBenitez.col]],
    [pCarmen, [pCarmen.row - 1, pCarmen.col]],
    [pEloyMaceira, [pEloyMaceira.row - 1, pEloyMaceira.col]],
    [pNoNameMaceira, [pNoNameMaceira.row - 1, pNoNameMaceira.col]]
]); 

graph.addMt(pEloyMaceiraBenitez.row - 1, pIrela.col - 1, [
    [pEloyMaceiraBenitez, [pEloyMaceiraBenitez.row - 1, pEloyMaceiraBenitez.col]],
    [pIrela, [pIrela.row - 1, pIrela.col]],
    [pErnestoMaceira, [pErnestoMaceira.row - 1, pErnestoMaceira.col]],
    [pTaniaMaceira, [pTaniaMaceira.row - 1, pTaniaMaceira.col]]
]); 

graph.addMt(pTaniaSoriaMaceira.row - 1, pJuanGualbertoCoronaPerez.col - 1, [
    [pTaniaSoriaMaceira, [pTaniaSoriaMaceira.row - 1, pTaniaSoriaMaceira.col]],
    [pJuanGualbertoCoronaPerez, [pJuanGualbertoCoronaPerez.row - 1, pJuanGualbertoCoronaPerez.col]],
    [pTaniadelCarmenCoronaSoria, [pTaniadelCarmenCoronaSoria.row - 1, pTaniadelCarmenCoronaSoria.col]]
]);

graph.addMt(pTaniadelCarmenCoronaSoria.row - 1, pAriel.col - 1, [
    [pTaniadelCarmenCoronaSoria, [pTaniadelCarmenCoronaSoria.row - 1, pTaniadelCarmenCoronaSoria.col]],
    [pAriel, [pAriel.row - 1, pAriel.col]],
    [pSaulo, [pSaulo.row - 1, pSaulo.col]],
    [pBerenice, [pBerenice.row - 1, pBerenice.col]],
    [pEleonora, [pEleonora.row - 1, pEleonora.col]]
]);

graph.addMt(pTamaraSoriaMaceira.row - 1, pCharlesFreeman.col - 1, [
    [pTamaraSoriaMaceira, [pTamaraSoriaMaceira.row - 1, pTamaraSoriaMaceira.col]],
    [pCharlesFreeman, [pCharlesFreeman.row - 1, pCharlesFreeman.col]],
    [pCarlosLuisFreemanSoria, [pCarlosLuisFreemanSoria.row - 1, pCarlosLuisFreemanSoria.col]]
]);

graph.addMt(pCarlosLuisFreemanSoria.row - 1, pDalia.col - 1, [
    [pCarlosLuisFreemanSoria, [pCarlosLuisFreemanSoria.row - 1, pCarlosLuisFreemanSoria.col]],
    [pDalia, [pDalia.row - 1, pDalia.col]],
    [pCarlosAlejandroFreeman, [pCarlosAlejandroFreeman.row - 1, pCarlosAlejandroFreeman.col]]
]);

graph.addMt(pCarlosLuisFreemanSoria.row - 1, pAlina.col - 1, [
    [pCarlosLuisFreemanSoria, [pCarlosLuisFreemanSoria.row - 1, pCarlosLuisFreemanSoria.col]],
    [pAlina, [pAlina.row - 1, pAlina.col]],
    [pCarlosFreeman, [pCarlosFreeman.row - 1, pCarlosFreeman.col]]
]);

graph.addMt(pTamaraSoriaMaceira.row - 1, pFelixArañoWanton.col - 1, [
    [pTamaraSoriaMaceira, [pTamaraSoriaMaceira.row - 1, pTamaraSoriaMaceira.col]],
    [pFelixArañoWanton, [pFelixArañoWanton.row - 1, pFelixArañoWanton.col]],
]);


graph.addMt(pLuisMiroclesSoriaRamos.row - 1, pCarmenMaceiraPerez.col - 1, [
    [pLuisMiroclesSoriaRamos, [pLuisMiroclesSoriaRamos.row - 1, pLuisMiroclesSoriaRamos.col]],
    [pCarmenMaceiraPerez, [pCarmenMaceiraPerez.row - 1, pCarmenMaceiraPerez.col]],
    [pTaniaSoriaMaceira, [pTaniaSoriaMaceira.row - 1, pTaniaSoriaMaceira.col]],
    [pTamaraSoriaMaceira, [pTamaraSoriaMaceira.row - 1, pTamaraSoriaMaceira.col]],
    [pJorgeLuisSoriaMaceira, [pJorgeLuisSoriaMaceira.row - 1, pJorgeLuisSoriaMaceira.col]],
]); 

graph.addMt(pTaniaSoriaMaceira.row - 1, pBernardinoPenaHernandez.col - 1, [
    [pTaniaSoriaMaceira, [pTaniaSoriaMaceira.row - 1, pTaniaSoriaMaceira.col]],
    [pBernardinoPenaHernandez, [pBernardinoPenaHernandez.row - 1, pBernardinoPenaHernandez.col]],
    [pMarietaPenaHernandez, [pMarietaPenaHernandez.row - 1, pMarietaPenaHernandez.col]]
]); 

graph.addMt(pTaniaSoriaMaceira.row - 1, pBernardinoPenaHernandez.col - 1, [
    [pTaniaSoriaMaceira, [pTaniaSoriaMaceira.row - 1, pTaniaSoriaMaceira.col]],
    [pBernardinoPenaHernandez, [pBernardinoPenaHernandez.row - 1, pBernardinoPenaHernandez.col]],
    [pMarietaPenaHernandez, [pMarietaPenaHernandez.row - 1, pMarietaPenaHernandez.col]]
]); 

graph.addMt(pIlianaMaceira.row - 1, pNonameManzano.col - 1, [
    [pIlianaMaceira, [pIlianaMaceira.row - 1, pIlianaMaceira.col]],
    [pNonameManzano, [pNonameManzano.row - 1, pNonameManzano.col]],
    [pIlianaManzano, [pIlianaManzano.row - 1, pIlianaManzano.col]],
    [pErnestoManzano, [pErnestoManzano.row - 1, pErnestoManzano.col]]
]); 

graph.addMt(pIsabelMaceira.row - 1, pNonamePanchitoMaceira.col - 1, [
    [pIsabelMaceira, [pIsabelMaceira.row - 1, pIsabelMaceira.col]],
    [pNonamePanchitoMaceira, [pNonamePanchitoMaceira.row - 1, pNonamePanchitoMaceira.col]],
    [pSamiraYamirkaMaceira, [pSamiraYamirkaMaceira.row - 1, pSamiraYamirkaMaceira.col]],
    [pNadiaMaceira, [pNadiaMaceira.row - 1, pNadiaMaceira.col]]
]); 

graph.addMt(pReyterSoria.row - 1, pNonameReyterSpouse.col - 1, [
    [pReyterSoria, [pReyterSoria.row - 1, pReyterSoria.col]],
    [pNonameReyterSpouse, [pNonameReyterSpouse.row - 1, pNonameReyterSpouse.col]],
    [pReyterReyticoSoria, [pReyterReyticoSoria.row - 1, pReyterReyticoSoria.col]],
    [pRobinSoria, [pRobinSoria.row - 1, pRobinSoria.col]]
]); 

graph.addMt(pReyterSoria.row - 1, pYolandaPineiro.col - 1, [
    [pReyterSoria, [pReyterSoria.row - 1, pReyterSoria.col]],
    [pYolandaPineiro, [pYolandaPineiro.row - 1, pYolandaPineiro.col]],
    [pRoldanSoriaPineiro, [pRoldanSoriaPineiro.row - 1, pRoldanSoriaPineiro.col]],
    [pReynierSoriaPineiro, [pReynierSoriaPineiro.row - 1, pReynierSoriaPineiro.col]]
]); 

graph.addMt(pRolandoSoriaRamos.row - 1, pFernanda.col - 1, [
    [pRolandoSoriaRamos, [pRolandoSoriaRamos.row - 1, pRolandoSoriaRamos.col]],
    [pFernanda, [pFernanda.row - 1, pFernanda.col]],
    [pReyterSoria, [pReyterSoria.row - 1, pReyterSoria.col]],
    [pTeresaSoria, [pTeresaSoria.row - 1, pTeresaSoria.col]]
]); 

graph.addMt(pMarietaPenaHernandez.row - 1, pFernanda.col - 1, [
    [pMarietaPenaHernandez, [pMarietaPenaHernandez.row - 1, pMarietaPenaHernandez.col]],
    [pNonameVidal, [pNonameVidal.row - 1, pNonameVidal.col]],
    [pDianetVidalPena, [pDianetVidalPena.row - 1, pDianetVidalPena.col]]
]); 

graph.addMt(pJorgeLuisSoriaRamirez.row - 1, pYordankaTitoMoreira.col - 1, [
    [pJorgeLuisSoriaRamirez, [pJorgeLuisSoriaRamirez.row - 1, pJorgeLuisSoriaRamirez.col]],
    [pYordankaTitoMoreira, [pYordankaTitoMoreira.row - 1, pYordankaTitoMoreira.col]]
]); 

graph.addMt(pJorgeLuisSoriaRamirez.row - 1, pAnnelisPerezLegon.col - 1, [
    [pJorgeLuisSoriaRamirez, [pJorgeLuisSoriaRamirez.row - 1, pJorgeLuisSoriaRamirez.col]],
    [pYordankaTitoMoreira, [pYordankaTitoMoreira.row - 1, pYordankaTitoMoreira.col]]
]); 

graph.addMt(pJorgeLuisSoriaRamirez.row - 1, pAnnelisPerezLegon.col - 1, [
    [pJorgeLuisSoriaRamirez, [pJorgeLuisSoriaRamirez.row - 1, pJorgeLuisSoriaRamirez.col]],
    [pAnnelisPerezLegon, [pAnnelisPerezLegon.row - 1, pAnnelisPerezLegon.col]],
    [pCarmenHelenestherSoriaPerez, [pCarmenHelenestherSoriaPerez.row - 1, pCarmenHelenestherSoriaPerez.col]],
    [pJorgeLuisSoriaPerez, [pJorgeLuisSoriaPerez.row - 1, pJorgeLuisSoriaPerez.col]]
]); 

graph.addMt(pArietaSoriaFernandez.row - 1, pAntonio.col - 1, [
    [pArietaSoriaFernandez, [pArietaSoriaFernandez.row - 1, pArietaSoriaFernandez.col]],
    [pAntonio, [pAntonio.row - 1, pAntonio.col]],
    [pDavidJeremiasNoNameSoria, [pDavidJeremiasNoNameSoria.row - 1, pDavidJeremiasNoNameSoria.col]],
    [pDanieldeJesusNonameSoria, [pDanieldeJesusNonameSoria.row - 1, pDanieldeJesusNonameSoria.col]],
    [pJosueNonameSoria, [pJosueNonameSoria.row - 1, pJosueNonameSoria.col]]
]); 

graph.addMt(pIlianaVazquezQuevedo.row - 1, pNonameToranzo.col - 1,  [
    [pIlianaVazquezQuevedo, [pIlianaVazquezQuevedo.row - 1, pIlianaVazquezQuevedo.col]],
    [pNonameToranzo, [pNonameToranzo.row - 1, pNonameToranzo.col]],
    [pValkisToranzoVazquez, [pValkisToranzoVazquez.row - 1, pValkisToranzoVazquez.col]],
    [pBelkisToranzoVazquez, [pBelkisToranzoVazquez.row - 1, pBelkisToranzoVazquez.col]]
]); 

graph.addMt(pBertaQuevedoSoria.row - 1, pNonameDominguez.col - 1, [
    [pBertaQuevedoSoria, [pBertaQuevedoSoria.row - 1, pBertaQuevedoSoria.col]],
    [pNonameDominguez, [pNonameDominguez.row - 1, pNonameDominguez.col]],
    [pRafaelDominguezQuevedo, [pRafaelDominguezQuevedo.row - 1, pRafaelDominguezQuevedo.col]],
    [pEnrique, [pEnrique.row - 1, pEnrique.col]]
]);

graph.addMt(pBelkisQuevedoSoria.row - 1, pNonameVazquez.col - 1, [
    [pBelkisQuevedoSoria, [pBelkisQuevedoSoria.row - 1, pBelkisQuevedoSoria.col]],
    [pNonameVazquez, [pNonameVazquez.row - 1, pNonameVazquez.col]],
    [pGabrielVazquezQuevedo, [pGabrielVazquezQuevedo.row - 1, pGabrielVazquezQuevedo.col]],
    [pIlianaVazquezQuevedo, [pIlianaVazquezQuevedo.row - 1, pIlianaVazquezQuevedo.col]],
    [pAlexanderVazquezQuevedo, [pAlexanderVazquezQuevedo.row - 1, pAlexanderVazquezQuevedo.col]]
]);

graph.addMt(pHeribertoQuevedoSoria.row - 1, pClaribel.col - 1, [
    [pHeribertoQuevedoSoria, [pHeribertoQuevedoSoria.row - 1, pHeribertoQuevedoSoria.col]],
    [pClaribel, [pClaribel.row - 1, pClaribel.col]],
    [pNonamePuchuchu, [pNonamePuchuchu.row - 1, pNonamePuchuchu.col]],
    [pJorgeQuevedo, [pJorgeQuevedo.row - 1, pJorgeQuevedo.col]],
    [pVivianQuevedo, [pVivianQuevedo.row - 1, pVivianQuevedo.col]]
]);

graph.addMt(pRafaelSoria.row - 1, pNonameAguilera.col - 1, [
    [pRafaelSoria, [pRafaelSoria.row - 1, pRafaelSoria.col]],
    [pNonameAguilera, [pNonameAguilera.row - 1, pNonameAguilera.col]],
    [pJorgeLuisSoriaAguilera, [pJorgeLuisSoriaAguilera.row - 1, pJorgeLuisSoriaAguilera.col]]
]);


graph.addMt(pCaridadQuevedoSoria.row - 1, pWilliamCambara.col - 1, [
    [pCaridadQuevedoSoria, [pCaridadQuevedoSoria.row - 1, pCaridadQuevedoSoria.col]],
    [pWilliamCambara, [pWilliamCambara.row - 1, pWilliamCambara.col]],
    [pWilliamCambaraQuevedo, [pWilliamCambaraQuevedo.row - 1, pWilliamCambaraQuevedo.col]],
    [pAlexander, [pAlexander.row - 1, pAlexander.col]],
    [pJorgeLuis, [pJorgeLuis.row - 1, pJorgeLuis.col]],
    [pOniel, [pOniel.row - 1, pOniel.col]],
    [pAlina, [pAlina.row - 1, pAlina.col]]
]);

graph.addMt(pMiguelSoria.row, pJustina.col - 1, [
    [pMiguelSoria, [pMiguelSoria.row, pMiguelSoria.col]],
    [pJustina, [pJustina.row - 1, pJustina.col]],
    [pLuisSoria, [pLuisSoria.row - 1, pLuisSoria.col]],
    [pRafaelSoria, [pRafaelSoria.row - 1, pRafaelSoria.col]],
    [pRobertoSoria, [pRobertoSoria.row - 1, pRobertoSoria.col]],
    [pLourdesSoria, [pLourdesSoria.row - 1, pLourdesSoria.col]]
]);

graph.addMt(pMiguelSoria.row - 1, pIluminadaRamos.col - 1, [
    [pMiguelSoria, [pMiguelSoria.row - 1, pMiguelSoria.col]],
    [pIluminadaRamos, [pIluminadaRamos.row - 1, pIluminadaRamos.col]],
    [pLuisMiroclesSoriaRamos, [pLuisMiroclesSoriaRamos.row - 1, pLuisMiroclesSoriaRamos.col]],
    [pZenaidaSoriaRamos, [pZenaidaSoriaRamos.row - 1, pZenaidaSoriaRamos.col]],
    [pEstrellaSoriaRamos, [pEstrellaSoriaRamos.row - 1, pEstrellaSoriaRamos.col]],
    [pRolandoSoriaRamos, [pRolandoSoriaRamos.row - 1, pRolandoSoriaRamos.col]]
]);

graph.addMt(pEstrellaSoriaRamos.row - 1, pHeribertoQuevedo.col - 1, [
    [pEstrellaSoriaRamos, [pEstrellaSoriaRamos.row - 1, pEstrellaSoriaRamos.col]],
    [pHeribertoQuevedo, [pHeribertoQuevedo.row - 1, pHeribertoQuevedo.col]],
    [pCaridadQuevedoSoria, [pCaridadQuevedoSoria.row - 1, pCaridadQuevedoSoria.col]],
    [pSoniaQuevedoSoria, [pSoniaQuevedoSoria.row - 1, pSoniaQuevedoSoria.col]],
    [pBelkisQuevedoSoria, [pBelkisQuevedoSoria.row - 1, pBelkisQuevedoSoria.col]],
    [pBertaQuevedoSoria, [pBertaQuevedoSoria.row - 1, pBertaQuevedoSoria.col]],
    [pHeribertoQuevedoSoria, [pHeribertoQuevedoSoria.row - 1, pHeribertoQuevedoSoria.col]]
]);

graph.addMt(pRafaelPerezLegon.row - 1, pDayesiRizoCala.col - 1, [
    [pRafaelPerezLegon, [pRafaelPerezLegon.row - 1, pRafaelPerezLegon.col]],
    [pDayesiRizoCala, [pDayesiRizoCala.row - 1, pDayesiRizoCala.col]],
    [pSelenePerezRizo, [pSelenePerezRizo.row - 1, pSelenePerezRizo.col]]
]);

graph.addMt(pMercedesdelaCandelariaLegonRodriguez.row - 1, pRafaelPerezSantana.col - 1, [
    [pMercedesdelaCandelariaLegonRodriguez, [pMercedesdelaCandelariaLegonRodriguez.row - 1, pMercedesdelaCandelariaLegonRodriguez.col]],
    [pRafaelPerezSantana, [pRafaelPerezSantana.row - 1, pRafaelPerezSantana.col]],
    [pRafaelPerezLegon, [pRafaelPerezLegon.row - 1, pRafaelPerezLegon.col]]
]);

graph.addMt(pWilfredoLegonWaldarrama.row - 1, pEstherRodriguezHurtado.col - 1, [
    [pWilfredoLegonWaldarrama, [pWilfredoLegonWaldarrama.row - 1, pWilfredoLegonWaldarrama.col]],
    [pEstherRodriguezHurtado, [pEstherRodriguezHurtado.row - 1, pEstherRodriguezHurtado.col]],
    [pMercedesdelaCandelariaLegonRodriguez, [pMercedesdelaCandelariaLegonRodriguez.row - 1, pMercedesdelaCandelariaLegonRodriguez.col]]
]);


graph.addMt(pMercedesdelaCandelariaLegonRodriguez.row - 1, pJorgePerez.col - 1, [
    [pMercedesdelaCandelariaLegonRodriguez, [pMercedesdelaCandelariaLegonRodriguez.row - 1, pMercedesdelaCandelariaLegonRodriguez.col]],
    [pJorgePerez, [pJorgePerez.row - 1, pJorgePerez.col]],
    [pAnnelisPerezLegon, [pAnnelisPerezLegon.row - 1, pAnnelisPerezLegon.col]]
]);

graph.addMt(pUrsulaBenitezPerez.row - 1, pJoseMaceira.col - 1, [
    [pUrsulaBenitezPerez, [pUrsulaBenitezPerez.row - 1, pUrsulaBenitezPerez.col]],
    [pJoseMaceira, [pJoseMaceira.row - 1, pJoseMaceira.col]],
    [pCarmenMaceiraPerez, [pCarmenMaceiraPerez.row - 1, pCarmenMaceiraPerez.col]],
    [pSaraMaceiraBenitez, [pSaraMaceiraBenitez.row - 1, pSaraMaceiraBenitez.col]],
    [pJoseMaceiraBenitez, [pJoseMaceiraBenitez.row - 1, pJoseMaceiraBenitez.col]],
    [pBertaMaceiraBenitez, [pBertaMaceiraBenitez.row - 1, pBertaMaceiraBenitez.col]],
    [pLuisaMaceiraBenitez, [pLuisaMaceiraBenitez.row - 1, pLuisaMaceiraBenitez.col]],
    [pGloriaMaceiraBenitez, [pGloriaMaceiraBenitez.row - 1, pGloriaMaceiraBenitez.col]],
    [pEloyMaceiraBenitez, [pEloyMaceiraBenitez.row - 1, pEloyMaceiraBenitez.col]]
]); 

//graph.more(12,35,mtElsaDiazMatosHeysel);
//graph.more(rlAntoniodeMarcosRamirezMatosMujerNegra);
//graph.more(pCarlosFreeman);
//graph.more(pRobertoSoria);
//graph.more(pLourdesSoria);
//graph.more(pTeresaSoria);
//graph.more(mtRamonMaceiraBenitezNoname);

//---------------------------------------------------------
//END DRAWING
//---------------------------------------------------------

graph.init();