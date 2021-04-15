const mongoose = require('mongoose');
const ContentSchema = mongoose.Schema({
   pageID: {
       type: Number,
       required: true
   },
   title: {
       type: String,
       required: false
   },
   subtitle: {
      type: String,
      required: false
   },
   pageContent: [String],
   imgPaths: [String]
})

module.exports = Content = mongoose.model('content', ContentSchema);
