const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

// for production look for the port heroku lets us use, otherwise use port 5000 for development
const PORT = process.env.PORT || 5000;
app.listen(PORT);
