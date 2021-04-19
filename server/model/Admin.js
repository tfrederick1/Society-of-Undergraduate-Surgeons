const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});

module.exports = Admin = mongoose.model('admin', AdminSchema);