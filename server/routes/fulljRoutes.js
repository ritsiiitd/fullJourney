import express from "express";
import * as dotenv from 'dotenv';

import { Configuration, OpenAIApi } from 'openai';


dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apikey: process.env.openAI_API,
})

const openai = new OpenAIApi(configuration);

router.route('/').get((req,res)=>{
    res.send("FullJServer");
})

router.route('/').post(async (req,res)=>{
    try {
        const {prompt} = req.body;
        const ai = await openai.createImage({
            prompt,
            n:1,
            size:'1024x1024',
            response_format:'b64_json'
        })

        const image = ai.data.data[0].b64_json;
        res.status(200).json({photo:image});
    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message)
    }
})
export default router;