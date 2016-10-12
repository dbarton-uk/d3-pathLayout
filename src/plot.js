var Plot = (function () {

    var plot = function () {
    };

    plot.prototype.nodes = function (_) {

        if (!_) return this._nodes;

        this._nodes = _;
        return (this);
    };

    plot.prototype.line = function (_) {

        if (!_) return this._line;

        this._line = _;
        return (this);
    };

    return plot;

}());

var plot = function () {
    return new Plot();
};

export {plot}