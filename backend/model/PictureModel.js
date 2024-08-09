// models/Picture.js
const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  datetime: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;
