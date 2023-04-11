const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// recipe Schema
const recipeSchema = mongoose.Schema({
    name: String,
    ingredients: [String],
    step: String,
},
{ timestamps: true}) 


// Recipe Model
const Recipe = mongoose.model("Recipe", recipeSchema);

// Export model to share it with controller
module.exports = Recipe;