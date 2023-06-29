import express from "express";
import * as dotenv from 'dotenv';

import {v2 as cloudinary} from 'cloudinary';

import imageSchema from '../mongodb/schema.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET,
})
//get saved image
router.route('/').get(async(req,res)=>{
    try {
        const posts = await imageSchema.find({});
        res.send(200).json({success:true, data:posts});
    } catch (error) {
        res.send(500).json({success:false, message:error});
    }
});

//save an image
router.route('/').post(async(req,res)=>{
    try {
        const { name, prompt, photo} = req.body;
        console.log(name);
        console.log(prompt);
        console.log(photo);
        const photoUrl = await cloudinary.uploader.upload(photo);//get cloudinary url
        //save to mongoDB database
        const newSave = await imageSchema.create({
            title:name,
            prompt,
            photo:photoUrl.url,
        })
        console.log("uploaded",newSave);
        res.send(200);
    } catch (error) {
        res.send(500).json({message:"Could not"});
        // console.log(error);
    }
});

export default router;