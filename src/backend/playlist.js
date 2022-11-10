const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  sid: {
    type: String,
    required: true,
    trim: true,
  },
  bpm: {
     type: String,
     required: true,
     trim: true,
  },
  genre: {
    type: String,
    required: true,
    trim: true,
  }
}, {collection : 'playlist_list'});

module.exports = PlaylistSchema;