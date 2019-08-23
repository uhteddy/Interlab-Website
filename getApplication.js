const db = require('quick.db');

module.exports = {
    fn: (username, id) => {
        return db.get(`users.${username.toLowerCase()}.applications.${id}`)
    }
}