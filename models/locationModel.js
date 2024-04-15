const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number },
  user_id: { type: String, required: true },
});

module.exports = mongoose.model('Location', locationSchema);