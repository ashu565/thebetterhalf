const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      index: true,
    },
    postId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Post',
      index: true,
    },
  },
  { timestamps: true }
);
LikeSchema.index({ userId: 1, postId: 1 }, { unique: true });
const Like = mongoose.model('Like', LikeSchema);
module.exports = Like;
