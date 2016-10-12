var Plot = (function () {

    var plot = function () {
    };

    plot.prototype.nodes = function (_) {

        if (!_) return this.x;

        this.x = _;
        return (this);
    };

    return plot;

}());

var plot = function () {
    return new Plot();
};

export {plot}