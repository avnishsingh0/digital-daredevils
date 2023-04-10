const express = require("express");
const cors = require("cors")
const {connection} = require("./db");
const { default: mongoose } = require("mongoose");


const app = express();
require("dotenv").config()
app.use(express.json())
app.use(cors())

const leaderboardSchema = new mongoose.Schema({
    name: String,
    score: Number,
  });
  
  const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);
  
  app.get("/leaderboard", async (req, res) => {
    const leaderboardData = await Leaderboard.find().sort({ score: -1 }).limit(10);
    res.json(leaderboardData);
  });


app.listen(process.env.port, async ()=>{
    try {
        await connection
        console.log(`MongoDb is connected on ${process.env.port}`);
    } catch (error) {
        console.log(error);
    }
    console.log("server is running");
})