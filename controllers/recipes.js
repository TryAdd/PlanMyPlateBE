const Recipe = require("../models/Recipe");




// HTTP GET - Load Recipe Form
exports.recipe_create_get = (req,res)=>{
    Recipe.find()
    .then((recipes)=>{
        res.render("recipe/add",{recipes}) 
    })
    .catch(err=>{
        console.log(err)
    })
}

// HTTP POST - to post the data 
exports.recipe_create_post = (req,res)=>{

    let recipe = new Recipe(req.body);
    console.log(req.body);

    //Save Recipe in database 
    recipe.save()
    .then((recipes)=>{
        res.json({recipes});
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!!!");
    })

}

//HTTP GET - index:
exports.recipe_index_get = (req,res)=>{
    Recipe.find()
    .then(recipes=>{
        res.json({recipes});
    })
    .catch(err=>{
        console.log(err);
    })
}

// HTTP GET - Load Recipe Edit Form
exports.recipe_edit_get = (req, res) => {
    Recipe.findById(req.query.id)
    .then(recipe => {
        res.json({recipe});
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP PUT - Recipe Update
exports.recipe_update_put = (req, res) => {
    console.log(req.body._id);
    Recipe.findByIdAndUpdate(req.body._id, req.body, {new : true})
    .then((recipe) => {
        res.json({recipe});
    })
    .catch(err => {
        console.log(err)
    });
}

  // HTTP DELETE -  Recipe
  exports.recipe_delete_get = (req, res) => {
    console.log(req.query.id);
    Recipe.findByIdAndDelete(req.query.id)
    .then((author)=>{
        // res.redirect("/author/index");
        res.json({author})
    })
    .catch(err => {
        console.log(err);
    })
};
