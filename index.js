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

// ran only in production (heroku)
if (process.env.NODE_ENV === "production") {
  // 1st express will serve production assets (main.js or main.css files)
  app.use(express.static("client/build"));

  /* 2nd if express cannot recognize the route will serve index.html
    such that the react router side app is responsible for the route
    kick the user to the client-side of the app 
  */
  const path = require("path");
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  // });
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
  // app.get("/surveys", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  // });
}

// for production look for the port heroku lets us use, otherwise use port 5000 for development
const PORT = process.env.PORT || 5000;
app.listen(PORT);
