const insert = database => {
  // Insert some documents
  database
    .collection("users")
    .insertMany(
      [
        { username: "Andi", email: "andi@google.com", phone: "081234778" },
        { username: "Bagus", email: "bagus@google.com", phone: "081354778" },
        { username: "Chelsea", email: "chelsea@google.com", phone: "081234769" }
      ],
      (err, result) => {
        console.log("Inserted 3 documents into the document collection");
      }
    );
};

module.exports = insert;
