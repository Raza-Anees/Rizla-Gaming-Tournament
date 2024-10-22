const mongoose = require('mongoose')

const pubgUsers = new mongoose.Schema({
    Squad: String,
    Player1: String,
    Player2: String,
    Player3: String,
    Player4: String
});
module.exports = mongoose.model('pubg', pubgUsers);