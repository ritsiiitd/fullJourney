import express from "express";
import * as dotenv from 'dotenv';


import { generateImageFiles, generateImagesLinks } from "bimg";


dotenv.config();

const router = express.Router();

router.route('/').post(async (req,res)=>{
    try {
        const {prompt} = req.body;
        const imageLinks = await generateImagesLinks(prompt); // returns an array of 4 image links
        const imageFiles = await generateImageFiles(prompt); // returns an array of 4 image files
        // const image = ai.data.data[0].b64_json;
        console.log("-----------------------");
        console.log(imageLinks);
        console.log("-----------------------");
        res.status(200).json({imageLinks});
    } catch (error) {
        console.log(error.status);
        res.send(500).json({message:"Could not"});
    }
})
export default router;