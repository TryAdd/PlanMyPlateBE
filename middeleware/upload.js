const multer = require("multer")

// Setting Up Multer Engine
const storage = multer.diskStorage({})
const upload = multer({storage: storage})

module.exports = upload