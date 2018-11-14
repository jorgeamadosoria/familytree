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
function person(name, nickname, gender, birth, death, comments, profile, photos) {
    return {
        birth: birth,
        death: death,
        nickname: nickname,
        comments: comments,
        photos: photos,
        name: name,
        profile: profile,
        classes: gender
    };
}

function relationshipNode(row, col, people, date, classes) {
    console.log(people);
    return {
        data: {
            row: row,
            col: col,
            id: relId(people),
            relationship: {
                tip: date
            },
            debug: DEBUG ? relId(people) : ''
        },
        classes: classes
    };
}

function personNode(row, col, person) {
    person.id = idPerson++;
    //cytoscape node format
    return {
        data: {
            row: row,
            col: col,
            id: person.id,
            person: person,
            debug: DEBUG ? person.id : ''
        },
        classes: person.gender
    };
}

function moreId(node) {

    return 'more-' + node.id;
}

function relId(people) {
    console.log('rel id' + JSON.stringify(people));
    console.log('rel ' + people.reduce((acc, person) => acc ? (acc + '-' + person.id) : 'rel '));
    return 'rel-' + people.reduce((acc, person) => acc + '-' + person.id);
}


function relNode(row, col, relationship, peopleArray) {
    var relNode = relationshipNode(row, col, peopleArray.map((ele) => ele instanceof Array ? ele[0] : ele),
        relationship.date, relationship.type);
    relationship.id = relNode.data.id;

    var results = [];
    results.push(relNode);
    for (var i = 0; i < peopleArray.length; i++) {

        if (peopleArray && i < peopleArray.length && peopleArray[i] instanceof Array) {
            /*     console.log(i);
                 console.log(relationship);
                 console.log(peopleArray[i]);
                 console.log(peopleArray[i].slice(1));*/
            results.push(...edge(relNode.data, peopleArray[i][0], peopleArray[i].slice(1)));
        } else
            results.push(...edge(relNode.data, peopleArray[i]));
    }
    return results;
}

function moreNode(row, col, node, invNodes) {
    var moreId = 'more-' + node.id;
    var moreNode = {
        id: moreId,
        data: {
            row: row,
            col: col,
            id: moreId,
            relationship: {
                tip: node.moreComment
            },
            debug: DEBUG ? node.id : ''
        },
        classes: 'more'
    };
    return [moreNode,
        ...edge(node, moreNode, invNodes)
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

function edge(source, target, invArray) {
    var sourceId = source.id;
    var targetId = target.id;
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


//Elements management
var elements = [];

function add(row, col, node, peopleArray) {
    if ('name' in node)
        elements.push(personNode(row, col, node));
    else
        elements.push(...relNode(row, col, node, peopleArray));
}

function more(row, col, node, invNodes) {
    elements.push(...moreNode(row, col, node, invNodes));
}

function rel(node1, node2, invNodes) {
    elements.push(...edge(node1, node2, invNodes));
}