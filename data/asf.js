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
var pObdulioHermelo = {
    name: 'Obdulio Hermelo',
    gender: MAN
};
var pVirginiaMoreno = {
    name: 'Virginia Moreno',
    gender: WOMAN,
};


var pSenoviaHermeloMoreno = {
    name: 'Senovia Hermelo Moreno',
    gender: WOMAN,
    birth: '29/10/1936'
};
var pLuisaNini = {
    name: 'Luisa',
    gender: WOMAN,
    nickname: 'Nini'
};
var pCandida = {
    name: 'Cándida',
    gender: WOMAN,
    nickname: 'Candita'
};
var pMateo = {
    gender: MAN,
    name: 'Mateo'
};
var pEmelina = {
    gender: WOMAN,
    name: 'Emelina'
};
var pRaul = {
    gender: MAN,
    name: 'Raúl',
    nickname: 'Pirre'
};
var pFrancisca = {
    gender: WOMAN,
    name: 'Francisca'
};
var pMarina = {
    gender: WOMAN,
    name: 'Marina'
};
var pMaria = {
    gender: WOMAN,
    name: 'María'
};
var pConcepcion = {
    gender: MAN,
    name: 'Concepción'
};
var pIngracioFonteBano = {
    gender: MAN,
    name: 'Ingracio Fonte Baño',
    birth: '22/7/1933'
}
var pChicho = {
    gender: MAN,
    nickname: 'Chicho'
};
var pFlores = {
    gender: MAN,
    nickname: 'Flores'
};
var pLuisa = {
    gender: WOMAN,
    name: 'Luisa'
};
var pEmilio = {
    gender: MAN,
    name: 'Emilio'
};
var pMariana = {
    gender: WOMAN,
    name: 'Mariana'
};
var pTeodora = {
    gender: WOMAN,
    name: 'Teodora'
};
var pNieve = {
    gender: WOMAN,
    name: 'Nieve'
};
var pAbelardo = {
    gender: MAN,
    name: 'Abelardo'
};
var pGabriel = {
    gender: MAN,
    name: 'Gabriel'
};
var pJuan = {
    gender: MAN,
    name: 'Juan',
    nickname: 'Juanito'
};
var pVictorFonte = {
    gender: MAN,
    name: 'Victor Fonte',
    birth: '25 2 1955'
};
var pLuisaLago = {
    gender: WOMAN,
    name: 'Luisa Lago'
};
var pIdaniaFonte = {
    gender: WOMAN,
    name: 'Idania Fonte',
    nickname: 'Nani',
    birth: '02/02/1978'
};
var pYamisdeyPlata = {
    gender: MAN,
    name: 'Yamisdey Plata'
};
var pBeatrizPlataFonte = {
    gender: WOMAN,
    name: 'Beatriz Plata Fonte',
    birth: '24/02/2007'
};
var pVictorManuelPlataFonte = {
    gender: MAN,
    name: 'Victor Manuel Plata Fonte',
    birth: '22/07/2011'
};
var pMariaDeLosAngelesFonteLago = {
    gender: WOMAN,
    name: 'Maria de los Angeles Fonte Lago',
    nickname: 'China'
};
var pManuelPereda = {
    gender: MAN,
    name: 'Manuel Pereda',
    nickname: 'Rubio'
};
var pMileidysPeredaFonte = {
    gender: WOMAN,
    name: 'Mileidys Pereda Fonte',
    birth: '27/07/2011'
};
var pCheila = {
    gender: WOMAN,
    name: 'Cheila',
    birth: '29/07/2012'
};
var pMirelisPeredaFonte = {
    gender: WOMAN,
    name: 'Mirelis Pereda Fonte',
    birth: '07/07/1998'
};
var pKaterin = {
    gender: WOMAN,
    name: 'Katerin'
};
var pDanielAlejandro = {
    gender: MAN,
    name: 'Daniel Alejandro'
};
var pFelicia = {
    gender: WOMAN,
    name: 'Felicia'
};
var pYakelina = {
    gender: WOMAN,
    name: 'Yakelina'
};
var pMonica = {
    gender: WOMAN,
    name: 'Monica'
};
var pHijoDesconocido = {
    gender: MAN
};
var pEldaGarcia = {
    gender: WOMAN,
    name: 'Elda Garcia'
};
var pYenima = {
    gender: WOMAN,
    name: 'Yenima',
    birth: '07/05/1988'
};
var pYeneri = {
    gender: WOMAN,
    name: 'Yéneri',
    birth: '22/07/2007'
};
var pYaneri = {
    gender: WOMAN,
    name: 'Yaneri'
};
var pYosiel = {
    gender: MAN,
    name: 'Yosiel'
};
var pYaimara = {
    gender: WOMAN,
    name: 'Yaimara',
    birth: '20/05/1991'
};
var pAdriel = {
    gender: MAN,
    name: 'Adriel'
};
var pJonatan = {
    gender: MAN,
    name: 'Jonatan'
};
var pYadiel = {
    gender: MAN,
    name: 'Yadiel'
};
var pIsidroFonte = {
    gender: MAN,
    name: 'Isidro Fonte',
    birth: '15/5/1956'
};
var pDeilyFonte = {
    gender: WOMAN,
    name: 'Deily Fonte',
    birth: '05/07/1980'
};
var pLuisaNoNameFonte = {
    gender: WOMAN,
    name: 'Luisa ? ? Fonte'
};
var pAnthony = {
    gender: MAN,
    name: 'Anthony',
    birth: '18/09/2018'
}
var pAdonisNoNameFonte = {
    gender: MAN,
    name: 'Adonis ? ? Fonte'
};
var pKevinNoNameFonte = {
    gender: MAN,
    name: 'Kevin ? ? Fonte'
};
var pMariaEchevarria = {
    gender: WOMAN,
    name: 'Maria Echevarría'
};
var pMailinFonte = {
    gender: WOMAN,
    name: 'Mailín Fonte',
    birth: '28/02/1988'
};
var pEsposoDesconocido = {
    gender: MAN
};
var pYoerlanFonte = {
    gender: MAN,
    name: 'Yoerlán Fonte'
};
var pOsvaldoOsuna = {
    gender: MAN,
    name: 'Osvaldo Osuna'
};
var pDialeidisOsunaFonte = {
    gender: WOMAN,
    name: 'Dialeidis Osuna Fonte',
    birth: '22 6 2010'
};
var pOsnielGomez = {
    gender: MAN,
    name: 'Osniel Gómez'
};
var pVanesaGomezFonte = {
    gender: WOMAN,
    name: 'Vanesa Gómez Fonte',
    birth: '18 12 2018'
};
var pYoel = {
    gender: MAN,
    name: 'Yoel',
    birth: '8 6 1992'
};
var pYeniferMaria = {
    gender: WOMAN,
    name: 'Yenifer María',
    birth: '11/06/2016'
};
var pIsidoro = {
    gender: MAN,
    name: 'Isidoro',
    birth: '15/5/1956',
    death: '17/2/2018',
    comment: '(Isidro e Isidoro son gemelos)'
};
var pArelis = {
    gender: WOMAN,
    name: 'Arelis'
};
var pYandy = {
    gender: MAN,
    name: 'Yandy',
    comments:'Vive en Estados Unidos, y tiene su propia familia'
};
var pDamian = {
    gender: MAN,
    name: 'Damián'
};
var pDayani = {
    gender: WOMAN,
    name: 'Dayani'
};
var pReinier = {
    gender: MAN,
    name: 'Reinier'
};
var pDiosdadoFonte = {
    gender: MAN,
    name: 'Diosdado Fonte',
    nickname: 'Pelencho',
    birth: '8/6/????'
};
var pGloria = {
    gender: WOMAN,
    name: 'Gloria',
    nickname: 'Glorita'
};
var pOsmanyFonte = {
    gender: MAN,
    name: 'Osmany Fonte',
    nickname: 'El pipo'
};
var pAlexanderFonteHijoOsmany = {
    gender: MAN,
    name: 'Alexander Fonte'
};
var pHijoDesconocidoDeOsmany = {
    gender: MAN
};
var pYosvany = {
    gender: MAN,
    name: 'Yosvany'
};
var pYasmani = {
    gender: MAN,
    name: 'Yasmani'
};
var pMagalysFonteArmelo = {
    gender: WOMAN,
    name: 'Magalys Fonte Armelo',
    birth: '25/6/1966'
};
var pTawfikSaif = {
    gender: MAN,
    name: 'Tawfik Saif'
};
var pAmalSaifFonte = {
    gender: WOMAN,
    name: 'Amal Saif Fonte',
    birth: '09/08/1990'
};

