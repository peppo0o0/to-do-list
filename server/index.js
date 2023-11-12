// get the client
const express = require("express");
const app = express();
const port = 3000;
const urlBase = "/api/task";
const urlUser = "/api/user";
const todolistRoutes = require("./routes/todolist");
const userRoutes = require("./routes/user");

var cors = require("cors");

app.set("port", process.env.PORT || 3000);

// middlewares
app.use(express.json());
app.use(cors());
app.use(urlBase, todolistRoutes);
app.use(urlUser, userRoutes);

// server running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
