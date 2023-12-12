const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGODB_URL } = process.env;

const client = new MongoClient(MONGODB_URL);

async function createMongoDbConnection() {
  try {
    await client.connect();
    return client.db("data").collection("stats");
  } catch (error) {
    console.error("Error MongoDB connection:", error);
    throw error;
  }
}

module.exports = createMongoDbConnection;
