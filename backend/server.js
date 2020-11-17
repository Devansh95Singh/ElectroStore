import express from 'express' 
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler} from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'

connectDb()
const app = express();
dotenv.config()
app.get('/',(req, res)=>{
    res.send('Api is running....');
})
app.use('/api/products', productRoutes)
app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} at ${PORT}`.grey));

