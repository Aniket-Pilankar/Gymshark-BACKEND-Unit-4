const express = require("express");

const Women= require("../models/womenSearch.model")

const router= express.Router();



router.get("", async(req,res) => {
    try{
        const womens = await Women.find().lean().exec();

        res.status(201).send(womens);

    }
    catch(err){
        res.status(500).send(err.message);
    }
})

module.exports = router;
