const express = require('express')
const mongoose = require('mongoose')


// Require and initialze dotenv
require('dotenv').config();

// const port = 4000
const port = process.env.PORT;

// for mongoose strict
mongoose.set('strictQuery', false);

// Initailze Express
const app = express();



// Look for all the static files in public folder (css, JS, Images, Audio, Videos).
app.use(express.static("public"));

// Require Express-EJS-Layouts
const expressLayouts = require("express-ejs-layouts");

// Look in to views folder for a file named layout.ejs
app.use(expressLayouts);

// Node.js to look in a folder views for all the ejs files.
app.set("view engine", "ejs");

// MongoDB Connection
mongoose.connect(process.env.MongoDBURL, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log("MongoDB Connected Successfully")
    }
)

// Listen to specific port for incomming requests
app.listen(port, () => {
    console.log(`PlanMyPlate is running on ${port}`);
})


// import routers
const indexRoute = require('./routes/index')
const authRoute = require('./routes/auth');
const recipeRoute = require('./routes/recipes')
const imageRoute = require('./routes/image');



// Mounts Routes
app.use('/',indexRoute)
app.use('/', authRoute);
app.use('/',recipeRoute);
app.use('/', imageRoute);