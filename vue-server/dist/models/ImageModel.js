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

_mongoose.default.set('useCreateIndex', true);

const imageSchema = new _mongoose.default.Schema({
  product: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Product',
    require: true
  },
  sku_code: String,
  product_id: Number,
  type: Int16Array,
  // '1-썸네일, 2-제품이미지, 3-제품설명이미지'
  path: String
}, _schemaOptions.default);
imageSchema.index({
  Product: 1
});

const ImageModel = _mongoose.default.model('Image', imageSchema);

var _default = ImageModel;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvSW1hZ2VNb2RlbC5qcyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInNldCIsImltYWdlU2NoZW1hIiwiU2NoZW1hIiwicHJvZHVjdCIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicmVxdWlyZSIsInNrdV9jb2RlIiwiU3RyaW5nIiwicHJvZHVjdF9pZCIsIk51bWJlciIsIkludDE2QXJyYXkiLCJwYXRoIiwic2NoZW1hT3B0aW9ucyIsImluZGV4IiwiUHJvZHVjdCIsIkltYWdlTW9kZWwiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztBQUVBQSxrQkFBU0MsR0FBVCxDQUFhLGdCQUFiLEVBQStCLElBQS9COztBQUNBLE1BQU1DLFdBQVcsR0FBRyxJQUFJRixrQkFBU0csTUFBYixDQUFvQjtBQUN0Q0MsRUFBQUEsT0FBTyxFQUFFO0FBQ0xDLElBQUFBLElBQUksRUFBRUwsa0JBQVNHLE1BQVQsQ0FBZ0JHLEtBQWhCLENBQXNCQyxRQUR2QjtBQUVMQyxJQUFBQSxHQUFHLEVBQUUsU0FGQTtBQUdMQyxJQUFBQSxPQUFPLEVBQUU7QUFISixHQUQ2QjtBQU10Q0MsRUFBQUEsUUFBUSxFQUFFQyxNQU40QjtBQU90Q0MsRUFBQUEsVUFBVSxFQUFFQyxNQVAwQjtBQVF0Q1IsRUFBQUEsSUFBSSxFQUFFUyxVQVJnQztBQVFwQjtBQUNsQkMsRUFBQUEsSUFBSSxFQUFFSjtBQVRnQyxDQUFwQixFQVdwQkssc0JBWG9CLENBQXBCO0FBY0FkLFdBQVcsQ0FBQ2UsS0FBWixDQUFrQjtBQUFFQyxFQUFBQSxPQUFPLEVBQUU7QUFBWCxDQUFsQjs7QUFDQSxNQUFNQyxVQUFVLEdBQUduQixrQkFBU29CLEtBQVQsQ0FBZSxPQUFmLEVBQXdCbEIsV0FBeEIsQ0FBbkI7O2VBRWVpQixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IE1vbmdvb3NlLCBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgc2NoZW1hT3B0aW9ucyBmcm9tICcuL3NjaGVtYU9wdGlvbnMnO1xuXG5tb25nb29zZS5zZXQoJ3VzZUNyZWF0ZUluZGV4JywgdHJ1ZSk7XG5jb25zdCBpbWFnZVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBwcm9kdWN0OiB7XG4gICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICByZWY6ICdQcm9kdWN0JyxcbiAgICAgIHJlcXVpcmU6IHRydWUsXG4gIH0sXG4gIHNrdV9jb2RlOiBTdHJpbmcsXG4gIHByb2R1Y3RfaWQ6IE51bWJlcixcbiAgdHlwZTogSW50MTZBcnJheSwgLy8gJzEt7I2464Sk7J28LCAyLeygnO2SiOydtOuvuOyngCwgMy3soJztkojshKTrqoXsnbTrr7jsp4AnXG4gIHBhdGg6IFN0cmluZ1xufSxcbnNjaGVtYU9wdGlvbnMsXG4pO1xuXG5pbWFnZVNjaGVtYS5pbmRleCh7IFByb2R1Y3Q6IDEgfSk7XG5jb25zdCBJbWFnZU1vZGVsID0gbW9uZ29vc2UubW9kZWwoJ0ltYWdlJywgaW1hZ2VTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZU1vZGVsO1xuIl19