const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


const catagories = require('./Data/Catagories.json');

app.use(cors());
app.get('/', (req, res)=>{
    res.send('Dragon is running')
});

app.get('/catagories',(req, res)=>{
    console.log(catagories);
    res.send(catagories);
})


app.listen(port, ()=>{
    console.log(`Dragon API is running on port: ${port}`);
})