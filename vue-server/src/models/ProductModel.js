import mongoose, { Mongoose, Schema } from 'mongoose';
import schemaOptions from './schemaOptions';

const imageSchema = new mongoose.Schema({
  width: Number,
  height: Number
});

mongoose.set('useCreateIndex', true);
const productSchima = new mongoose.Schema({
  sku_code: {
      type: String,
      // required: 'Please enter product sku code.',
      // unique: true,
      // trim: true,
      maxlength: 20,
    },
  product_name: String,
  product_price: Number,
  delivery_price: Number,
  add_delivery_price: Number,
  tags: String,
  seller_id: Number,
  category_id: Number,
  active_yn: String,
},
schemaOptions,);

//productSchima.index({ sku_code: 1 }, { unique: true });
const ProductModel = mongoose.model('Product', productSchima);

export default ProductModel;
