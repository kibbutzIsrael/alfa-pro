const express = require("express");
const expressMongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const app = express();
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser")();
const cors = require("cors")({ origin: true });

//Routers
const volunteerRoutes = require("./routes/volunteerRoutes");
const userRoutes = require("./routes/userRoutes");
//Middlewares
app.use(helmet());
app.use(express.json());
app.use(expressMongoSanitize());
app.use(xss());
app.use(cors);
app.use(cookieParser);

//Routes
app.use("/volunteers", volunteerRoutes);
app.use("/users", userRoutes);
module.exports = app;
