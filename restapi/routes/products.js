const express = require('express')
const router = express.Router();
const Products = require('../models/products')


router.get('/', (req, res)=>{
    res.send("You are in Products");
});

router.get('/spec', (req,res) =>{
    res.send("Special Post");
});

router.post('/', (req,res)=>{
    console.log(req.body)
});

router.post('/', async (req,res)=>{
    const product = new Products({
        title: req.body.title,
        brand: req.body.brand,
        category: req.body.description
    });

    try{
        const savedProduct = await post.save();
        res.json(savedProduct);
    }catch(err){
        res.json({message: err});
    }
});


module.exports = router;