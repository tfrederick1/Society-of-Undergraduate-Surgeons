const mongoose = require('mongoose');
const ContentSchema = mongoose.Schema({
   pageID: {
       type: Number,
       unique: true,
       required: true
   },
   title: {
       type: String
   },
   subtitle: {
      type: String
   },
   pageContent: [String],
   imgPaths: [String]
})

module.exports = Content = mongoose.model('content', ContentSchema);
