var test = require("tape").test,
    plot = require("../").plot(),
    data = require("./test-data").TestData;

var nodes = data.buildNodes(10);
var line = data.line;

test("The 'nodes' method:", function(t) {

    var actual = plot.nodes(nodes).nodes();

    t.equal(actual, nodes, '- can set and get nodes');
    t.end();
});

test("The 'lines' method:", function(t) {

    var actual = plot.line(line).line();

    t.equal(actual, line, '- can set and get a line');
    t.end();
});



