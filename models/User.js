const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// load model class - collection name 'users' using the userSchema - into mongoose
mongoose.model("users", userSchema);
