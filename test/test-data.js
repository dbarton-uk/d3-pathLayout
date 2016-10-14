var d3 = require("d3-path");

var TestData = {
    buildNodes: function (n) {

        var nodes = [];

        for (var i = 0; i < n; i++)
            nodes.push({});

        return nodes;

    },

    buildPath: function () {

        var path = d3.path();

        path.moveTo(100, 100);
        path.lineTo(200, 200);

        return path;

    }

};

exports.TestData = TestData;
