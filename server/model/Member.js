const mongoose = require('mongoose');
const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    position: {
        type: String,
        required: true
    }
});

module.exports = Member = mongoose.model('member', MemberSchema);