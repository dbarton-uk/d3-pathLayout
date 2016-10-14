var PathLayout = (function () {

    var pathLayout = function () {
    };

    pathLayout.prototype.nodes = function (_) {

        if (!_) return this._nodes;

        this._nodes = _;
        return (this);
    };

    pathLayout.prototype.line = function (_) {

        if (!_) return this._line;

        this._line = _;
        return (this);
    };

    return pathLayout;

}());

var pathLayout = function () {
    return new PathLayout();
};

export { pathLayout }