var pJorgeAmadoSoriaRamirez = {
    name: 'Jorge Amado',
    nickname: 'Amado, Gordo',

    gender: MAN,
    birth: '14 dic 1984',

    comments: 'Jorge Amado Soria Ramirez'
};
var pAlexisRodriguez = {

    name: 'Alexis Rodriguez',
    gender: MAN
};
var pAmaliaRodriguezFonte = {
    gender: WOMAN,
    name: 'Amalia Rodriguez Fonte',
    birth: '18/12/1998'
};
var pJoseArmandoGonzalez = {
    gender: MAN,
    name: 'José Armando Gonzalez',
};
var pNikolGonzalezRodriguez = {
    gender: WOMAN,
    name: 'Nikol González Rodríguez'
};
var pLazaroMateoTorresDiaz = {
    gender: MAN,
    name: 'Lázaro Mateo Torres Díaz',
    birth: '?/2/1966'
};
var pAlexanderFonte = {
    gender: MAN,
    name: 'Alexander Fonte',
    nickname: 'el flaco, papo',
    birth: '??/11/????'
};
var pSaumelFonte = {
    gender: MAN,
    name: 'Saumel Fonte',
    birth: '17/09/1990'
};
var pIdalmisRojas = {
    gender: WOMAN,
    name: 'Idalmis Rojas'
};
var pEstefani = {
    gender: WOMAN,
    name: 'Estefani'
};
var pMigdalia = {
    gender: WOMAN,
    name: 'Migdalia'
};
var pDianelisGonzalezRivas = {
    gender: WOMAN,
    name: 'Dianelis Gonzalez Rivas'
};
var pKleixanderFonteGonzalez = {
    gender: MAN,
    name: 'Kleixander Fonte Gonzalez',
    birth: '09/05/1998'
};
var pKleivisLaidalyFonteGonzalez = {
    gender: WOMAN,
    name: 'Kleivis Laidaly Fonte Gonzalez',
    birth: '28/06/1995'
};
var pReinaldoFonteArmelo = {
    gender: MAN,
    name: 'Reinaldo Fonte Armelo',
    nickname: 'el negro',
    birth: '16/10/1979'
};
var pYoania = {
    gender: WOMAN,
    name: 'Yoania'
};
var pObdulia = {
    gender: WOMAN,
    name: 'Obdulia'
};

