import express from 'express';
import { Request,Response } from 'express';
import {searchWikipedia} from './controllers/wikiController'
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import {PORT,DATABASE} from '../src/config'

dotenv.config();

const app = express();

//middleware
app.use(express.json());


if(DATABASE)
{
    mongoose.connect(DATABASE).then(()=>{
    console.log('database connected!')
})
}else console.error('Database Variable is undefined')

app.get('/api/wikipedia', searchWikipedia);

app.get('/*',(req:Request, res:Response)=>{
    
    res.status(400).json({
        message:"URL is not defined!"
    })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
