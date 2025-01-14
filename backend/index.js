import express from 'express';
import connectDb from './config/db.js';
import cors from "cors"
import {router as authorRouter} from './routes/authorRoutes.js'
import  {router as blogPostRoute} from './routes/blogPostRoute.js'
const app = express();
app.use(express.json());
app.use(cors());
connectDb();

app.get('/', (req, res) =>{
    res.send("Server in funzione");
}) 

//console.log(getAllAuthors());

app.use('/api/authors', authorRouter);

app.use('/api/blogposts', blogPostRoute);

app.listen(3001,()=>{
    console.log("SERVERINO CONNESSO");
});