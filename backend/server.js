import express from 'express' 
import dotenv from 'dotenv'
import products from './data/products.js'
import connectDb from './config/db.js'
import colors from 'colors'

connectDb()
const app = express();
dotenv.config()
app.get('/',(req, res)=>{
    res.send('Api is running....');
})
app.get('/api/product',(req, res)=>{
    res.json(products);
})
app.get('/api/product/:id',(req, res)=>{
    const product = products.find( (p) => p._id === req.params.id)
    res.json(product);
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} at ${PORT}`.grey));

