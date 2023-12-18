const express = require("express");
const {connection} = require("./connection/db");
const router = require("./routes/route");
const app = express()
require("dotenv").config();
// const PORT = 4500;
connection();
app.use(express.json());

app.use("/api", router);

// app.get("/",(req,res)=>{
//     res.status(201).send("Hello World");
// })

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
  });