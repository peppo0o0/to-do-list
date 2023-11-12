const express = require("express");
const router = express.Router();
const createDbConnection = require("../database/database");

router.get("/", async (req, res) => {
  try {
    const connection = await createDbConnection();
    const [rows] = await connection.execute("SELECT * FROM tasks");
    res.json(rows);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const connection = await createDbConnection();
    await connection.execute(
      "INSERT INTO crudtodolist.tasks (task) VALUES (?)",
      [req.body.task]
    );
    res.json("The task was added");
  } catch (error) {
    res.status(400).json({
      message: "Upps there was an error",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const connection = await createDbConnection();
    await connection.execute("DELETE FROM tasks WHERE id = ?", [req.params.id]);
    res.json("The task was deleted");
  } catch (error) {
    res.status(400).json({
      message: "Upps there was an error",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const connection = await createDbConnection();
    await connection.execute("UPDATE tasks set task = ? WHERE id = ?", [
      req.body.task,
      req.params.id,
    ]);
    res.status(201).json("The task was updated");
  } catch (error) {
    res.status(500).json({
      message: "Daniel la cago",
    });
  }
});

module.exports = router;
