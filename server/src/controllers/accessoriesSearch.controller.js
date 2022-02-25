const express = require("express");

const Accessories=require("../models/accessoriesSearch.model");

const router= express.Router();



router.get("", async(req,res) => {
    try{
        const accessories = await Accessories.find().lean().exec();

        res.status(201).send(accessories);

    }
    catch(err){
        res.status(500).send(err.message);
    }
})

module.exports = router;
