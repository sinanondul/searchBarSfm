const mongoose = require ('mongoose')


const productSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    }, 
    imglinks: String,
    prices: String,
    descriptions1: String,
    brand: {
        type: String,
        required: true
    } 

});

mongoose.exports= mongoose.model('products', productSchema);
