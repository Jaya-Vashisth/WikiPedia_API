import { Request,Response } from 'express';
import {WikipediaEntries} from '../models/wikiModel';
import wiki from 'wikipedia';


//function to fecth data from database if present else from api and saving it to database
export const searchWikipedia =async (req:Request, res: Response) => {

    //getting query from request 
    const query = req.query.query as string;

   //find from database
    const wikiPedia = await WikipediaEntries.findOne({title: { $regex: new RegExp(query, 'i') } });


    //if present send it to client
    if(wikiPedia){
        
        res.status(200).json({
            summary: wikiPedia,
        })
    }
    else
    {  
        //fetch from wikipedia , save to it to database and send to client
      try {
          const page = await wiki.page(query);
          const summary = await page.summary();
          
       
          const newWiki = await WikipediaEntries.create(summary);
          console.log('created')
        
          res.status(200).json({
            summary: newWiki,
          })
        
      } catch (error) {
        
        const errorName = (error as Error).name;


        //if user query don't match
        if(errorName === 'pageError')
            res.status(400).json({
                 message:"There is no conent matching this query!"
            })
        else
          res.status(500).json({
            message:"Couldn't fecth data. Please try after some time",
            
          })
      }
          
    }
          
}     

       


    