var test = require("tape").test,
    plot = require("../").plot(),
    data = require("./test-data").TestData;

var nodes = data.buildNodes(10);
var line = data.line;


test("The 'nodes' method:", function(t) {
    t.equal(plot.nodes(nodes).nodes(), nodes, '- can set and get nodes');
    t.end();
});

test("The 'lines' method:", function(t) {
    t.equal(plot.line(line).line(), line, '- can set and get a line');
    t.end();
});



