var test = require("tape").test,
    layout = require("../").pathLayout(),
    data = require("./test-data").TestData;

var nodes = data.buildNodes(10);
var path = data.path;

test("The 'nodes' method:", function(t) {

    var actual = layout.nodes(nodes).nodes();

    t.equal(actual, nodes, '- can set and get nodes');
    t.end();
});

test("The 'path' method:", function(t) {

    var actual = layout.path(path).path();

    t.equal(actual, path, '- can set and get a path');
    t.end();
});



