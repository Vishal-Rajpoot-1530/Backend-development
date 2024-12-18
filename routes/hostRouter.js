const path=require('path')
const express = require('express')
const rootDir=require('../utils/pathUtil')




const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
//   res.send(
//     "<h1>Register your Home here</h1><form action='/host/add-home' method='POST'><input type='text' name='home-name' placeholder='enter your home name '/><input type='submit'/> </form>"
    //   );
     res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

hostRouter.use(express.urlencoded());//used to parse 
 
hostRouter.post("/add-home", (req, res, next) => {
//   console.log(req.body);
    //   res.send("<h1>home registered successfully</h1><a href='/' >Go to Home</a>");
     res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});



module.exports=hostRouter