const express = require("express");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

app.get ("/login",(req,res)=>{
    return res
    .status(200)
    .json({
        msg:"Login route",
    })
})

app.get ("/register",(req,res)=>{
    return res
    .status(200)
    .json({
        msg:"Register Route",
    })
})


app.get ('/',(req,res)=>{
    return res
    .status(200)
    .json({
        msg:"Working",
    })
})

app.listen(PORT,()=>{
    console.log(`backend running on ${PORT}`);
})