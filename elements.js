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
var pAbuelaMaterna = {
    name: 'abuela materna',
    nickname: 'Chuchita',
    gender: WOMAN,
    birth: '12/12/2012 Camaguey, Cuba',
    death: '14/02/2016',
    comments: 'Comentario sobre la vida y obra de la mujer',
    profile: defaultProfile,
    photos: ["https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4057996.jpg",
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU__1QICoMo8BIEgMnVVIKVpckPzOz1Yn7wwAWfM9vXUthC_D"
    ]
};

var pAbueloMaterno = {
    name: 'abuelo materno',
    nickname: null,
    gender: MAN,
    birth: null,
    death: null,
    comments: null,
    profile: defaultProfile,
    photos: null
};
var pAbueloPaterno = {
    name: 'abuelo paterno',
    nickname: null,
    gender: MAN,
    birth: null,
    death: null,
    comments: null,
    profile: defaultProfile,
    photos: null
};
var pAbuelaPaterna = {
    name: 'abuela paterna',
    nickname: null,
    gender: WOMAN,
    birth: null,
    death: null,
    comments: null,
    profile: defaultProfile,
    photos: null
};
var pMadre = {
    name: 'madre',
    nickname: null,
    gender: WOMAN,
    birth: '12/12/2012',
    death: null,
    comments: null,
    profile: defaultProfile,
    photos: null
};
var pPadre = {
    name: 'padre',
    nickname: null,
    gender: MAN,
    birth: null,
    death: null,
    comments: null,
    profile: defaultProfile,
    photos: null
};
var pHijo = {
    name: 'hijo',
    nickname: null,
    gender: MAN,
    birth: null,
    death: null,
    comments: null,
    profile: defaultProfile,
    photos: null
};
var pHermano = {
    name: 'hermano',
    nickname: null,
    gender: MAN,
    birth: null,
    death: null,
    comments: null,
    profile: defaultProfile,
    moreComment: 'hijos del hermano',
    photos: null
};
var pConyuge = {
    name: 'cónyuge',
    nickname: null,
    gender: WOMAN,
    birth: null,
    death: null,
    comments: null,
    profile: defaultProfile,
    photos: null
};
var pNovia = {
    name: 'novia',
    nickname: null,
    gender: WOMAN,
    birth: null,
    death: null,
    comments: null,
    profile: defaultProfile,
    photos: null
};
var pHijoAdoptivo = {
    name: 'hijo adoptivo',
    nickname: null,
    gender: OTHER,
    birth: null,
    death: null,
    comments: null,
    profile: defaultProfile,
    photos: null
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

//people nodes
add(1, 2.5, pAbueloMaterno);
add(1, 3.5, pAbuelaMaterna);
add(3, 3, pMadre);
add(1, 4.5, pAbueloPaterno);
add(1, 5.5, pAbuelaPaterna);
add(3, 5, pPadre);
add(5, 3.75, pHijo);
add(5, 4.25, pHermano);
add(5, 2.75, pConyuge);
add(5, 2.25, pNovia);
add(7, 2.75, pHijoAdoptivo);

//---------------------------------------------------------
//relationship nodes. 
//These also include the edges from all people related to the central relationship node, 
//as well as any invisible node required for segmented edges, if present.
add(1, 5, mtAbuelaPaternaAbueloPaterno, [pAbuelaPaterna, pAbueloPaterno, pPadre]);
add(1, 3, mtAbueloMaternoAbuelaMaterna, [pAbueloMaterno, pAbuelaMaterna, pMadre]);
add(5, 3.25, mtHijoConyuge, [pHijo, pConyuge]);
add(4.25, 2.5, rlHijoNovia, [
    [
        pHijo, [4.25, 3.5],
        [5, 3.5]
    ],
    [
        pNovia, [4.25, 2.25]
    ]
]);
add(3, 4, mtPadreMadre, [
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
//'more' nodes. Also includes the edge from the person node to the more node 
more(7, 4.25, pHermano);

//edges directly between two people, without a relationship
rel(pConyuge, pHijoAdoptivo);

//---------------------------------------------------------
//END DRAWING
//---------------------------------------------------------