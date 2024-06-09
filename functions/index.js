const functions = require("firebase-functions/v1");
const express = require("express");
const cookieParser = require("cookie-parser")();
const cors = require("cors")({ origin: true });
const app = express();

const admin = require("firebase-admin");
admin.initializeApp();

app.use(cors);
app.use(cookieParser);

// create order by given collaction
app.post("/", (req, res) => {
  return res.status(200).send({ status: "Success" });
});

exports.app = functions.https.onRequest(app);
