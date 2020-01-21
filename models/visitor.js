const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const visitorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Visitor", visitorSchema);
