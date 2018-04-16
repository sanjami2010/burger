var mysql = require("mysql");
require('console.table');
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "burgers_db"
});
connection.connect(function (err) {
    if (err) throw err;
    queryBurgers();
});

function queryBurgers() {
    connection.query("SELECT * FROM burgers", function (err, data) {


        console.table(data);
   });

}

module.exports = connection;
