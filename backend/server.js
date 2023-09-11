import express from 'express' 
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import colors from 'colors'
import cookieParser from 'cookie-parser';
import { notFound, errorHandler} from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

connectDb()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
dotenv.config()
app.get('/',(req, res)=>{
    res.send('Api is running....');
})
app.use('/api/user', userRoutes);
app.use('/', productRoutes)
app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} at ${PORT}`.grey));

