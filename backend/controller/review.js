// routes/reviews.js
const express = require('express');
const Review = require('../model/ReviewModel');
const reviewrouter = express.Router();

// Create a new review
reviewrouter.post('/reviews', async (req, res) => {
  try {
    const { firstName, lastName, email, address, photoUrl, message } = req.body;
    const review = new Review({ firstName, lastName, email, address, photoUrl, message });
    await review.save();
    res.status(201).send(review);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all reviews
reviewrouter.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).send(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add other routes for update, delete, etc.

module.exports = reviewrouter;
