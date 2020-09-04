const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser=require('body-parser');

const app = express();
app.use(bodyParser.json());


//Middlewares (fncs)
app.use('/p', ()=>{
    console.log("this is a mw")
});

//import routes
const productsRoute = require('./routes/products');
app.use('/products', productsRoute);

//routes
app.get('/', (req, res) => {
    res.send("Hello Sinan! You're at Home");
})

//connect to db
mongoose.connect(process.env.DB_CONNECTION , {useUnifiedTopology: true, useNewUrlParser: true }, ()=>
    console.log("\nConnected to DB!")
    );

//listen
app.listen(3000);