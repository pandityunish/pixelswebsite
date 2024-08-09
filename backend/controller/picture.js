// routes/pictures.js
const express = require('express');
const Picture = require('../model/PictureModel');
const pictureRouter = express.Router();

// Create a new picture
pictureRouter.post('/pictures', async (req, res) => {
  try {
    const { name, imageUrl, category, datetime } = req.body;
    const picture = new Picture({ name, imageUrl, category, datetime });
    await picture.save();
    res.status(201).send(picture);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all pictures
pictureRouter.get('/pictures', async (req, res) => {
  try {
    const pictures = await Picture.find({});
    res.status(200).send(pictures);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add other routes for update, delete, etc.

module.exports = pictureRouter;