var pDerekFonte = {
    gender: MAN,
    name: 'Derek Fonte'
};


var pAracelis = {
    gender: WOMAN,
    name: 'Aracelis'
};

var pMercedesRivas = {
    gender: WOMAN,
    name: 'Mercedes Rivas'
};


//---------------------------------------------------------
//END DATA
//---------------------------------------------------------

//---------------------------------------------------------
//BEGIN DRAWING
//---------------------------------------------------------
//change the row,col numbers to position the nodes
var graph = new Graph('graph', '#graph');


//people nodes
var GEN_SEPARATOR = 5;
var FIRST_GEN_ROW = 0;
var SECOND_GEN_ROW = FIRST_GEN_ROW + GEN_SEPARATOR;
var THIRD_GEN_ROW = SECOND_GEN_ROW + GEN_SEPARATOR;
var FOURTH_GEN_ROW = THIRD_GEN_ROW + GEN_SEPARATOR;
var FIFTH_GEN_ROW = FOURTH_GEN_ROW + GEN_SEPARATOR;
var SIXTH_GEN_ROW = FIFTH_GEN_ROW + GEN_SEPARATOR;
x = 32.5;
i = 2;
x -= i;
x = graph.addPeople(FIRST_GEN_ROW, x += i,
    pObdulioHermelo, pVirginiaMoreno);
    x = graph.addPeople(FIRST_GEN_ROW, x += i*6,
    pMaria, pConcepcion
);

x = 27.5;
i = 2;
x -= i;
x = graph.addPeople(SECOND_GEN_ROW, x += i,
    pFrancisca, pMarina,
    pLuisaNini,pCandida,  pMateo, pEmelina, pRaul, pSenoviaHermeloMoreno,
    pIngracioFonteBano,  pChicho,pFlores,  pEmilio,
    pMariana, pTeodora, pNieve, pAbelardo, pGabriel, pJuan);
    x = graph.addPeople(SECOND_GEN_ROW, x += i*10.75,
    pMercedesRivas);

