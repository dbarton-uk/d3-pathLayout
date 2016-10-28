var PathLayout = (function () {

    var pathLayout = function (_) {

        _ = _ || {};

        this._nodes = _.nodes || [];
        this._path = _.path;

    };

    pathLayout.prototype.nodes = function (_) {

        if (!_) return this._nodes;

        this._nodes = _;
        return (this.run());
    };

    pathLayout.prototype.path = function (_) {

        if (!_) return this._path;

        this._path = _;
        return (this.run());
    };

    pathLayout.prototype.run = function () {

        var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", this._path);

        var pathLength = path.getTotalLength();
        var nodeCount = this._nodes.length;

        this._nodes.forEach(function(n, i) {

            var pathLengthForNode = (pathLength / nodeCount) * i;

            var point = path.getPointAtLength(pathLengthForNode);
            n.x = point.x;
            n.y = point.y;
        });

        return this;

    };

    return pathLayout;

}());

var pathLayout = function (_) {
    return new PathLayout(_ || {}).run();
};

export { pathLayout }