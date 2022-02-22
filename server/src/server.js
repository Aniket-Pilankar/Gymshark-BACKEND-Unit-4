const express = require('express');
const app = express();

const connect = require('./configs/db');

app.listen(7000,async() => {
    try{
        await connect();
        console.log("Listening on 7000")
    } catch(e){
        console.log(e.message);
    }
})