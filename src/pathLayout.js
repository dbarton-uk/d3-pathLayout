var PathLayout = (function () {

    var pathLayout = function () {
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

    return pathLayout;

}());

var pathLayout = function () {
    return new PathLayout();
};

export { pathLayout }