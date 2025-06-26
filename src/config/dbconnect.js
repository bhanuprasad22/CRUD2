import mongoose from 'mongoose';

const connectdb=async()=>{
   try {
        await mongoose.connect("...")
        console.log("mongodb connected");
   } catch (error) {
        console.log("mongodb connection failed",error.message);
        process.exit(1);//it terminates the code
   }
}

