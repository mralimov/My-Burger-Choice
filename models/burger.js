var orm = require('../config/orm.js');

const burger = {
    all: (callback) => {
        orm.all("burgers", (response) => {
            callback(response);
        })
    },
    create:(burger_name, callback) => {
        orm.create(burger_name, (response) => {

            callback(response)
        })
    },
    update:(selectedID, callback) => {
        orm.update(selectedID, (response) => {

            callback(response)
        })
    },
}

module.exports = burger;