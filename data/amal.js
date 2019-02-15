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
    nickname: '',
    gender: MAN,
    birth: 'Pinar del Rio, Cuba',
    death: '',
    comments: 'Comentario sobre la vida y obra',
    profile: defaultProfile,
    photos: ["https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4057996.jpg",
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU__1QICoMo8BIEgMnVVIKVpckPzOz1Yn7wwAWfM9vXUthC_D"
    ]
};
var pVirginiaMoreno = {
    name: 'Virginia Moreno',
    nickname: '',
    gender: WOMAN,
    birth: 'Pinar del Rio, Cuba',
    death: '',
    comments: 'Comentario sobre la vida y obra de la mujer',
    profile: defaultProfile,
    photos: ["https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4057996.jpg",
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU__1QICoMo8BIEgMnVVIKVpckPzOz1Yn7wwAWfM9vXUthC_D"
    ]
};
var pZenobiaHermeloMoreno = {
    name: 'Zenobia Hermelo Moreno',
    nickname: 'Queno',
    gender: WOMAN,
    birth: '29/10/1936 Pinar del Rio, Cuba',
    death: '',
    comments: 'Comentario sobre la vida y obra de la mujer',
    profile: defaultProfile,
    photos: ["https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4057996.jpg",
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU__1QICoMo8BIEgMnVVIKVpckPzOz1Yn7wwAWfM9vXUthC_D"
    ]
};

