// get the client
const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');
app.set("port", process.env.PORT || 3000);

// connection to the database
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'soporte',
  database : 'crudtodolist',
  port: 3306
});

// middlewares
app.use(express.json());

// GET, POST, DELETE & PUT
app.get('/', (req, res) => {

  connection.connect();
 
  connection.execute('SELECT * FROM tasks', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
});

app.post('/add', (req, res) => {
  
  connection.connect();

  connection.query('INSERT INTO tasks set ?', [req.body],function (error, results, fields) {
    if (error) throw error;
    res.redirect("/");
  });
});

app.delete('/:id', (req, res) => {
  
  connection.connect();

  connection.execute('DELETE FROM tasks WHERE id = ?', [req.params.id],function (error, results, fields) {
    if (error) throw error;
    res.redirect("/");
  });
});

app.put('/:id', (req, res) => {
  
  connection.connect();

  connection.query('UPDATE tasks set ? WHERE id = ?', [req.body, req.params.id],function (error, results, fields) {
    if (error) throw error;
    res.redirect("/");
  });
});

// server running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});