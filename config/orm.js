

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

    createOne: function (table, cols, val, cb) {
        //var queryString = "INSERT INTO burgers (burger_name) values(?)";
        
         var queryString = `
         INSERT INTO ${table}(${cols.toString}) VALUES(${printQuestionMarks(vals.length)})
         `
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    updateOne: function (table, vals, condition, cb) {
        var queryString = "UPDATE burgers SET devoured = 1 where id = ?"; // UPDATE burgers

       

        connection.query(queryString, function (err, result) {
            if (err) {
                throw cb(result); err;
            }

           
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
