var express = require('express');
var router = express.Router();
var multer = require('multer');
var thumb = require('node-thumbnail').thumb;
var Image = require('../models/image');
var DIR = './public/upload/';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

var upload = multer({ storage: storage });

//upload image
router.post("/upload-image", upload.single('photo'), (req, res, next) => {
  thumb({
    source: req.file.destination + "/" + req.file.filename,
    destination: './public/thumbnails/',
    width: 350
  }).then((data) => {
    console.log(data);
    var newUpload = new Image({
      name: req.body.name,
      tag: req.body.tag,
      description: req.body.description,
      thumbnail: data[0].dstPath.slice(7),
      image: 'upload/' + req.file.filename
    });
    Image.saveUpload(newUpload, (err, data) => {
      if (err) {
        throw err;
      } else {
        res.json({
          status: '200',
          success: true,
          messege: "Success upload"
        });
      }
    })
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
      success: false,
      messege: "Failed to upload and generate thumbnail"
    })
  })
});

//get recent uploads
router.get("/images/recent", (req, res, next) => {
  Image.getRecentUploads((err, images) => {
    if (err) {
      throw err;
    } else {
      res.json({
        images: images
      })
    }
  })
})

router.get("/images/tags", (req, res, next) => {
  Image.getTags((err, tags) => {
    if (err) {
      throw err;
    } else {
      res.json({
        tags: tags
      })
    }
  })
})

router.get("/images/tag/:tag", (req, res, next) => {
  const tag = req.params.tag;
  Image.getTagUploads(tag, (err, images) => {
    if (err) {
      throw err;
    } else {
      console.log(tag);
      res.json({
        images: images
      })
    }
  })
})

module.exports = router;
