const express = require("express");
const axios = require("axios");
const cron = require("node-cron");
const {connection} = require("./connection/db");
const router = require("./routes/route");
require("dotenv").config();
connection();

const app = express()
app.use(express.json());

const swapiURL = "https://swapi.dev/api/people/";
const cronSchedule = "*/5 * * * *";

// Function to ping the SWAPI API
const pingSWAPI = async () => {
  try {
    const res = await axios.get(swapiURL);
    console.log(`Ping successful! Status Code: ${res.status}`);
  } catch (error) {
    console.log(`Ping failed! Error: ${error.message}`);
  }
};

// Set up the cron job
cron.schedule(cronSchedule, () => {
  console.log(`Running SWAPI ping cron job at ${new Date().toLocaleString()}`);
  pingSWAPI();
});

app.use("/api", router);


app.listen(process.env.PORT, async() => {
  try {
    await connection;
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
    console.log("Database is not connected");
  }
    console.log(`Server is running at port ${process.env.PORT}`);
  });