x = 1;
i = 2;
x -= i;
x = graph.addPeople(THIRD_GEN_ROW, x += i*1.5,
    pVictorFonte, pLuisaLago);
    x = graph.addPeople(THIRD_GEN_ROW, x += i*3, pFelicia);
    x = graph.addPeople(THIRD_GEN_ROW, x += i*2.5,pEldaGarcia);
    x = graph.addPeople(THIRD_GEN_ROW, x += i*5.5, pIsidroFonte,pObdulia);
    x = graph.addPeople(THIRD_GEN_ROW, x += i*2.5,pMariaEchevarria);
    x = graph.addPeople(THIRD_GEN_ROW, x += i*2.5, pIsidoro,pAracelis);
    x = graph.addPeople(THIRD_GEN_ROW, x += i*0.5, 
        pArelis);
        x = graph.addPeople(THIRD_GEN_ROW, x += i*2.5, 
            pDiosdadoFonte, pGloria,
    pMagalysFonteArmelo, pTawfikSaif); 
    x = graph.addPeople(THIRD_GEN_ROW, x += i*1.5, pAlexisRodriguez, pLazaroMateoTorresDiaz,pReinaldoFonteArmelo, pYoania);
    x = graph.addPeople(THIRD_GEN_ROW, x += i*2,
    pAlexanderFonte, pDianelisGonzalezRivas
);


x = 1;
i = 2;
x -= i;
x = graph.addPeople(FOURTH_GEN_ROW, x += i,
    pIdaniaFonte, pYamisdeyPlata, 
    pMariaDeLosAngelesFonteLago); 
    x = graph.addPeople(FOURTH_GEN_ROW, x += i*0.25,pManuelPereda);
    x = graph.addPeople(FOURTH_GEN_ROW, x += i*0.75, pYakelina);
    x = graph.addPeople(FOURTH_GEN_ROW, x += i*1.5,
    pYenima);
    x = graph.addPeople(FOURTH_GEN_ROW, x += i, pYaimara, pAdriel);
    x = graph.addPeople(FOURTH_GEN_ROW, x += i*4.5,pDeilyFonte);
    x = graph.addPeople(FOURTH_GEN_ROW, x += i*0.5, pMailinFonte,pEsposoDesconocido,
    pOsvaldoOsuna, pOsnielGomez, pYoel); 
    x = graph.addPeople(FOURTH_GEN_ROW, x += i*1.5,pYandy, pDamian, pReinier);
    x = graph.addPeople(FOURTH_GEN_ROW, x += i*2,pOsmanyFonte, pYosvany, pYasmani, pAmalSaifFonte,
    pJorgeAmadoSoriaRamirez);
    x = graph.addPeople(FOURTH_GEN_ROW, x += i*0.5, 
    pAmaliaRodriguezFonte, pJoseArmandoGonzalez);
    x = graph.addPeople(FOURTH_GEN_ROW, x += i,  pDerekFonte);
    x = graph.addPeople(FOURTH_GEN_ROW, x += i*0.5, pSaumelFonte,
    pIdalmisRojas, pKleixanderFonteGonzalez, pKleivisLaidalyFonteGonzalez

);

x = 1;
i = 2;
x -= i;
x = graph.addPeople(FIFTH_GEN_ROW, x += i,
    pBeatrizPlataFonte, pVictorManuelPlataFonte,
    pMileidysPeredaFonte);

    x = graph.addPeople(FIFTH_GEN_ROW, x += i*0.5,pMirelisPeredaFonte,pMonica, pHijoDesconocido, pYeneri, pYaneri, pYosiel, pJonatan,
    pYadiel); 
    x = graph.addPeople(FIFTH_GEN_ROW, x += i*3.5,pLuisa, pAdonisNoNameFonte, pKevinNoNameFonte,
    pYoerlanFonte, pDialeidisOsunaFonte, pVanesaGomezFonte);

    x = graph.addPeople(FIFTH_GEN_ROW, x += i*0.5,pYeniferMaria);
    x = graph.addPeople(FIFTH_GEN_ROW, x += i*2.5, pDayani);
    x = graph.addPeople(FIFTH_GEN_ROW, x += i*2.5, pAlexanderFonteHijoOsmany, pHijoDesconocidoDeOsmany);
    x = graph.addPeople(FIFTH_GEN_ROW, x += i*4.5,pNikolGonzalezRodriguez);
    x = graph.addPeople(FIFTH_GEN_ROW, x += i*3, pEstefani, pMigdalia
);


x = 1;
i = 2;
x -= i;
x = graph.addPeople(SIXTH_GEN_ROW, x += i*3,
    pCheila, pKaterin, pDanielAlejandro);
    x = graph.addPeople(SIXTH_GEN_ROW, x += i*10, pAnthony
);


//---------------------------------------------------------
//relationship nodes. 
//These also include the edges from all people related to the central relationship node, 
//as well as any invisible node required for segmented edges, if present.
graph.addRel(defMtNode, 1, pObdulioHermelo, pVirginiaMoreno,
    pSenoviaHermeloMoreno, pLuisaNini, pCandida, pMateo, pEmelina, pRaul);
