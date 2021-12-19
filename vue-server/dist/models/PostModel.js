"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const Comment = require('./Comments');
const postSchema = new _mongoose.default.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  contents: String,
  createdBy: {
    type: _mongoose.default.SchemaTypes.ObjectId,
    ref: 'Users',
    required: true
  }
}, {
  timestamps: true
}); // postSchema.set('toObject', { virtuals: true });
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

postSchema.index({
  Users: 1,
  title: 1
}, {
  unique: true
});

const PostModel = _mongoose.default.model('Posts', postSchema);

var _default = PostModel;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvUG9zdE1vZGVsLmpzIl0sIm5hbWVzIjpbInBvc3RTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidHJpbSIsIm1heGxlbmd0aCIsImNvbnRlbnRzIiwiY3JlYXRlZEJ5IiwiU2NoZW1hVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInRpbWVzdGFtcHMiLCJpbmRleCIsIlVzZXJzIiwidW5pcXVlIiwiUG9zdE1vZGVsIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHLElBQUlDLGtCQUFTQyxNQUFiLENBQ2pCO0FBQ0VDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxJQUFJLEVBQUVDLE1BREQ7QUFFTEMsSUFBQUEsUUFBUSxFQUFFLElBRkw7QUFHTEMsSUFBQUEsSUFBSSxFQUFFLElBSEQ7QUFJTEMsSUFBQUEsU0FBUyxFQUFFO0FBSk4sR0FEVDtBQU9FQyxFQUFBQSxRQUFRLEVBQUVKLE1BUFo7QUFRRUssRUFBQUEsU0FBUyxFQUFFO0FBQ1ROLElBQUFBLElBQUksRUFBRUgsa0JBQVNVLFdBQVQsQ0FBcUJDLFFBRGxCO0FBRVRDLElBQUFBLEdBQUcsRUFBRSxPQUZJO0FBR1RQLElBQUFBLFFBQVEsRUFBRTtBQUhEO0FBUmIsQ0FEaUIsRUFlakI7QUFBRVEsRUFBQUEsVUFBVSxFQUFFO0FBQWQsQ0FmaUIsQ0FBbkIsQyxDQWtCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQWQsVUFBVSxDQUFDZSxLQUFYLENBQWlCO0FBQUVDLEVBQUFBLEtBQUssRUFBRSxDQUFUO0FBQVliLEVBQUFBLEtBQUssRUFBRTtBQUFuQixDQUFqQixFQUF5QztBQUFFYyxFQUFBQSxNQUFNLEVBQUU7QUFBVixDQUF6Qzs7QUFDQSxNQUFNQyxTQUFTLEdBQUdqQixrQkFBU2tCLEtBQVQsQ0FBZSxPQUFmLEVBQXdCbkIsVUFBeEIsQ0FBbEI7O2VBRWVrQixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbi8vIGNvbnN0IENvbW1lbnQgPSByZXF1aXJlKCcuL0NvbW1lbnRzJyk7XG5cbmNvbnN0IHBvc3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgIG1heGxlbmd0aDogNTAsXG4gICAgfSxcbiAgICBjb250ZW50czogU3RyaW5nLFxuICAgIGNyZWF0ZWRCeToge1xuICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hVHlwZXMuT2JqZWN0SWQsXG4gICAgICByZWY6ICdVc2VycycsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICB7IHRpbWVzdGFtcHM6IHRydWUgfSxcbik7XG5cbi8vIHBvc3RTY2hlbWEuc2V0KCd0b09iamVjdCcsIHsgdmlydHVhbHM6IHRydWUgfSk7XG4vLyBwb3N0U2NoZW1hLnNldCgndG9KU09OJywgeyB2aXJ0dWFsczogdHJ1ZSB9KTtcblxuLy8gcG9zdFNjaGVtYS52aXJ0dWFsKCdjb21tZW50cycsIHtcbi8vICAgcmVmOiAnQ29tbWVudCcsXG4vLyAgIGxvY2FsRmllbGQ6ICdfaWQnLFxuLy8gICBmb3JlaWduRmllbGQ6ICdwb3N0Jyxcbi8vIH0pO1xuXG4vLyBwb3N0U2NoZW1hLm1ldGhvZHMuY3JlYXRlUG9zdCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4vLyAgIGNvbnN0IHBvc3QgPSBuZXcgdGhpcyh7XG4vLyAgICAgdGV4dDogdGV4dCxcbi8vICAgfSk7XG4vLyAgIHJldHVybiBwb3N0LnNhdmUoKTtcbi8vIH07XG5cbi8vIHBvc3RTY2hlbWEucHJlKCdyZW1vdmUnLCBhc3luYyBmdW5jdGlvbiAobmV4dCkge1xuLy8gICBjb25zdCBwb3N0ID0gdGhpcztcbi8vICAgdHJ5IHtcbi8vICAgICBhd2FpdCBDb21tZW50LmRlbGV0ZU1hbnkoeyBwb3N0OiBwb3N0Ll9pZCB9KTtcbi8vICAgICBuZXh0KCk7XG4vLyAgIH0gY2F0Y2ggKGUpIHtcbi8vICAgICBuZXh0KCk7XG4vLyAgIH1cbi8vIH0pO1xuXG5wb3N0U2NoZW1hLmluZGV4KHsgVXNlcnM6IDEsIHRpdGxlOiAxIH0sIHsgdW5pcXVlOiB0cnVlIH0pO1xuY29uc3QgUG9zdE1vZGVsID0gbW9uZ29vc2UubW9kZWwoJ1Bvc3RzJywgcG9zdFNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RNb2RlbDtcbiJdfQ==