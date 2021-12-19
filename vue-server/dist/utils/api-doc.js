"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _apiSpec = _interopRequireDefault(require("./api-spec.json"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.use('/docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_apiSpec.default));
router.use('/api/v1', router);
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9hcGktZG9jLmpzIl0sIm5hbWVzIjpbInJvdXRlciIsInVzZSIsInN3YWdnZXJVaSIsInNlcnZlIiwic2V0dXAiLCJzd2FnZ2VyRG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBLE1BQU1BLE1BQU0sR0FBRyxzQkFBZjtBQUVBQSxNQUFNLENBQUNDLEdBQVAsQ0FBVyxPQUFYLEVBQW9CQywwQkFBVUMsS0FBOUIsRUFBcUNELDBCQUFVRSxLQUFWLENBQWdCQyxnQkFBaEIsQ0FBckM7QUFDQUwsTUFBTSxDQUFDQyxHQUFQLENBQVcsU0FBWCxFQUFzQkQsTUFBdEI7ZUFFZUEsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzd2FnZ2VyVWkgZnJvbSAnc3dhZ2dlci11aS1leHByZXNzJztcbmltcG9ydCBzd2FnZ2VyRG9jdW1lbnQgZnJvbSAnLi9hcGktc3BlYy5qc29uJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci51c2UoJy9kb2NzJywgc3dhZ2dlclVpLnNlcnZlLCBzd2FnZ2VyVWkuc2V0dXAoc3dhZ2dlckRvY3VtZW50KSk7XG5yb3V0ZXIudXNlKCcvYXBpL3YxJywgcm91dGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19