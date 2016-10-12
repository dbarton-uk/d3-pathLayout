var test = require("tape").test,
    plot = require("../").plot();

var nodes = buildNodes(10);

test("The 'plot' class:", function (t) {

    t.equal(plot.nodes(nodes).nodes(), nodes, '- can set and get nodes');
    t.end();

});

function buildNodes(n) {

    var nodes = [];

    for (var i = 0; i < n; i++)
        nodes.push({});

    return nodes;

}