var pLuisaHermeloMoreno = {
    name: 'Luisa Hermelo Moreno',
    nickname: 'Nini',
    gender: WOMAN,
    birth: 'Pinar del Rio, Cuba',
    death: '',
    comments: 'Comentario sobre la vida y obra de la mujer',
    profile: defaultProfile,
    photos: ["https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4057996.jpg",
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU__1QICoMo8BIEgMnVVIKVpckPzOz1Yn7wwAWfM9vXUthC_D"
    ]
};
var pCandidaHermeloMoreno = {
    name: 'Candida Hermelo Moreno',
    nickname: 'Candita',
    gender: WOMAN,
    birth: 'Pinar del Rio, Cuba',
    death: '',
    comments: 'Comentario sobre la vida y obra de la mujer',
    profile: defaultProfile,
    photos: ["https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4057996.jpg",
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU__1QICoMo8BIEgMnVVIKVpckPzOz1Yn7wwAWfM9vXUthC_D"
    ]
};
var pEmelinaHermeloMoreno = {
    name: 'Emelina Hermelo Moreno',
    nickname: '',
    gender: WOMAN,
    birth: 'Pinar del Rio, Cuba',
    death: '',
    comments: 'Comentario sobre la vida y obra de la mujer',
    profile: defaultProfile,
    photos: ["https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4057996.jpg",
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU__1QICoMo8BIEgMnVVIKVpckPzOz1Yn7wwAWfM9vXUthC_D"
    ]
};
var pMateoHermeloMoreno = {
    name: 'Mateo Hermelo Moreno',
    nickname: '',
    gender: MAN,
    birth: 'Pinar del Rio, Cuba',
    death: '',
    comments: 'Comentario sobre la vida y obra',
    profile: defaultProfile,
    photos: ["https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4057996.jpg",
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU__1QICoMo8BIEgMnVVIKVpckPzOz1Yn7wwAWfM9vXUthC_D"
    ]
};
var pRaulHermeloMoreno = {
    name: 'Raúl Hermelo Moreno',
    nickname: 'Pirre',
    gender: MAN,
    birth: 'Pinar del Rio, Cuba',
    death: '',
    comments: 'Comentario sobre la vida y obra de la mujer',
    profile: defaultProfile,
    photos: ["https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4057996.jpg",
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU__1QICoMo8BIEgMnVVIKVpckPzOz1Yn7wwAWfM9vXUthC_D"
    ]
};
var pFranciscaHermelo = {
    name: 'Francisca Hermelo Moreno',
    nickname: '',
    gender: WOMAN,
    birth: 'Pinar del Rio, Cuba',
    death: '',
    comments: 'Hija solo de Obdulio, medio hermana de mi abuela',
    profile: defaultProfile,
    photos: ["https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4057996.jpg",
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU__1QICoMo8BIEgMnVVIKVpckPzOz1Yn7wwAWfM9vXUthC_D"
    ]
};
var pMarinaHermelo = {
    name: 'Marina Hermelo Moreno',
    nickname: '',
    gender: WOMAN,
    birth: 'Pinar del Rio, Cuba',
    death: '',
    comments: 'Hija solo de Obdulio, medio hermana de mi abuela',
    profile: defaultProfile,
    photos: ["https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4057996.jpg",
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU__1QICoMo8BIEgMnVVIKVpckPzOz1Yn7wwAWfM9vXUthC_D"
    ]
};
var pMaríaBaño = {
    name: 'María Baño',
    nickname: '',
    gender: WOMAN,
    birth: 'Pinar del Rio, Cuba',
    death: '',
    comments: 'Comentario sobre la vida y obra',
    profile: defaultProfile,
    photos: ["https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4057996.jpg",
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU__1QICoMo8BIEgMnVVIKVpckPzOz1Yn7wwAWfM9vXUthC_D"
    ]
};
var pConsepcionFonte = {
    name: 'Consepción Fonte',
    nickname: '',
    gender: MAN,
    birth: 'Pinar del Rio, Cuba',
    death: '',
    comments: 'Comentario sobre la vida y obra',
    profile: defaultProfile,
    photos: ["https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4057996.jpg",
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU__1QICoMo8BIEgMnVVIKVpckPzOz1Yn7wwAWfM9vXUthC_D"
    ]
};
var pEngracioFonteBaño = {
    name: 'Engracio Fonte Baño',
    nickname: '',
    gender: MAN,
    birth: '22/07/1933 Pinar del Rio, Cuba',
    death: '',
    comments: 'Comentario sobre la vida y obra',
    profile: defaultProfile,
    photos: ["https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4057996.jpg",
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU__1QICoMo8BIEgMnVVIKVpckPzOz1Yn7wwAWfM9vXUthC_D"
    ]
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
var mtPadreMadre = {
    date: '13/12/2012',
    type: MARRIAGE
};
var mtAbuelaPaternaAbueloPaterno = {
    date: '13/12/2012',
    type: MARRIAGE
};
var mtAbueloMaternoAbuelaMaterna = {
    date: '13/12/2012',
    type: MARRIAGE
};
var rlHijoNovia = {
    date: '13/12/2012',
    type: RELATIONSHIP
};
var mtHijoConyuge = {
    date: '13/12/2012',
    type: MARRIAGE
};

//---------------------------------------------------------
//END DATA
//---------------------------------------------------------

//---------------------------------------------------------
//BEGIN DRAWING
//---------------------------------------------------------
//change the row,col numbers to position the nodes
var graph = new Graph('amal','#graph');
//people nodes
graph.add(1, 2.5, pAbueloMaterno);
graph.add(1, 3.5, pAbuelaMaterna);
graph.add(3, 3, pMadre);
graph.add(1, 4.5, pAbueloPaterno);
graph.add(1, 5.5, pAbuelaPaterna);
graph.add(3, 5, pPadre);
graph.add(5, 3.75, pHijo);
graph.add(5, 4.25, pHermano);
graph.add(5, 2.75, pConyuge);
graph.add(5, 2.25, pNovia);

//---------------------------------------------------------
//relationship nodes. 
//These also include the edges from all people related to the central relationship node, 
//as well as any invisible node required for segmented edges, if present.
graph.add(1, 5, mtAbuelaPaternaAbueloPaterno, [pAbuelaPaterna, pAbueloPaterno, pPadre]);
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
//---------------------------------------------------------
//END DRAWING
//---------------------------------------------------------
graph.init();
