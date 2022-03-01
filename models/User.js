const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({

  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String,
  },

});

module.exports = User = mongoose.model("users", UserSchema);
