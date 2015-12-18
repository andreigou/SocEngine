var express = require('express');
var router = express.Router();


var pg = require('pg');

pg.connect("postgres://upjfgxnewmzgzo:-hmeZZGe2atZ_jBbguJgbLv6KO@ec2-54-83-36-90.compute-1.amazonaws.com:5432/d2u0mgbchb2mvm?ssl=true", function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client.query('CREATE TABLE IF NOT EXISTS emps(firstname varchar(64), lastname varchar(64))')
   client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Ronald', 'McDonald'])
    client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Mayor', 'McCheese'])
    client.query("SELECT firstname, lastname FROM emps ORDER BY lastname, firstname")

    .on('row', function(row) {
     router.get('/', function(req, res, next) {
  res.render('index', { title: row.firstname });
});
});
});
/* GET home page. */


module.exports = router;
