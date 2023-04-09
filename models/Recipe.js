const mongoose = require('mongoose')

// recipe Schema
const recipeSchema = mongoose.Schema({
    name: String,
    ingredient: String,
    step: String,
},
{ timestamps: true}) 


// Recipe Model
const Recipe = mongoose.model("Recipe", recipeSchema);

// Export model to share it with controller
module.exports = Recipe;