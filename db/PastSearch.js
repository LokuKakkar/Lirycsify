const mongoose = require("mongoose");

const searchSchema = {
    songName: String,
    albumName: String,
    songGenre: String
};
// CREATE MODEL
module.exports = mongoose.model("Search", itemsSchema);
