var test   = require("tape").test,
    module = require("../"),
    data   = require("./test-data").TestData;

global.document = require("./fakes");

var nodes = data.buildNodes(10);
var path  = data.buildPath();


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

test("The 'run' method:", function (t) {

    var args = {
        nodes: nodes,
        path : path
    };

    module.pathLayout(args);

    var increment = 10;

    for (var i = 0; i < nodes.length; i++) {

        var x = 100 + (increment * i);

        t.equal(nodes[i].x, x, '- correctly sets x coordinate');
        t.equal(nodes[i].y, 100, '- correctly sets x coordinate');
    }

    t.end();
});



