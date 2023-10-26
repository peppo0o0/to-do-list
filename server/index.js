// get the client
const express = require('express');
const app = express();
var cors = require('cors');
const port = 3000;
const mysql = require('mysql2');
app.set("port", process.env.PORT || 3000);
const urlBase = "/api/task"

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
app.use(cors());

// GET, POST, DELETE & PUT
app.get(urlBase + '/', (req, res) => {

  connection.connect();
 
  connection.execute('SELECT * FROM tasks', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
});

app.post(urlBase + '/', (req, res) => {
  
  connection.connect();

  connection.query("INSERT INTO crudtodolist.tasks (task) VALUES (?)", [req.body.task],function (error, results, fields) {
    if (error) throw error;
    res.json('The task was added');
  });
});

app.delete(urlBase + '/:id', (req, res) => {
  
  connection.connect();

  connection.execute('DELETE FROM tasks WHERE id = ?', [req.params.id],function (error, results, fields) {
    if (error) throw error;
    res.json('The task was deleted');
  });
});

app.put(urlBase + '/:id', (req, res) => {
  
  connection.connect();

  connection.query('UPDATE tasks set task = ? WHERE id = ?', [req.body.task, req.params.id],function (error, results, fields) {
    if (error) res.status(500).json('Daniel la cago');
    res.status(201).json('The task was updated');
  });
});

// server running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});