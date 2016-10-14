var test   = require("tape").test,
    module = require("../"),
    data   = require("./test-data").TestData;

var nodes = data.buildNodes(10);
var path  = data.path;

test("The 'pathLayout' class constructor:", function (t) {

    var args = {
        nodes: nodes,
        path : path
    };

    var layout = module.pathLayout(args);
    t.equal(layout._nodes, nodes, '- sets the nodes to the nodes passed in.');
    t.equal(layout._path, path, '- sets the path to the path passed in.');

    layout = module.pathLayout();
    t.deepEqual(layout._nodes, [], '- sets the nodes to an empty array if null.');
    t.end();

});

test("The 'nodes' method:", function (t) {

    var layout = module.pathLayout();
    var actual = layout.nodes(nodes).nodes();

    t.equal(actual, nodes, '- can set and get nodes');
    t.end();
});

test("The 'path' method:", function (t) {

    var layout = module.pathLayout();
    var actual = layout.path(path).path();

    t.equal(actual, path, '- can set and get a path');
    t.end();
});

test("The functionality:", function(t) {

    var args = {
        nodes: nodes,
        path: path
    };

    module.pathLayout(args);

    t.equal(nodes[0].x, 0);
    t.equal(nodes[0].y, 0);

    t.end();

});



