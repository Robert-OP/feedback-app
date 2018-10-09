const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

// load model class - collection name 'users' using the userSchema - into mongoose
mongoose.model("users", userSchema);
