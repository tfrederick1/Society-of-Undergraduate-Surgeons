const mongoose = require('mongoose');
const EventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: {String, enum : ["Eneded", "Ongoing", "Upcoming"]},
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String
    }
})

module.exports = ClubEvent = mongoose.model("event", EventSchema);