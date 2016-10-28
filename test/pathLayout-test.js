var test   = require("tape").test,
    module = require("../"),
    data   = require("./test-data").TestData;

global.document = require("./fakes");


test("The 'pathLayout' class constructor:", function (t) {

    var testData = data.buildTestData();
    var nodes    = testData.nodes;
    var path     = testData.path;

    var layout = module.pathLayout();

    t.deepEqual(layout._nodes, [], '- sets the nodes to an empty array if undefined.');
    t.equal(layout._path, undefined, '- sets the path to undefined if undefined.');

    layout = module.pathLayout({
        nodes: nodes,
        path : path
    });

    t.equal(layout._nodes, nodes, '- sets the nodes to the nodes passed in.');
    t.equal(layout._path, path, '- sets the path to the path passed in.');

    data.testLayout(t, testData);

    t.end();

});

test("The getter and setter methods :", function (t) {

    var testData = data.buildTestData();
    var nodes    = testData.nodes;
    var path     = testData.path;


    var layout = module.pathLayout()
                       .nodes(nodes)
                       .path(path);

    t.equal(layout.nodes(), nodes, '- can set and get nodes');
    t.equal(layout.path(), path, '- can set and get a path');

    data.testLayout(t, testData);

    t.end();
});


