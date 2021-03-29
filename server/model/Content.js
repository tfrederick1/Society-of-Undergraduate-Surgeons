const mongoose = require('mongoose');
const ContentSchema = mongoose.Schema({
   pageID: {
       type: Number,
       required: true
   },
    title: {
       type: String,
       required: true
   },
   pageContent: {
        type: String,
        required: true
   },
   imgPaths: [String]
})

module.exports = Content = mongoose.model('content', ContentSchema);