const express = require("express");

const Leggins=require("../models/legginsSearch.model");

const router= express.Router();



router.get("", async(req,res) => {
    try{
        const leggins = await Leggins.find().lean().exec();

        res.status(201).send(leggins);

    }
    catch(err){
        res.status(500).send(err.message);
    }
})

module.exports = router;
