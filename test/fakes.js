var fakeDocument = {

    createElementNS : function() {
        return fakePath;
    }
};

var fakePath = {

    setAttribute: function() {},

    getTotalLength: function() {
        return 100;
    },

    getPointAtLength(l) {
        return { x: (100 + l), y: 100 };
    }

};

module.exports = fakeDocument;
