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

router.get("/mens", async(req,res) => {
    try{
        const mensProducts = await MensProduct.find().lean().exec();

        res.status(201).send(mensProducts);

    }
    catch(err){
        res.status(500).send(err.message);
    }
})

router.get("/mens/:_id", async(req,res) => {
    console.log('req.params.id: ', req.params._id);
    try{
        const mensProduct = await MensProduct.findById(req.params._id).lean().exec();
        

        res.status(201).send(mensProduct);
    }catch(err) {
        res.status(500).send(err.message);
    }
})
module.exports = router;