const mongoose = require("mongoose");

const ANCSchema = new mongoose.Schema({
  endpoint: String,
  data: Object,
  search: String,
  sort: String,
  timestamp: { type: Date, default: Date.now },
});

const ANCModel = mongoose.model("ANCData", ANCSchema);

module.exports = ANCModel;
