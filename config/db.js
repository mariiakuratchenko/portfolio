const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect('mongodb+srv://admin_db_user:dactQ30W7vB4BFtN@cluster001.qxstwe4.mongodb.net/Portfolio');

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection error:'));
    mongodb.once('open', () => {
        console.log('===> Connected to Portfolio MongoDB database.');
    });
}

module.exports = connectDB;
