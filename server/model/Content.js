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
   content: {
        type: String,
        required: true
   },
   author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
   },
   postTime: {
       type: Date,
       required: true
   }
})

module.exports = Content = mongoose.model('content', ContentSchema);