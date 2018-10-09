const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

// middlewares that operate on the incoming requests before they are sent off to the request handlers
app.use(bodyParser.json()); // this will parse the body and then assign it to the req.body property of the incoming request object
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// connected to the arrow function in authRoutes & payRoutes
require("./routes/authRoutes")(app);
require("./routes/payRoutes")(app);

// for production look for the port heroku lets us use, otherwise use port 5000 for development
const PORT = process.env.PORT || 5000;
app.listen(PORT);
