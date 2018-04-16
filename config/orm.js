

var connection = require("../config/connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function (tableInput) {
        var queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    createOne: function (vals, cb) {
        var queryString = "INSERT INTO burgers (burger_name) values(?)";

        

        // var newQueryString = `
        // INSERT INTO ${table}(${cols.toSString}) VALUES(${printQuestionMarks(vals.length)})
        // `

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: function (val,cb) {
        var queryString = "UPDATE burgers SET devoured = 1 where id = ?"; // UPDATE burgers

       

        connection.query(queryString,[val],function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    
};
//orm.selectAll("burgers");
// orm.createOne(2, function (result) {
//     console.log(result)
// })
// orm.updateOne(1, function (result) {
//     console.log(result)
// })

module.exports = orm;
