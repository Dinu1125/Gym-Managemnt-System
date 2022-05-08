const express = require("express");
const recordRoutes = express.Router();
const multer = require('multer');

const DIR = './uploads/images';

const storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, DIR);
      },
      //add back the extension
      filename: function (request, file, callback) {
        callback(null, Date.now() + file.originalname);
      },
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

// file uplaod api
recordRoutes.route("/file/uplaod").post(upload.single('profileImg'),function (req, res) {
   
    const url = req.protocol + '://' + req.get('host');
    res.json(url+'/uploads/images/' + req.file.filename);

});

module.exports = recordRoutes;