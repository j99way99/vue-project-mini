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

// const Comment = require('./Comments');
// const Post = require('./Posts');
_mongoose.default.set('useCreateIndex', true);

const userSchema = new _mongoose.default.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 20
  },
  type: {
    type: Number,
    required: true,
    trim: true,
    maxlength: 2
  },
  nickname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  password: {
    type: String,
    required: true
  },
  insertedDate: {
    type: Date,
    default: Date.now
  }
}, _schemaOptions.default);
const imageSchema = new _mongoose.default.Schema({
  width: Number,
  height: Number
});
userSchema.index({
  email: 1
}, {
  unique: true
});

const UserModel = _mongoose.default.model('Users', userSchema);

var _default = UserModel;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvVXNlck1vZGVsLmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwic2V0IiwidXNlclNjaGVtYSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwidHJpbSIsIm1heGxlbmd0aCIsIk51bWJlciIsIm5pY2tuYW1lIiwicGFzc3dvcmQiLCJpbnNlcnRlZERhdGUiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsInNjaGVtYU9wdGlvbnMiLCJpbWFnZVNjaGVtYSIsIndpZHRoIiwiaGVpZ2h0IiwiaW5kZXgiLCJVc2VyTW9kZWwiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztBQUdBO0FBQ0E7QUFFQUEsa0JBQVNDLEdBQVQsQ0FBYSxnQkFBYixFQUErQixJQUEvQjs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsSUFBSUYsa0JBQVNHLE1BQWIsQ0FDakI7QUFDRUMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLElBQUksRUFBRUMsTUFERDtBQUVMQyxJQUFBQSxRQUFRLEVBQUUsSUFGTDtBQUdMQyxJQUFBQSxNQUFNLEVBQUUsSUFISDtBQUlMQyxJQUFBQSxJQUFJLEVBQUUsSUFKRDtBQUtMQyxJQUFBQSxTQUFTLEVBQUU7QUFMTixHQURUO0FBUUVMLEVBQUFBLElBQUksRUFBRTtBQUNKQSxJQUFBQSxJQUFJLEVBQUVNLE1BREY7QUFFSkosSUFBQUEsUUFBUSxFQUFFLElBRk47QUFHSkUsSUFBQUEsSUFBSSxFQUFFLElBSEY7QUFJSkMsSUFBQUEsU0FBUyxFQUFFO0FBSlAsR0FSUjtBQWNFRSxFQUFBQSxRQUFRLEVBQUU7QUFDUlAsSUFBQUEsSUFBSSxFQUFFQyxNQURFO0FBRVJDLElBQUFBLFFBQVEsRUFBRSxJQUZGO0FBR1JFLElBQUFBLElBQUksRUFBRSxJQUhFO0FBSVJDLElBQUFBLFNBQVMsRUFBRTtBQUpILEdBZFo7QUFvQkVHLEVBQUFBLFFBQVEsRUFBRTtBQUNSUixJQUFBQSxJQUFJLEVBQUVDLE1BREU7QUFFUkMsSUFBQUEsUUFBUSxFQUFFO0FBRkYsR0FwQlo7QUF3QkVPLEVBQUFBLFlBQVksRUFBRTtBQUFFVCxJQUFBQSxJQUFJLEVBQUVVLElBQVI7QUFBY0MsSUFBQUEsT0FBTyxFQUFFRCxJQUFJLENBQUNFO0FBQTVCO0FBeEJoQixDQURpQixFQTJCakJDLHNCQTNCaUIsQ0FBbkI7QUE4QkEsTUFBTUMsV0FBVyxHQUFHLElBQUluQixrQkFBU0csTUFBYixDQUFvQjtBQUN0Q2lCLEVBQUFBLEtBQUssRUFBRVQsTUFEK0I7QUFFdENVLEVBQUFBLE1BQU0sRUFBRVY7QUFGOEIsQ0FBcEIsQ0FBcEI7QUFLQVQsVUFBVSxDQUFDb0IsS0FBWCxDQUFpQjtBQUFFbEIsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FBakIsRUFBK0I7QUFBRUksRUFBQUEsTUFBTSxFQUFFO0FBQVYsQ0FBL0I7O0FBQ0EsTUFBTWUsU0FBUyxHQUFHdkIsa0JBQVN3QixLQUFULENBQWUsT0FBZixFQUF3QnRCLFVBQXhCLENBQWxCOztlQUVlcUIsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgc2NoZW1hT3B0aW9ucyBmcm9tICcuL3NjaGVtYU9wdGlvbnMnO1xuXG5cbi8vIGNvbnN0IENvbW1lbnQgPSByZXF1aXJlKCcuL0NvbW1lbnRzJyk7XG4vLyBjb25zdCBQb3N0ID0gcmVxdWlyZSgnLi9Qb3N0cycpO1xuXG5tb25nb29zZS5zZXQoJ3VzZUNyZWF0ZUluZGV4JywgdHJ1ZSk7XG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgICBtYXhsZW5ndGg6IDIwLFxuICAgIH0sXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0cmltOiB0cnVlLFxuICAgICAgbWF4bGVuZ3RoOiAyLFxuICAgIH0sICAgIFxuICAgIG5pY2tuYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgICBtYXhsZW5ndGg6IDUwLFxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgaW5zZXJ0ZWREYXRlOiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH0sXG4gIH0sXG4gIHNjaGVtYU9wdGlvbnMsXG4pO1xuXG5jb25zdCBpbWFnZVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICB3aWR0aDogTnVtYmVyLFxuICBoZWlnaHQ6IE51bWJlcixcbn0pO1xuXG51c2VyU2NoZW1hLmluZGV4KHsgZW1haWw6IDEgfSwgeyB1bmlxdWU6IHRydWUgfSk7XG5jb25zdCBVc2VyTW9kZWwgPSBtb25nb29zZS5tb2RlbCgnVXNlcnMnLCB1c2VyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlck1vZGVsO1xuIl19