const express = require("express");
const router = express.Router();
router.use(express.json());




//Controller
const recipeCntrl = require("../controllers/recipes") 

//Call API 
router.get("/recipe/add",recipeCntrl.recipe_create_get);
router.post("/recipe/add",recipeCntrl.recipe_create_post);

router.get("/recipe/index",recipeCntrl.recipe_index_get);
router.get("/recipe/detail", recipeCntrl.recipe_show_get);

router.get("/recipe/edit", recipeCntrl.recipe_edit_get);
router.put("/recipe/update", recipeCntrl.recipe_update_put);

router.delete("/recipe/delete",recipeCntrl.recipe_delete_get);




module.exports=router;