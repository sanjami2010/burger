var orm = require('../config/orm.js');

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },
    create: function (burgerName, cb) {
        orm.createOne("burger", ["burger_name", "devoured"], [burgerName, false], function (res) {
            cb(res);
        })
    },
    update: function (id, cb) {
        orm.updateOne("burger", {
            devoured: true
        },
        `"id = "${id}`,
        function (res) {
            cb(res);
        })

    }
}

//burger.create(function(res){
   // console.log(res);
//});
module.exports = burger