const express=require('express')

const app = express();


app.use((req, res, next) => {
    console.log('i am inside the use ')
    res.send("<h1>welcome back</h1>")
})

const PORT=3000

app.listen(PORT, () => {
    console.log("server is successfully listen on port no : 3000")
})