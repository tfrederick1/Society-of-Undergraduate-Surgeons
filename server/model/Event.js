const mongoose = require('mongoose');
const EventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: {String, enum : ["Passed", "Ongoing", "Upcoming"]},
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = ClubEvent = mongoose.model("event", EventSchema);