graph.addRel(defMtNode, 1, pMaria, pConcepcion,
    pIngracioFonteBano, pChicho, pFlores, pEmilio, pMariana, pTeodora, pNieve, pAbelardo, pGabriel, pJuan);
    graph.addRel(defMtNode, 1, pSenoviaHermeloMoreno, pIngracioFonteBano,
        pVictorFonte,pIsidroFonte,pIsidoro,pDiosdadoFonte,pMagalysFonteArmelo,pAlexanderFonte,pReinaldoFonteArmelo);
graph.addRel(defRelNode,1,pVictorFonte,pLuisaLago,pIdaniaFonte,pMariaDeLosAngelesFonteLago);
graph.addRel(defRelNode,0.75,pVictorFonte,pFelicia,pYakelina);
graph.addRel(defRelNode,0.5,pVictorFonte,pEldaGarcia,pYenima,pYaimara);
graph.addRel(defMtNode,1,pIdaniaFonte,pYamisdeyPlata,pBeatrizPlataFonte,pVictorManuelPlataFonte);
graph.addRel(defRelNode,1,pMariaDeLosAngelesFonteLago,pManuelPereda,pMileidysPeredaFonte,pMirelisPeredaFonte);
graph.addRel(defRelNode,1,pYaimara,pAdriel,pJonatan,pYadiel);
graph.addRel(defRelNode,1,pIsidroFonte,pObdulia,pDeilyFonte);
graph.addRel(defRelNode,0.75,pIsidroFonte,pMariaEchevarria,pMailinFonte,pYoel);
graph.addRel(defRelNode,1,pMailinFonte,pEsposoDesconocido,pYoerlanFonte);
graph.addRel(defRelNode,0.75,pMailinFonte,pOsvaldoOsuna,pDialeidisOsunaFonte);
graph.addRel(defRelNode,0.5,pMailinFonte,pOsnielGomez,pVanesaGomezFonte);
graph.addRel(defRelNode,1,pIsidoro,pAracelis,pYandy);
graph.addRel(defMtNode,0.75,pIsidoro,pArelis,pDamian,pReinier);
graph.addRel(defMtNode,1,pDiosdadoFonte,pGloria,pOsmanyFonte,pYosvany,pYasmani);
graph.addRel(defRelNode,1,pMagalysFonteArmelo,pTawfikSaif,pAmalSaifFonte);
graph.addRel(defRelNode,0.75,pMagalysFonteArmelo,pAlexisRodriguez,pAmaliaRodriguezFonte);
graph.addRel(defMtNode,0.5,pMagalysFonteArmelo,pLazaroMateoTorresDiaz);
graph.addRel(defRelNode,1,pAmaliaRodriguezFonte,pJoseArmandoGonzalez,pNikolGonzalezRodriguez);
graph.addRel(defMtNode,1,pAmalSaifFonte,pJorgeAmadoSoriaRamirez);
graph.addRel(defMtNode,1,pSaumelFonte,pIdalmisRojas,pEstefani,pMigdalia);
graph.addRel(defMtNode,1,pAlexanderFonte,pDianelisGonzalezRivas,pKleixanderFonteGonzalez,pKleivisLaidalyFonteGonzalez);
graph.addRel(defRelNode,1,pReinaldoFonteArmelo,pYoania,pDerekFonte);

graph.rels(4, 2, pAlexanderFonte,pSaumelFonte);
graph.rels(0, 2, pMileidysPeredaFonte,pCheila);
graph.rels(0, 2, pMercedesRivas,pDianelisGonzalezRivas);
graph.rels(0, 2, pDeilyFonte,pLuisa,pAdonisNoNameFonte,pKevinNoNameFonte);
graph.rels(0, 2, pLuisa,pAnthony);
graph.rels(0, 2, pDamian,pDayani);
graph.rels(0, 2, pMirelisPeredaFonte,pKaterin,pDanielAlejandro);
graph.rels(0, 2, pYakelina,pMonica,pHijoDesconocido);
graph.rels(0, 2, pYenima,pYeneri,pYaneri,pYosiel);
graph.rels(0, 2, pYoel,pYeniferMaria);
graph.rels(7, 2, pObdulioHermelo, pFrancisca, pMarina);
graph.rels(0, 2, pOsmanyFonte,pAlexanderFonteHijoOsmany,pHijoDesconocidoDeOsmany);
graph.rels(0, 1, pObdulia,pAracelis);

graph.stdMore(pYosvany);
graph.stdMore(pYandy);
//---------------------------------------------------------
//END DRAWING
//---------------------------------------------------------
graph.init();