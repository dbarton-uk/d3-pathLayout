var test = require("tape").test,
    plot = require("../");

test("The 'hello' method:", function (t) {

    var actual   = plot.plot().hello();
    var expected = "Hello World!";

    t.equal(actual, expected, "- should return 'Hello World!'");
    t.end();
});

