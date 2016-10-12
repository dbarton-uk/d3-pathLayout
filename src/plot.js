var Plot = (function () {

    var plot = function () {
    };

    plot.prototype.hello = function () {
        return "Hello World!";
    };

    return plot;

}());

var plot = function () {
    return new Plot();
};

export {plot}