const express = require('express');
const MensProduct = require('../models/mensProduct.model');
const router = express.Router();



// for adding the new products to the mens section
router.post( "/mens", async(req,res) => {
    try{
        const mensProducts = await MensProduct.create(req.body);

        res.status(201).send(mensProducts);

    }
    catch(err){
        res.status(500).send(err.message);
    }
})


// getting and showing the products to front-end

router.get( "/mens", async(req,res) => {
    try{
        const mensProducts = await MensProduct.find().lean().exec();

        res.status(201).send(mensProducts);

    }
    catch(err){
        res.status(500).send(err.message);
    }
})

module.exports = router;