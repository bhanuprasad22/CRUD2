import dotenv from 'dotenv';
import {connectDB} from "./config/dbconnect"
import app from, "./app";

dotenv.config();

connectDB();

const PORT=8000;


app.listen(PORT,()=>{
    console.log(`server is runnign at http:\\localhost:${PORT}`);
})