const mongoose = require('mongoose');

const sneakerSchema = mongoose.Schema({
     id: String,
     name: String,
     price: Number,
     image: String,
})

module.exports = mongoose.model('SneakerSchema', sneakerSchema);

