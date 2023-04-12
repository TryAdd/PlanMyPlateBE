// Dependencies
const express = require('express');


// Model
const Image = require("../models/Image")
const Recipe = require("../models/Recipe")

// Initialize Router functionality
const router = express.Router();

// Cloudinary Service
const uploadToCloudinary = require('../services/cloudinary')

// Multer Middelware
const upload = require('../middeleware/upload');
// const { default: Recipe } = require('../../PlanMyPlanFE/src/recipe/Recipe');

// POST - Upload Image
router.post("/image/upload", upload.any("image"), async (req, res) => {
    try {
        // Loop Through Selected Files - "req.files" is part of Multer Middleware when uploading multiple files, "req.file" is for a single file
        for (let i = 0; i < req.files.length; i++) {
            // Create Image
            // const image = new Image()
            // await image.save()

            // Upload Image to Cloudinary - "uploaded=images" is a folder I created on the Cloudinary website, you can make one and name it anything
            const data = await uploadToCloudinary(req.files[i].path, "uploaded-images",{new:true});
            // Save imageUrl and publicId to MongoDB
            const recipe = await Recipe.findByIdAndUpdate(req.query.id,{
                imageUrl: data.url,
                publicId: data.public_id,
            }
            )
            console.log(recipe)
        }
        res.status(200).send("Image(s) Uploaded Successfully")
    }
    catch (err) {
        res.status(400).send(err)
    }
})


  

// Export to other files
module.exports = router;