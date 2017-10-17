const mongo = require("mongodb").MongoClient

// Connection URL
const url = "mongodb://localhost:27017/myproject"

// Use connect method to connect to the Server
mongo.connect(url, (error, database) => {
  console.log("Connected to MongoDB server")
  database.close()
})
