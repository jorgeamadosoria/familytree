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

var pBlancaDeLaPurificacionRamirezMatos = {
    name: 'Blanca',
    gender: WOMAN,
    birth: '2 mayo 1950',
    comments: 'Blanca de la purificacion ramirez matos',
    treeRef: 'bprm'
};

var pJorgeLuisSoriaMaceira = {
    name: 'Jorge Luis',
    gender: MAN,
    birth: '20 junio 1953',
    comments: 'Jorge Luis Soria Maceira (fecha equivocada de carnet de identidad 19 enero 1954)',
    profile:"https://i.ibb.co/8jM23cc/jorgeluissoriamaceira-profile.png",
    photos:["https://i.ibb.co/R4DS2Wc/adby8.jpg"]
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
    profile: "https://i.ibb.co/9hTXVm5/tania-soria-profile.png"
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
    profile: "https://i.ibb.co/D9yCqpY/marieta-profile.png",
    photos: ["https://i.ibb.co/6RryHNh/IMAG0050.jpg"]
};
var pNonameVidal = {
    gender: MAN,


    comments: '? Vidal'
};
var pDianetVidalPena = {
    name: 'Dianet',

    gender: WOMAN,


    comments: 'Dianet Vidal Peña'
};
var pJuanGualbertoCoronaPerez = {
    name: 'Juan Gualberto',

    gender: MAN,


    comments: 'Juan Gualberto Corona Perez'
};
var pTaniadelCarmenCoronaSoria = {
    name: 'Tania del Carmen',
    nickname: 'Tanin',
    gender: WOMAN,


    comments: 'Tania del Carmen "Tanin" Corona Soria'
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


    comments: 'Saulo'
};
var pBerenice = {
    name: 'Berenice',

    gender: WOMAN,


    comments: 'Berenice'
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


    comments: 'Tamara Soria Maceira',
    photos: ['https://i.ibb.co/kxqbq91/IMAG0059.jpg']
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
var pJorgeAmadoSoriaRamirez = {
    name: 'Jorge Amado',
    nickname: 'Amado, Gordo',
    gender: MAN,
    birth: '14 dec 1984',

    comments: 'Creador de esta aplicación'
};

var pAmalSaifFonte = {
    name: 'Amal',

    gender: WOMAN,
    birth: '9 ago 1990',

    comments: 'Amal Saif Fonte',
    treeRef:'asf'
};
var pArietaSoriaFernandez = {
    name: 'Arieta',
    gender: WOMAN,
    birth: '9 nov 1983',
    comments: 'Arieta Soria Fernandez'
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
    profile: 'https://i.ibb.co/jV7qL16/ismael.png',
    photos: ['https://i.ibb.co/4J34sk0/ismael.jpg']
};
var pAbrahamAhmedSoria = {
    name: 'Abraham Ahmed',

    gender: MAN,
    birth: 'nov 2011',

    comments: 'Abraham Ahmed Soria',
    profile: 'https://i.ibb.co/yWP3vp7/abraham.png',
    photos: ['https://i.ibb.co/gMjbBJ5/abraham.jpg']
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

    comments: 'Raylenis Soria'
};
var pZenaidaSoriaRamos = {
    name: 'Zenaida',

    gender: WOMAN,


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
var pAlinaNoName = {
    name: 'Alina',

    gender: WOMAN,


    comments: 'Alina'
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
    gender: MAN,


    comments: '? Vazquez ?'
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


    comments: 'Valkis Toranzo Vazquez'
};
var pBelkisToranzoVazquez = {
    name: 'Belkis',

    gender: WOMAN,


    comments: 'Belkis Toranzo Vazquez'
};
var pBertaQuevedoSoria = {
    name: 'Berta',
    gender: WOMAN,


    comments: 'Berta Quevedo Soria (peluquera de Tele Rebelde en Santiago)',
    profile: defaultProfile
};
var pNonameDominguez = {
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
var pEnrique = {
    name: 'Enrique',

    gender: MAN,


    comments: 'Enrique',
    profile: defaultProfile
};
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


    comments: 'Claribel (nacida en manzanillo) ?'
};
var pNonamePuchuchu = {
    name: 'Puchuchú',
    nickname: 'Puchuchú',
    gender: MAN,


    comments: '? "Puchuchú" ?'
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
    gender: MAN
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
var pJustina = {
    name: 'Justina',
    gender: WOMAN,
    comments: 'Justina comenzó su relación con Miguel a los 14 años, cosa por demas normal para la epoca.'
};
var pLuisSoria = {
    name: 'Luis',
    gender: MAN,
    comments: 'Luis Soria',
    profile: "https://i.ibb.co/F36T9VX/Luis-Soria-profile.png"
};
var pRafaelSoria = {
    name: 'Rafael',

    gender: MAN,


    comments: 'Rafael Soria (murio de peritonitis en el hospital)'
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
var pLourdesSoria = {
    name: 'Lourdes',

    gender: WOMAN,


    comments: 'Lourdes Soria'
};
var pUrsulaBenitezPerez = {
    name: 'Ursula',
    gender: WOMAN,
    comments: 'Ursula Benitez Perez',
    profile:'https://i.ibb.co/JCrsFWT/ursula-benitez-profile.png',
    photos: ['https://i.ibb.co/Ny2vdZC/ursula-benitez.jpg']
};
var pJoseMaceira = {
    name: 'Jose',
    gender: MAN,
    comments: 'Jose Maceira (tuvo mas de 36 hijos por la zona de Santiago y el Cristo, algunos conocidos y otros no. En la zona agricultural conocida como los llanos de Maceira)'
};
var pCarmenMaceiraPerez = {
    name: 'Carmen',
    gender: WOMAN,
    birth: '28 nov 1924',
    death: '6 ago 2014',
    comments: 'Carmen Maceira Perez (inscrita por error como Perez, pero al final se enorgullecia de eso)',
    profile: "https://i.ibb.co/X8GfxTZ/carmen-profile.png"
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
    name: 'Isabel',
    nickname: 'Isabelita',
    gender: WOMAN,


    comments: 'Isabel "Isabelita" Maceira',
    profile: defaultProfile
};

var pDameyis = {
    name: 'Dameyis',
    gender: WOMAN
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
    gender: WOMAN
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

var pJorgeAlanSoriaFonte = {
    name: 'Jorge Alan',
    nickname: null,
    gender: MAN,
    birth: '19 abr 2020',
    death: null,
    comments: 'nacido en Mérida, Yucatán'
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
i = 2;

x = 3;
x -= i;
x = graph.addPeople(FIRST_GEN_ROW, x += i * 5.5,
    pJoseMaceira, pUrsulaBenitezPerez);
x = graph.addPeople(FIRST_GEN_ROW, x += i * 42,
    pMiguelSoria, pIluminadaRamos);
x = graph.addPeople(FIRST_GEN_ROW, x += i * 8.5,
    pJustina
);

x = 2;
x -= i;
x = graph.addPeople(SECOND_GEN_ROW, x += i,
    pMarioMaceira, pSaraMaceiraBenitez, pRaulVilaCarratala,
    pJoseMaceiraBenitez, pNorma,
    pBertaMaceiraBenitez, pNonameVicente,
    pNonameUSA,
    pGloriaMaceiraBenitez, pMoisesCalzadaBenitez,
    pLuisaMaceiraBenitez,
    pEloyMaceiraBenitez,
    pCarmen);
x = graph.addPeople(SECOND_GEN_ROW, x += i,
    pIrela,
    pRamonMaceiraBenitez, pConcepcion);
x = graph.addPeople(SECOND_GEN_ROW, x += i * 2,
    pNonamePucha
);
x = graph.addPeople(SECOND_GEN_ROW, x += i * 9,
    pCarmenMaceiraPerez, pLuisMiroclesSoriaRamos);
x = graph.addPeople(SECOND_GEN_ROW, x += i * 13.5,
    pEstrellaSoriaRamos, pHeribertoQuevedo);
x = graph.addPeople(SECOND_GEN_ROW, x += i * 6.5,
    pRolandoSoriaRamos, pFernanda,
    pZenaidaSoriaRamos);
    x = graph.addPeople(SECOND_GEN_ROW, x += i*1.5,
    pLuisSoria,
    pRafaelSoria, 
    pRobertoSoria, pLourdesSoria





);

x = 2;
x -= i;
x = graph.addPeople(THIRD_GEN_ROW, x += i,
    pIlianaMaceira, pNonameManzano);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 1.5,
    pRodolfoValentinoMaceira, pValentina,
    pRaulVicenteMaceira);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 2,
    pMoisesMarioCalzadaMaceira);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 1.5,
    pEloyMaceira, pNoNameMaceira,
    pErnestoMaceira, pTaniaMaceira,
    pIsabelMaceira, pNonamePanchitoMaceira, pDameyis,
    pJorgeMaceira, pGustavoMaceira);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 7,
    pJorgeLuisSoriaMaceira, pBlancaDeLaPurificacionRamirezMatos);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 1.5,
    pTaniaSoriaMaceira, pBernardinoPenaHernandez);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 1,
    pJuanGualbertoCoronaPerez,
    pTamaraSoriaMaceira, pCharlesFreeman,
    pFelixArañoWanton);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 1.5,
    pBelkisQuevedoSoria, pNonameVazquez);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 3,
    pCaridadQuevedoSoria, pWilliamCambara,
    pSoniaQuevedoSoria);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 0.5,
    pBertaQuevedoSoria,
    pNonameDominguez);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 0.5,
    pHeribertoQuevedoSoria,
    pClaribel);
