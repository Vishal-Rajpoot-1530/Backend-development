//core module
const path = require('path')
//external module
const express = require('express')

const rootDir=require('../utils/pathUtil')
 



const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    // res.send("<h1>welcome back</h1><a href='/host/add-home'>Add Home</a>");
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
  });




module.exports=userRouter