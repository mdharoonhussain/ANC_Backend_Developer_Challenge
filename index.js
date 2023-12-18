const express = require("express");
const {connection} = require("./connection/db");
const router = require("./routes/route");
const app = express()
const PORT = 4500;
connection();
app.use(express.json());

app.use("/api", router);

// app.get("/",(req,res)=>{
//     res.status(201).send("Hello World");
// })

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });