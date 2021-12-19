"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _schemaOptions = _interopRequireDefault(require("./schemaOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const imageSchema = new _mongoose.default.Schema({
  width: Number,
  height: Number
});

_mongoose.default.set('useCreateIndex', true);

const productSchima = new _mongoose.default.Schema({
  sku_code: {
    type: String,
    // required: 'Please enter product sku code.',
    // unique: true,
    // trim: true,
    maxlength: 20
  },
  product_name: String,
  product_price: Number,
  delivery_price: Number,
  add_delivery_price: Number,
  tags: String,
  seller_id: Number,
  category_id: Number,
  active_yn: String
}, _schemaOptions.default); //productSchima.index({ sku_code: 1 }, { unique: true });

const ProductModel = _mongoose.default.model('Product', productSchima);

var _default = ProductModel;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvUHJvZHVjdE1vZGVsLmpzIl0sIm5hbWVzIjpbImltYWdlU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJ3aWR0aCIsIk51bWJlciIsImhlaWdodCIsInNldCIsInByb2R1Y3RTY2hpbWEiLCJza3VfY29kZSIsInR5cGUiLCJTdHJpbmciLCJtYXhsZW5ndGgiLCJwcm9kdWN0X25hbWUiLCJwcm9kdWN0X3ByaWNlIiwiZGVsaXZlcnlfcHJpY2UiLCJhZGRfZGVsaXZlcnlfcHJpY2UiLCJ0YWdzIiwic2VsbGVyX2lkIiwiY2F0ZWdvcnlfaWQiLCJhY3RpdmVfeW4iLCJzY2hlbWFPcHRpb25zIiwiUHJvZHVjdE1vZGVsIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsSUFBSUMsa0JBQVNDLE1BQWIsQ0FBb0I7QUFDdENDLEVBQUFBLEtBQUssRUFBRUMsTUFEK0I7QUFFdENDLEVBQUFBLE1BQU0sRUFBRUQ7QUFGOEIsQ0FBcEIsQ0FBcEI7O0FBS0FILGtCQUFTSyxHQUFULENBQWEsZ0JBQWIsRUFBK0IsSUFBL0I7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHLElBQUlOLGtCQUFTQyxNQUFiLENBQW9CO0FBQ3hDTSxFQUFBQSxRQUFRLEVBQUU7QUFDTkMsSUFBQUEsSUFBSSxFQUFFQyxNQURBO0FBRU47QUFDQTtBQUNBO0FBQ0FDLElBQUFBLFNBQVMsRUFBRTtBQUxMLEdBRDhCO0FBUXhDQyxFQUFBQSxZQUFZLEVBQUVGLE1BUjBCO0FBU3hDRyxFQUFBQSxhQUFhLEVBQUVULE1BVHlCO0FBVXhDVSxFQUFBQSxjQUFjLEVBQUVWLE1BVndCO0FBV3hDVyxFQUFBQSxrQkFBa0IsRUFBRVgsTUFYb0I7QUFZeENZLEVBQUFBLElBQUksRUFBRU4sTUFaa0M7QUFheENPLEVBQUFBLFNBQVMsRUFBRWIsTUFiNkI7QUFjeENjLEVBQUFBLFdBQVcsRUFBRWQsTUFkMkI7QUFleENlLEVBQUFBLFNBQVMsRUFBRVQ7QUFmNkIsQ0FBcEIsRUFpQnRCVSxzQkFqQnNCLENBQXRCLEMsQ0FtQkE7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHcEIsa0JBQVNxQixLQUFULENBQWUsU0FBZixFQUEwQmYsYUFBMUIsQ0FBckI7O2VBRWVjLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgTW9uZ29vc2UsIFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBzY2hlbWFPcHRpb25zIGZyb20gJy4vc2NoZW1hT3B0aW9ucyc7XG5cbmNvbnN0IGltYWdlU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHdpZHRoOiBOdW1iZXIsXG4gIGhlaWdodDogTnVtYmVyXG59KTtcblxubW9uZ29vc2Uuc2V0KCd1c2VDcmVhdGVJbmRleCcsIHRydWUpO1xuY29uc3QgcHJvZHVjdFNjaGltYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBza3VfY29kZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgLy8gcmVxdWlyZWQ6ICdQbGVhc2UgZW50ZXIgcHJvZHVjdCBza3UgY29kZS4nLFxuICAgICAgLy8gdW5pcXVlOiB0cnVlLFxuICAgICAgLy8gdHJpbTogdHJ1ZSxcbiAgICAgIG1heGxlbmd0aDogMjAsXG4gICAgfSxcbiAgcHJvZHVjdF9uYW1lOiBTdHJpbmcsXG4gIHByb2R1Y3RfcHJpY2U6IE51bWJlcixcbiAgZGVsaXZlcnlfcHJpY2U6IE51bWJlcixcbiAgYWRkX2RlbGl2ZXJ5X3ByaWNlOiBOdW1iZXIsXG4gIHRhZ3M6IFN0cmluZyxcbiAgc2VsbGVyX2lkOiBOdW1iZXIsXG4gIGNhdGVnb3J5X2lkOiBOdW1iZXIsXG4gIGFjdGl2ZV95bjogU3RyaW5nLFxufSxcbnNjaGVtYU9wdGlvbnMsKTtcblxuLy9wcm9kdWN0U2NoaW1hLmluZGV4KHsgc2t1X2NvZGU6IDEgfSwgeyB1bmlxdWU6IHRydWUgfSk7XG5jb25zdCBQcm9kdWN0TW9kZWwgPSBtb25nb29zZS5tb2RlbCgnUHJvZHVjdCcsIHByb2R1Y3RTY2hpbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TW9kZWw7XG4iXX0=