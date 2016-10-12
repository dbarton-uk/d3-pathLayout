var tape = require("tape"),
    plot = require("../");

tape("hello() returns Hello World!", function (test) {
    test.equal(plot.plot().hello(), "Hello World!");
    test.end();
});
