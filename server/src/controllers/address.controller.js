const express = require('express')
const router = express.Router()

const Address = require('../models/address.model')

// router.get('/user', async(req,res) => {
//     try{
//         const mens = await Men.find().lean().exec();
//         return res.status(201).send(mens)
//     } catch(e){
//        return res.send(e.message)
//     }
// })
router.post('/', async(req,res) => {
    try{
        const address = await Address.create(req.body);
       return  res.status(201).send(address)
    } catch(e){
        return res.send(e.message)
    }
})


router.get("/" , async(req , res)=>{
    try {
        const address = await Address.find().lean().exec()
        return res.status(201).send(address)
    } catch (error) {
        return res.send(e.message)
    }
} ) 


module.exports = router