const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'soporte',
  database : 'crudtodolist',
  port: 3306
});

app.set("port", process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.json('Hello World!')

connection.connect();
let data
 
connection.query('SELECT * FROM tasks', function (error, results, fields) {
  if (error) throw error;
  data = results
});
 
connection.end();
res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})