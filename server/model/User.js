const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: {String, enum: ["Admin", "User"]},
        default: "User",
        required: true
    }
});

module.exports = User = mongoose.model('user', UserSchema);