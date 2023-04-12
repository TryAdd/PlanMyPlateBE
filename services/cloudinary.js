const cloudinary = require("cloudinary")

// Cloudinary Config
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

uploadToCloudinary = (path, folder) => {
    return cloudinary.v2.uploader.upload(path, {
        folder
    })
    .then ((res) => {
        return {url: res.url, public_id: res.public_id}
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = uploadToCloudinary