const mongoose = require('mongoose')

const freefireUsers = new mongoose.Schema({
    Squad: String,
    Player1: String,
    Player2: String,
    Player3: String,
    Player4: String
});
module.exports = mongoose.model('freefire', freefireUsers);