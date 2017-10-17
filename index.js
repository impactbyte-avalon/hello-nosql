const mongo = require("mongodb").MongoClient

// Connection URL
const url = "mongodb://localhost:27017/myproject"

// Use connect method to connect to the Server
mongo.connect(url, (err, db) => {
  console.log("Connected to MongoDB server")
  db.close()
})
