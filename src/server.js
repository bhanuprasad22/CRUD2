import dotenv from 'dotenv';
import {connectDB} from "./config/dbconnect.js"
import app from "./app.js";

dotenv.config();

connectDB();

const PORT=8000;


app.listen(PORT,()=>{
    console.log(`server is runnign at http:\\localhost:${PORT}`);
})