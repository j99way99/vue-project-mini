import mongoose, { Mongoose, Schema } from 'mongoose';
import schemaOptions from './schemaOptions';

mongoose.set('useCreateIndex', true);
const imageSchema = new mongoose.Schema({
  product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      require: true,
  },
  sku_code: String,
  product_id: Number,
  type: Int16Array, // '1-썸네일, 2-제품이미지, 3-제품설명이미지'
  path: String
},
schemaOptions,
);

imageSchema.index({ Product: 1 });
const ImageModel = mongoose.model('Image', imageSchema);

export default ImageModel;
