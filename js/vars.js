//default profile for person nodes
var defaultProfile = 'https://img.icons8.com/metro/1600/gender-neutral-user.png';

//constants for node types
var MAN = 'man';
var WOMAN = 'woman';
var OTHER = 'other';
var MARRIAGE = 'marriage';
var RELATIONSHIP = 'relationship';

//important to position the invisible nodes. Could be extended to the other nodes as well, if need be.
var DEBUG = false;
//to debug tree positioning by allowing the dragging of nodes
var AUTOLOCK = true;
//id counter for person nodes
var idPerson = 1;


//used to create a person data, which is later included in a person node
function person(name, nickname,gender, birth, death,  comments, profile, photos) {
    return {
        birth: birth,
        death: death,
        nickname: nickname,
        comments: comments,
        photos: photos,
        name: name,
        id: idPerson++,
        profile: profile,
        classes: gender
    };
}

function relationship(row,col,person1, person2, date, classes){
    return {
        data: {
            row: row,
            col: col,
            id: relId(person1, person2),
            relationship: {
                tip: date
            },
            debug: DEBUG ? relId(person1, person2) : ''
        },
        classes: classes
    }; 
}

function personNode(row, col, person) {
    return { // node a
        data: {
            row: row,
            col: col,
            id: person.id,
            person: person,
            debug: DEBUG ? person.id : ''
        },
        classes: person.classes
    };
}

function moreId(node) {

    return 'more-' + node.id;
}

function relId(person1, person2) {

    return 'rel-' + Math.min(person1.id, person2.id) + '-' + Math.max(person1.id, person2.id);
}

function relNode(row, col, person1, person2, invNodes1, date, classes, invNodes2) {
    var rel = relationship(row,col,person1,person2,date,classes);

    var results = [];
    results.push(...edge(person1.id, rel.data.id, invNodes1));
    results.push(rel);
    results.push(...edge(rel.data.id, person2.id, invNodes2));
    return results;
}

function moreNode(row, col, node, text) {
    var moreId = 'more-' + node.id;

    return [{
            data: {
                row: row,
                col: col,
                id: moreId,
                relationship: {
                    tip: text
                },
                debug: DEBUG ? relId(node) : ''
            },
            classes: 'more'
        },
        ...edge(node.id, moreId)
    ];
}

function invNode(row, col, id) {
    return {
        data: {
            id: id,
            row: row,
            col: col,
            debug: DEBUG ? id : ''
        },
        classes: "invisible"
    }
}

function edge(sourceId, targetId, invArray) {
    var result = [];
    if (invArray) {

        var id = 1;
        var invNodes = invArray.map(function(val) {
            return invNode(val[0], val[1], 'inv-' + sourceId + '-' + targetId + '-' + id++);
        });
        //    console.log(invNodes);
        result.unshift({
            data: {
                source: sourceId,
                target: invNodes[0].data.id
            }
        });
        result.push({
            data: {
                source: invNodes[invNodes.length - 1].data.id,
                target: targetId
            }
        });
        result.push(...invNodes);

        for (var i = 0; i < invNodes.length - 1; i++) {
            result.push({
                data: {
                    source: invNodes[i].data.id,
                    target: invNodes[i + 1].data.id
                }
            });
        }
    } else {
        result.push({
            data: {
                source: sourceId,
                target: targetId
            }
        });
    }

    return result;
}