x = graph.addPeople(THIRD_GEN_ROW, x += i * 0.5,
    pReyterSoria,
    pNonameReyterSpouse);
x = graph.addPeople(THIRD_GEN_ROW, x += i,
    pYolandaPineiro,
    pTeresaSoria);


x = graph.addPeople(THIRD_GEN_ROW, x += i,

    pJorgeLuisSoriaAguilera

);

x = 2;
x -= i;
x = graph.addPeople(FOURTH_GEN_ROW, x += i,
    pIlianaManzano, pErnestoManzano);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 1.5,
    pValiaMaceira,
    pRodolfoValentinoMaceira2);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 10.5,
    pSamiraYamirkaMaceira, pNadiaMaceira);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 3,

    pArietaSoriaFernandez);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 1.5, pAdrianSoriaCanela);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 0.5,
    pJorgeMiguelSoriaCasero,
    pJorgeLuisSoriaRamirez, pYordankaTitoMoreira, pAnnelisPerezLegon,
    pJorgeAmadoSoriaRamirez, pAmalSaifFonte,

    pMarietaPenaHernandez,
    pNonameVidal, pTaniadelCarmenCoronaSoria, pAriel,
    pCarlosLuisFreemanSoria, pDalia);
x = graph.addPeople(FOURTH_GEN_ROW, x += i * 0.5,
    pAlina,
    pGabrielVazquezQuevedo, pAlexanderVazquezQuevedo,
    pIlianaVazquezQuevedo, pNonameToranzo,
    pWilliamCambaraQuevedo, pAlexander,
    pJorgeLuis, pOniel, pAlinaNoName,
    pRafaelDominguezQuevedo, pEnrique,



    pNonamePuchuchu, pJorgeQuevedo, pVivianQuevedo,


    pReyterReyticoSoria, pRobinSoria, pRoldanSoriaPineiro,
    pReynierSoriaPineiro
);

