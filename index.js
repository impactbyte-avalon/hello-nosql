const mongo = require("mongodb").MongoClient
const insert = require("./insert")

// Connection URL
const url = "mongodb://localhost:27017/socialmedia"

// Use connect method to connect to the Server
mongo.connect(url, (error, database) => {
  console.log("Connected to MongoDB server")
  insert(database)
  database.close()
})
