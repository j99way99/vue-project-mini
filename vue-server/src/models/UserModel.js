import mongoose, { Schema } from 'mongoose';
import schemaOptions from './schemaOptions';


// const Comment = require('./Comments');
// const Post = require('./Posts');

mongoose.set('useCreateIndex', true);
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 20,
    },
    type: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 2,
    },    
    nickname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
    },
    insertedDate: { type: Date, default: Date.now },
  },
  schemaOptions,
);

const imageSchema = new mongoose.Schema({
  width: Number,
  height: Number,
});

userSchema.index({ email: 1 }, { unique: true });
const UserModel = mongoose.model('Users', userSchema);

export default UserModel;
