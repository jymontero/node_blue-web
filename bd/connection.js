const mysql = require('mysql');
const {DATABASE:{HOST,USERNAME,PASSWORD,NAME,PORT}} =  require('../config');

let db 

module.exports = function(){
    db = mysql.createConnection(`${HOST},${PORT},${NAME},${USERNAME},${PASSWORD}`);
    return db;
}