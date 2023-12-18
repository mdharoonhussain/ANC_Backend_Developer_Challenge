const mongoose = require("mongoose");
require("dotenv").config()

const connection = async () => {
  try {
    await mongoose.connect(process.env.mongourl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the Database");
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = {connection};
