const mongoose = require('mongoose');

const uri = 'mongodb://0.0.0.0:27017/cubicle-may-2023';

async function dbConnect() {
    await mongoose.connect(uri)
};

module.exports = dbConnect;
