const express = require('express');
const cors = require('cors');
const app = express();
const connect = require('./configs/db');

const mensController = require('./controllers/mensProducts.controller');
const womensController = require('./controllers/womensProducts.controller');

app.use(express.json())
app.use(cors());
app.use("/catogory" , mensController);
app.use("/catogory" , womensController);




app.listen(7000,async() => {
    try{
        await connect();
        console.log("Listening on 7000")
    } catch(e){
        console.log(e.message);
    }
})