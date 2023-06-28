import express from 'express';
import cors from 'cors';
import * as dotenv from "dotenv";
import postRoutes from './routes/postRoutes.js';
import fulljRoutes from './routes/fulljRoutes.js';
import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/fullJourney',fulljRoutes);

app.get('/',async(req,res)=>{
    res.send('hello from fullJourney server');
})


const startServer = async() =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(8080,()=> console.log('Server running on http://localhost:8080'));
    } catch (error) {
        console.log(error);
    }
}

startServer();