const express = require("express");
const createDbConnection = require("../database/database");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 8;

router.get("/", async (req, res) => {
  try {
    const connection = await createDbConnection();
    const [rows] = await connection.execute("SELECT * FROM user");
    res.json(rows);
  } catch (error) {
    res.status(400).json({
      message: "Upps there was an error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const connection = await createDbConnection();
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, saltRounds);

    await connection.execute(
      "INSERT INTO user (name, email, password) VALUES (?, ?, ?)",
      [name, email, hash]
    );
    res.json("The user was added");
  } catch (error) {
    res.status(400).json({
      message: "Upps there was an error",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const connection = await createDbConnection();
    const { email, password } = req.body;
    const [results] = await connection.execute(
      "SELECT * FROM user WHERE email = ?",
      [email]
    );

    if (results.length) {
      const user = results[0];
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const { id, email, name } = user
        res.json({ 
          id,
          email,
          name
        });
      } else {
        res.status(400).json("Login failed")
      }
    } else {
      res.status(400).json("No email found");
    }
  } catch (error) {
    res.status(500).json({
      message: "Upps there was an error",
    });
  }
});


module.exports = router;
