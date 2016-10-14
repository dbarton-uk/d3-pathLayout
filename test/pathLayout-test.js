var test = require("tape").test,
    layout = require("../").pathLayout(),
    data = require("./test-data").TestData;

var nodes = data.buildNodes(10);
var line = data.line;

test("The 'nodes' method:", function(t) {

    var actual = layout.nodes(nodes).nodes();

    t.equal(actual, nodes, '- can set and get nodes');
    t.end();
});

test("The 'lines' method:", function(t) {

    var actual = layout.line(line).line();

    t.equal(actual, line, '- can set and get a line');
    t.end();
});



