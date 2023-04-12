
const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
    publicId: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    }
}, {timestamps: true})

// Image Model
const Image = mongoose.model("Image", imageSchema)

// Exports
module.exports = Image;