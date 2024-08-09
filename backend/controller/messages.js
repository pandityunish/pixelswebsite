// routes/messages.js
const express = require('express');
const Message = require('../model/MessagesModel');
const messageRouter = express.Router();

// Create a new message
messageRouter.post('/messages', async (req, res) => {
  try {
    const { firstName, lastName, address, emailAddress, message, datetime } = req.body;
    const newMessage = new Message({ firstName, lastName, address, emailAddress, message, datetime });
    await newMessage.save();
    res.status(201).send(newMessage);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all messages
messageRouter.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find({});
    res.status(200).send(messages);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add other routes for update, delete, etc.

module.exports = messageRouter;
