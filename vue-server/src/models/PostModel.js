import mongoose from 'mongoose';
// const Comment = require('./Comments');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    contents: String,
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Users',
      required: true,
    },
  },
  { timestamps: true },
);

// postSchema.set('toObject', { virtuals: true });
// postSchema.set('toJSON', { virtuals: true });

// postSchema.virtual('comments', {
//   ref: 'Comment',
//   localField: '_id',
//   foreignField: 'post',
// });

// postSchema.methods.createPost = function (text) {
//   const post = new this({
//     text: text,
//   });
//   return post.save();
// };

// postSchema.pre('remove', async function (next) {
//   const post = this;
//   try {
//     await Comment.deleteMany({ post: post._id });
//     next();
//   } catch (e) {
//     next();
//   }
// });

postSchema.index({ Users: 1, title: 1 }, { unique: true });
const PostModel = mongoose.model('Posts', postSchema);

export default PostModel;
