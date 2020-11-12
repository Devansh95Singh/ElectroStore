import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://dev9599:dev9599@devstore.vvbxm.mongodb.net/ElectroStore?retryWrites=true&w=majority', { 
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDb connected ${conn.connection.host}`.cyan.underline)
        
    } catch (error) {
        console.log(`Error: ${error.message}`.red)
        process.exit(1);
        
    }
}
export default connectDb