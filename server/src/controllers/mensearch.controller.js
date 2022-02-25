const express = require("express");

const Men= require("../models/mensearch.model.js")

const router= express.Router();



router.get("", async(req,res) => {
    try{
        const mens = await Men.find().lean().exec();

        res.status(201).send(mens);

    }
    catch(err){
        res.status(500).send(err.message);
    }
})

module.exports = router;
