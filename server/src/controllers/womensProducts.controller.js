const express = require('express');
const WomensProduct = require('../models/womensProduct.model');
const router = express.Router();



// for adding the new products to the mens section
router.post( "/womens", async(req,res) => {
    try{
        const womensProducts = await WomensProduct.create(req.body);

        res.status(201).send(womensProducts);

    }
    catch(err){
        res.status(500).send(err.message);
    }
})


// getting and showing the products to front-end

router.get( "/womens", async(req,res) => {
    try{
        const womensProducts = await WomensProduct.find().lean().exec();

        res.status(201).send(womensProducts);

    }
    catch(err){
        res.status(500).send(err.message);
    }
})

module.exports = router;