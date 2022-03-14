const express = require('express');
const cors = require('cors');
const app = express();
const connect = require('./configs/db');

const mensController = require('./controllers/mensProducts.controller');
const womensController = require('./controllers/womensProducts.controller');
const addressController = require("./controllers/address.controller");
const {register,login} = require('./controllers/auth.controller');

const menSearchController=require("./controllers/mensearch.controller");
const womenSearchController=require("./controllers/womenSearch.controller");
const legginsSearchController= require("./controllers/legginsSearch.controller");
const accessoriesSearchController= require("./controllers/accessoriesSearch.controller");


app.use(express.json())
app.use(cors());
app.use("/catogory" , mensController);
app.use("/catogory" , womensController);
app.use("/address" , addressController);

app.use("/men", menSearchController);
app.use("/women", womenSearchController);
app.use("/leggins", legginsSearchController);
app.use("/accessories", accessoriesSearchController);

app.post('/register',register);
app.post('/login',login)



app.listen(7000 || process.env.PORT,async() => {
    try{
        await connect();
        console.log("Listening on 7000")
    } catch(e){
        console.log(e.message);
    }
})