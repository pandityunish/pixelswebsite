const cors = require('cors');

const express = require("express");
const mongoose = require("mongoose");
const pictureRouter = require('./controller/picture');
const reviewrouter = require('./controller/review');
const messageRouter = require('./controller/messages');


const app = express();

app.use(cors());
app.use(express.json());
app.use(pictureRouter);
app.use(reviewrouter);
app.use(messageRouter);
const PORT =  5001;
mongoose.connect("mongodb+srv://kit23ayns:12345@cluster0.l9q3obe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Connected successfully");
    
  }).catch((e) => {
    console.log(e);
  });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Database connection




