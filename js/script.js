var cy = cytoscape({
    container: $('#graph'), // container to render in
    elements: elements,
    style: [ // the stylesheet for the graph
        {
            selector: 'node',
            style: {
                'width': 100,
                'height': 100,
                'text-valign': 'bottom',
                'color': 'white',
                'text-outline-width': 2,
                'text-outline-color': '#888',
                'background-fit': 'contain'
            }
        }, {
            selector: 'node.invisible',
            style: {
                'width': 1,
                'height': 1,
                'background-color': '#ccc',
                'label': 'data(debug)'
            }
        }, {
            selector: 'node.people',
            style: {
                'background-image': 'data(person.profile)'
            }
        }, {
            selector: 'node.woman',
            style: {
                'label': 'data(person.name)',
                'background-color': 'pink',
                'background-image': 'data(person.profile)'
            }
        }, {
            selector: 'node.man',
            style: {
                'label': 'data(person.name)',
                'background-color': 'lightblue',
                'background-image': 'data(person.profile)'
            }
        }, {
            selector: 'node.other',
            style: {
                'label': 'data(person.name)',
                'background-color': 'lightgrey',
                'background-image': 'data(person.profile)'
            }
        }, {
            selector: 'node.marriage',
            style: {
                'width': 40,
                'height': 40,
                'label': '',
                'background-image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg81vgI01MmrRytuKKhxgo7NqAT0XcCKBsYFBClBr2rNqASEBr'
            }
        }, {
            selector: 'node.relationship',
            style: {
                'width': 40,
                'height': 40,
                'label': '',
                'background-image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStN8H_mBNznW0odQqBD6qgjKEUMR7dxlK1SsWYJKh-YfLds5UK',
            }
        }, {
            selector: 'node.more',
            style: {
                'width': 40,
                'height': 40,
                'label': '',
                'background-image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrIjAZsDAbHCbkfxBAMUDtBvEKNkVJ0rkUeKMzEJV8yjigrW6M',
            }
        }, {
            selector: 'edge',
            style: {
                'width': 3,
                'line-color': '#ccc',
                'target-arrow-color': '#ccc'
            }
        }
    ],
    layout: {

        name: 'grid',
        position: function(node) {
            return node._private.data;
        },
        rows: 8,
        col: 5
    }
});
cy.autolock(AUTOLOCK);

//detail model function
var modalFn = function(evt) {
    var node = evt.target;
    //clear modal and hide all elements. they will be shown if data exists on each one
    $("div#person.modal #birth").text('');
    $("div#person.modal #name").text('');
    $("div#person.modal #nickname").text('');
    $("div#person.modal #death").text('');
    $("div#person.modal #comments").text('');
    $("div#person.modal #photos").find(".carousel-inner").empty();
    $("div#person.modal #nickname-content").hide();
    $("div#person.modal #birth-content").hide();
    $("div#person.modal #death-content").hide();
    $("div#person.modal #comments").hide();
    $("div#person.modal #photos").hide();
    //-----------------------------------
    //add data to modal elements
    $("div#person.modal #name").text(node.data().person.name);

    if (node.data().person.nickname)
        $("div#person.modal #nickname-content").show().find("#nickname").text(node.data().person.nickname);

    if (node.data().person.birth)
        $("div#person.modal #birth-content").show().find("#birth").text(node.data().person.birth);

    if (node.data().person.death)
        $("div#person.modal #death-content").show().find("#death").text(node.data().person.death);

    if (node.data().person.comments)
        $("div#person.modal #comments").show().text(node.data().person.comments);


    if (node.data().person.photos) {
        $.each(node.data().person.photos, function(idx, val) {
            var template = $("#carousel-template").clone();
            template.toggleClass("hidden").attr('id', '').find("img").attr("src", val);
            $("div#person.modal #photos .carousel-inner").prepend(template);
        })
        $("div#person.modal #photos").show().find(".carousel-item").first().toggleClass("active");
    }
    //-----------------------------------
    $("div#person.modal").modal('toggle');
};

//bind event to people nodes to launch modal
cy.on('tap', 'node.man', modalFn);
cy.on('tap', 'node.woman', modalFn);
cy.on('tap', 'node.other', modalFn);
//-----------------------------------
//-----marriage/relationship detail function with tippy, not modal-----
var makeTippy = function(node, text) {
    return tippy(node.popperRef(), {
        html: (function() {
            var div = document.createElement('div');
            div.innerHTML = text;
            return div;
        })(),
        arrow: true,
        multiple: false,
        animation: 'perspective',
        trigger: 'mouseenter',
        sticky: true,
        placement: 'top'
    }).tooltips[0];
};
cy.on('mouseover', 'node.marriage,node.relationship,node.more', function(evt) {
    var node = evt.target;
    var tippyA = makeTippy(node, node.data().relationship.tip);
    tippyA.show();
});
//--------------------------------------------