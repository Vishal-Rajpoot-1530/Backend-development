const path=require('path')
const express = require("express");
const userRouter = require('./routes/userRouter')
const hostRouter = require('./routes/hostRouter')
const rootDir=require('./utils/pathUtil')





const app = express();

 app.use(userRouter)
// app.use(hostRouter)


app.use('/host',hostRouter)
//another way to add host router first check the '/host' the add the host router or concate with the path of hostRouters


app.use((req, res) => {
    res.status(404) ;
    // res.send('<h1> 404 page not found on /airbnb</h1>');
    res.sendFile(path.join(rootDir, 'views', '404.html'));
 })

const PORT = 3000;

app.listen(PORT, () => {
  console.log("server is successfully listen on port no : 3000");
});
