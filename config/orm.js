var connection = require("./connection.js");

let orm = {
    
    all: (getTable, callback) => {
        const queryStr = "SELECT * FROM ??";
        connection.query(queryStr, getTable, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result)
        })
    },
    
    create: (newBurger, callback) => {
        const queryStr = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryStr, newBurger, (err, result) => {
            if (err) {
                throw err;
            }
         
            callback(result)
        })
    },

    
    update: (selectedID, callback) => {
        const queryStr = "UPDATE burgers SET devoured = NOT devoured WHERE id = ?";
        connection.query(queryStr, selectedID, (err, result) => {
            if (err) {
                throw err;
            }
       
            callback(result)
        })
    }
}


module.exports = orm;