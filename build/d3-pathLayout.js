(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.d3 = global.d3 || {})));
}(this, (function (exports) { 'use strict';

var pathLayout = function (_) {

    _ = _ || {};

    var _nodes = _.nodes || [];
    var _path  = _.path || undefined;

    var pathLayout = {

        nodes: function (_) {

            if (!arguments.length) return _nodes;

            _nodes = _;
            return run();
        },

        path: function (_) {

            if (!arguments.length) return _path;

            _path = _;
            return run();
        }
    };

    return run();

    function run() {

        if (!_path) return pathLayout;

        var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", _path);

        var pathLength = path.getTotalLength();
        var nodeCount  = _nodes.length;

        _nodes.forEach(function (n, i) {

            var pathLengthForNode = (pathLength / nodeCount) * i;

            var point = path.getPointAtLength(pathLengthForNode);
            n.x       = point.x;
            n.y       = point.y;
        });

        return pathLayout;

    }
};

exports.pathLayout = pathLayout;

Object.defineProperty(exports, '__esModule', { value: true });

})));
