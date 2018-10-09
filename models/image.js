const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    name: { type: String },
    description: { type: String },
    tag: { type: String },
    thumbnail: { type: String },
    image: { type: String }
});

const Image = module.exports= mongoose.model('Image', ImageSchema);

module.exports.getRecentUploads = async function(callback) {
    await Image.find({}).sort('-date').limit(8).exec(callback);
}

module.exports.saveUpload = async function(newUpload, callback) {
    newUpload.save(callback);
}

module.exports.getTagUploads = async function(tag, callback) {
    await Image.find({tag: tag}, callback);
}

module.exports.getTags = async function(callback) {
    await Image.find().distinct('tag', callback);
}