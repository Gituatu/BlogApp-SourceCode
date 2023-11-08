const mongoose= require('mongoose')
const colors= require('colors')

const connectDB= async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected to ${mongoose.connection.host}`.green);
    } catch (error) {
        console.log(`MongoDB connection ERROR ${error}`.bgRed.white);
    }
}

module.exports= connectDB;