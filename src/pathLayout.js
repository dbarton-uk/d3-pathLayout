var PathLayout = (function () {

    var pathLayout = function (_) {

        _ = _ || {};

        this._nodes = _.nodes || [];
        this._path = _.path;
    };

    pathLayout.prototype.nodes = function (_) {

        if (!_) return this._nodes;

        this._nodes = _;
        return (this);
    };

    pathLayout.prototype.path = function (_) {

        if (!_) return this._path;

        this._path = _;
        return (this);
    };

    pathLayout.prototype.run = function () {

        this._nodes.forEach(function(n) {
            n.x = 0;
            n.y = 0;
        });

        return this;

    };

    return pathLayout;

}());

var pathLayout = function (_) {
    return new PathLayout(_ || {}).run();
};

export { pathLayout }