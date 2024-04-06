const mysql = require('mysql2');
const db = mysql.createConnection({
 host: 'localhost', 
 user: 'root', 
 //1022334054/Na
 password: 'root', 
 database: 'nodejs_base1',
 authPlugins : {
    mysql_clear_password: () => Buffer.from('root','utf-8' ),
    caching_sh2_password : true,
 }
});
db.connect(function(err) {
 if (err) throw err; 
 console.log('Base de datos conectada');
 
});
module.exports = db; 