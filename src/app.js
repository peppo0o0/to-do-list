const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql2");
const myConnection = require("express-myconnection");
const app = express();

// importing routes
const tasksRoutes = require("./routes/task");

//settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middlewares
app.use(morgan("dev"));
app.use(myConnection(mysql, {
    host: "localhost",
    user: "root",
    password: "soporte",
    port: 3306,
    database: "crudtodolist"
}, "single"));

// routes
app.use("/", tasksRoutes);

// static files
app.use(express.static(path.join(__dirname, "public")));

// starting the server
app.listen(app.get("port"), () => {
    console.log("Server on port 3000");
  });