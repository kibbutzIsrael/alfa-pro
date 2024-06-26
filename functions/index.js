const functions = require("firebase-functions/v1");
const mongoose = require("mongoose");
require("dotenv").config();
const app = require('./App');
const admin = require("firebase-admin");

admin.initializeApp();


const DB = process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Connection to MongoDB failed:", err));


// create order by given collaction
app.get("/", (req, res) => {
  return res.status(200).send({ status: "Success" });
});

exports.app = functions.https.onRequest(app);
