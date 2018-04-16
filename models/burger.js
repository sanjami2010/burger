var orm = require('../config/orm.js');

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },
    create: function (val, cb) {
        orm.createOne(val, function (res) {
            cb(res);
        })
    },
    update: function (val, cb) {
        orm.updateOne(val, function (res) {
            cb(res);
        })

    }
}

burger.create(function(res){
    console.log(res);
});
module.exports = burger