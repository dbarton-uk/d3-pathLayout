var _path = require("d3-path").path;

var TestData = {

    buildTestData: function() {

        return {
            nodes: buildNodes(10),
            path : buildPath()
        };

        function buildNodes(n) {

            var nodes = [];

            for (var i = 0; i < n; i++)
                nodes.push({});

            return nodes;

        }

        function buildPath() {

            var path = _path();

            path.moveTo(100, 100);
            path.lineTo(200, 200);

            return path;

        }

    },

    testLayout: function(t, d) {

        var nodes = d.nodes;

        var increment = 10;

        for (var i = 0; i < nodes.length; i++) {

            var x = 100 + (increment * i);

            t.equal(nodes[i].x, x, '- correctly sets x coordinate');
            t.equal(nodes[i].y, 100, '- correctly sets y coordinate');
        }
    }

};

exports.TestData = TestData;
