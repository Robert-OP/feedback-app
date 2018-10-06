const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// connected to the arrow function in authRoutes
require("./routes/authRoutes")(app);

// for production look for the port heroku lets us use, otherwise use port 5000 for development
const PORT = process.env.PORT || 5000;
app.listen(PORT);