x = 42;
x -= i;
x = graph.addPeople(FIFTH_GEN_ROW, x += i,
    pDavidJeremiasRodriguezSoria, pDanieldeJesusRodriguezSoria, pJosueRodriguezSoria,
    pIsmaelAdrianSoria, pAbrahamAhmedSoria,
    pRaylenisSoria);
x = graph.addPeople(FIFTH_GEN_ROW, x += i,
    pCarmenHelenestherSoriaPerez, pJorgeLuisSoriaPerez);
    x = graph.addPeople(FIFTH_GEN_ROW, x += i*0.5,
    pJorgeAlanSoriaFonte);
x = graph.addPeople(FIFTH_GEN_ROW, x += i,
    pDianetVidalPena, pSaulo,
    pBerenice, pEleonora,
    pCarlosFreeman,
    pCarlosAlejandroFreeman,
    pJorgeCarlos);
x = graph.addPeople(FIFTH_GEN_ROW, x += i * 2,
    pValkisToranzoVazquez, pBelkisToranzoVazquez
);

//RELATIONSHIP DATA
/*
var relationship = {
    date : date, //null. The date in which the relationship was formalized
    type: string //type of relationship, one of MARRIAGE, RELATIONSHIP
}
 */
//relationship nodes
//offsetCol from node origin, offSetRow from node origin, node origin, nodes destination
graph.rels(10, 2, pJoseMaceira, pMarioMaceira);
graph.rels(0, 2, pMarioMaceira, pIlianaMaceira);
graph.rels(0, 2, pJorgeMiguelSoriaCasero, pRaylenisSoria);
graph.rels(0, 2, pAlina, pJorgeCarlos);
graph.rels(0, 2, pAdrianSoriaCanela, pIsmaelAdrianSoria, pAbrahamAhmedSoria);
graph.rels(0, 2, pArietaSoriaFernandez, pDavidJeremiasRodriguezSoria, pDanieldeJesusRodriguezSoria, pJosueRodriguezSoria);
graph.rels(7, 2, pJorgeLuisSoriaMaceira, pJorgeMiguelSoriaCasero, pAdrianSoriaCanela, pArietaSoriaFernandez);
graph.rels(0, 2, pRafaelSoria, pJorgeLuisSoriaAguilera);

