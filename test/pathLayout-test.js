var test   = require("tape").test,
    module = require("../"),
    data   = require("./test-data").TestData;

global.document = require("./fakes");


test("The 'pathLayout' function with no arguments:", function (t) {

    var layout = module.pathLayout();

    t.deepEqual(layout.nodes(), [], '- sets the nodes to an empty array.');
    t.equal(layout.path(), undefined, '- sets the path to undefined.');

    t.end();

});

test("The 'pathLayout' function with arguments:", function (t) {

    var testData = data.buildTestData();
    var nodes    = testData.nodes;
    var path     = testData.path;

    var layout = module.pathLayout({
        nodes: nodes,
        path : path
    });

    t.equal(layout.nodes(), nodes, '- sets the nodes to nodes passed in constructor.');
    t.equal(layout.path(), path, '- sets the path to the path passed in constructor.');

    data.testLayout(t, testData);

    t.end();

});

test("The 'pathLayout' function, using the set methods:", function (t) {

    var testData = data.buildTestData();
    var nodes    = testData.nodes;
    var path     = testData.path;

    var layout = module.pathLayout()
                       .nodes(nodes)
                       .path(path);


    t.equal(layout.nodes(), nodes, '- sets the nodes to the nodes passed in.');
    t.equal(layout.path(), path, '- sets the path to the passed in.');

    data.testLayout(t, testData);

    t.end();

});
