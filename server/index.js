import express from "express";
const app = express();
import cors from "cors";
import connectToMongo from './config/db.js';
import userRoutes from './routes/user.js';
const PORT = process.env.PORT || 8000;  // 8000 is a 'fallback value'

connectToMongo();

// Applying middleware
app.use(express.json());

// cors
app.use(cors())

app.get('/', (req, res)=>{
    res.send("api is running");
})

// routes
app.use('/api/v1', userRoutes);

app.listen(PORT, ()=>{
    console.log(`Api is running on http://localhost:${PORT}`);
})