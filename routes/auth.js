const express = require('express');
const router = express.Router()

// Controller
const auth = require("../controllers/auth");

router.use(express.json())

// Routes
router.get("/auth/signup", auth.auth_signup_get);
router.post("/auth/signup", auth.auth_signup_post);

router.get('/auth/signin', auth.auth_signin_get);
router.post('/auth/signin', auth.auth_signin_post);

router.get("/auth/logout", auth.auth_logout_get);


// Exports
module.exports = router;