graph.addRel(defMtNode, 1, pJoseMaceira, pUrsulaBenitezPerez, pCarmenMaceiraPerez, pSaraMaceiraBenitez, pJoseMaceiraBenitez, pBertaMaceiraBenitez, pLuisaMaceiraBenitez, pGloriaMaceiraBenitez, pEloyMaceiraBenitez, 
    pRamonMaceiraBenitez);
graph.addRel(defMtNode, 1, pMiguelSoria, pIluminadaRamos, pLuisMiroclesSoriaRamos, pZenaidaSoriaRamos, pEstrellaSoriaRamos, pRolandoSoriaRamos);
graph.addRel(defRelNode, 0.75, pMiguelSoria, pJustina, pLuisSoria, pRafaelSoria, pRobertoSoria, pLourdesSoria);
graph.addRel(defMtNode, 1, pSaraMaceiraBenitez, pRaulVilaCarratala);
graph.addRel(defMtNode, 1, pJorgeLuisSoriaMaceira, pBlancaDeLaPurificacionRamirezMatos, pJorgeAmadoSoriaRamirez, pJorgeLuisSoriaRamirez);
graph.addRel(defMtNode, 1, pRamonMaceiraBenitez, pConcepcion, pIsabelMaceira, pNonamePanchitoMaceira);
graph.addRel(defMtNode, 0.75, pRamonMaceiraBenitez, pNonamePucha, pJorgeMaceira, pGustavoMaceira);
graph.addRel(defMtNode, 1, pJoseMaceiraBenitez, pNorma, pRodolfoValentinoMaceira);
graph.addRel(defMtNode, 1, pRodolfoValentinoMaceira, pValentina, pValiaMaceira, pRodolfoValentinoMaceira2);
graph.addRel(defMtNode, 1, pBertaMaceiraBenitez, pNonameVicente, pRaulVicenteMaceira);
graph.addRel(defMtNode, 0.75, pBertaMaceiraBenitez, pNonameUSA);
graph.addRel(defMtNode, 1, pGloriaMaceiraBenitez, pMoisesCalzadaBenitez, pMoisesMarioCalzadaMaceira);
graph.addRel(defMtNode, 1, pEloyMaceiraBenitez, pCarmen, pEloyMaceira, pNoNameMaceira);
graph.addRel(defMtNode, 0.75, pEloyMaceiraBenitez, pIrela, pErnestoMaceira, pTaniaMaceira);
graph.addRel(defMtNode, 1, pTaniaSoriaMaceira, pBernardinoPenaHernandez, pMarietaPenaHernandez);
graph.addRel(defMtNode, 0.75, pTaniaSoriaMaceira, pJuanGualbertoCoronaPerez, pTaniadelCarmenCoronaSoria);
graph.addRel(defMtNode, 1, pTaniadelCarmenCoronaSoria, pAriel, pSaulo, pBerenice, pEleonora);
graph.addRel(defMtNode, 1, pTamaraSoriaMaceira, pCharlesFreeman, pCarlosLuisFreemanSoria);
graph.addRel(defMtNode, 0.75, pTamaraSoriaMaceira, pFelixArañoWanton);
graph.addRel(defMtNode, 1, pCarlosLuisFreemanSoria, pDalia, pCarlosFreeman);
graph.addCustom(defMtNode, 0.75, 2, pCarlosLuisFreemanSoria, pAlina, pCarlosAlejandroFreeman);
graph.addRel(defMtNode, 1, pCarmenMaceiraPerez, pLuisMiroclesSoriaRamos, pTaniaSoriaMaceira, pTamaraSoriaMaceira, pJorgeLuisSoriaMaceira);
graph.addRel(defMtNode, 1, pIlianaMaceira, pNonameManzano, pIlianaManzano, pErnestoManzano);
graph.addRel(defMtNode, 1, pNonamePanchitoMaceira, pDameyis, pSamiraYamirkaMaceira, pNadiaMaceira);
graph.addRel(defMtNode, 1, pReyterSoria, pNonameReyterSpouse, pReyterReyticoSoria, pRobinSoria);
graph.addRel(defMtNode, 0.75, pReyterSoria, pYolandaPineiro, pRoldanSoriaPineiro, pReynierSoriaPineiro);
graph.addRel(defMtNode, 1, pRolandoSoriaRamos, pFernanda, pReyterSoria, pTeresaSoria);
graph.addRel(defMtNode, 1, pMarietaPenaHernandez, pNonameVidal, pDianetVidalPena);
graph.addRel(defMtNode, 1, pJorgeLuisSoriaRamirez, pYordankaTitoMoreira);
graph.addRel(defMtNode, 0.75, pJorgeLuisSoriaRamirez, pAnnelisPerezLegon, pCarmenHelenestherSoriaPerez, pJorgeLuisSoriaPerez);
graph.addRel(defMtNode, 1, pJorgeAmadoSoriaRamirez, pAmalSaifFonte,pJorgeAlanSoriaFonte);
graph.addRel(defMtNode, 1, pIlianaVazquezQuevedo, pNonameToranzo, pValkisToranzoVazquez, pBelkisToranzoVazquez);
graph.addRel(defMtNode, 1, pBertaQuevedoSoria, pNonameDominguez, pRafaelDominguezQuevedo, pEnrique);
graph.addRel(defMtNode, 1, pBelkisQuevedoSoria, pNonameVazquez, pGabrielVazquezQuevedo, pIlianaVazquezQuevedo, pAlexanderVazquezQuevedo);
graph.addRel(defMtNode, 1, pHeribertoQuevedoSoria, pClaribel, pNonamePuchuchu, pJorgeQuevedo, pVivianQuevedo);

graph.addRel(defMtNode, 1, pCaridadQuevedoSoria, pWilliamCambara, pWilliamCambaraQuevedo, pAlexander, pJorgeLuis, pOniel, pAlinaNoName);
graph.addRel(defMtNode, 1, pEstrellaSoriaRamos, pHeribertoQuevedo, pCaridadQuevedoSoria, pSoniaQuevedoSoria, pBelkisQuevedoSoria, pBertaQuevedoSoria, pHeribertoQuevedoSoria);



graph.stdMore(pCarlosFreeman);
graph.stdMore(pRobertoSoria);
graph.stdMore(pLourdesSoria);
graph.stdMore(pTeresaSoria);
graph.stdMore(pRaulVicenteMaceira);


//---------------------------------------------------------
//END DRAWING
//---------------------------------------------------------

graph.init();