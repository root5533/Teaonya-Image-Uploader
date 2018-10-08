var express = require('express');
var router = express.Router();
var multer = require('multer');
var thumb = require('node-thumbnail').thumb;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

var upload = multer({ storage: storage });

router.post("/upload-image", upload.single('photo'), (req, res, next) => {
  console.log(req.file.destination, " ", req.file.filename);
  thumb({
    source: req.file.destination + "/" + req.file.filename,
    destination: './thumbnails/',
    width: 350
  }).then((data) => {
    console.log('data is ', data[0].dstPath);
    res.json({
      status: '200',
      success: true,
      messege: "Success upload",
      file: req.file.filename,
      thumbnail: data[0].dstPath
    });
  }).catch((err) => {
    console.log(err);
    res.json({
      status: '500',
      success: false,
      messege: "failed to upload and generate thumbnail"
    })
  })
});

module.exports = router;
