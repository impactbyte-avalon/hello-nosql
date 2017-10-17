const insert = database => {
  // Insert some documents
  database
    .collection("users")
    .insertMany(
      [{ username: "A" }, { username: "B" }, { username: "C" }],
      function(err, result) {
        console.log("Inserted 3 documents into the document collection")
      }
    )
}

module.exports = insert
