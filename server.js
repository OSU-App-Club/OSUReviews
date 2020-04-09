const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;
const mongoUser = process.env.USERNAME;
const mongoPassword = process.env.PASSWORD;

mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPassword}@paprplanemongo-wy4yv.mongodb.net/test?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, () => console.log(`Server started on port ${port}`));