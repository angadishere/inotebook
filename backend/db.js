const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/iNoteBook";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected to DB!"))
    .catch((error) => console.log(error));
};

module.exports = connectToMongo;
