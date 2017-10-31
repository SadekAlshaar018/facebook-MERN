const mongoose = require('mongoose');


//add schema for posts in database
let PostSchema = mongoose.Schema({
  text:{
    type: String,
    required: true
  },
  user:{
    type:String,
    required: true
  },
  date:{
    type:Date,
    required: true
  },
  vote:{
    type:Number,
    default: 0
  }
});

module.exports = mongoose.model('posts', PostSchema);
