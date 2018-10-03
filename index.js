const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// for production look for the port heroku lets us use, otherwise use port 5000 for development
const PORT = process.env.PORT || 5000;
app.listen(PORT);
