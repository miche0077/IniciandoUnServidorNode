const express = require('express');
const app = express()

app.get('/', (req, res)=>{
    res.send('<h1>My First Server!</h1>')
})
app.listen(3000, ()=>{
    console.log('Init Server!')
})

