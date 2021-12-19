"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ProductModel = _interopRequireDefault(require("../models/ProductModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// router init
const router = (0, _express.Router)();
router.post('/', async (req, res) => {
  try {
    const doc = await _ProductModel.default.create(_objectSpread({}, req.body));
    res.status(201).json({
      data: doc
    });
  } catch (error) {
    console.log(error + '????');

    if (error.code === 11000) {
      return res.status(400).send({
        message: 'Duplicated Data',
        error
      });
    }

    res.status(400).send({
      message: 'sth wrong',
      error
    });
  }
});
router.get('/', async (req, res) => {
  try {
    const docs = await _ProductModel.default.find().lean().exec();
    res.status(200).json({
      products: docs
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'sth wrong',
      error
    });
  }
}); // router.get('/:sku_code', async (req, res) => {
//   try {
//     const doc = await ProductModel.findOne({
//       sku_code: req.params.sku_code,
//     })
//       .lean()
//       .exec();
//     if (!doc) {
//       return res.status(400).json({ message: 'The data is not found' });
//     }
//     res.status(200).json({ ...doc });
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ message: 'sth wrong', error });
//   }
// });

router.get('/:id', async (req, res) => {
  try {
    const doc = await _ProductModel.default.findOne({
      _id: req.params.id
    }).lean().exec();

    if (!doc) {
      return res.status(400).json({
        message: 'The data is not found'
      });
    }

    res.status(200).json(_objectSpread({}, doc));
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'sth wrong',
      error
    });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const updatedDoc = await _ProductModel.default.findOneAndUpdate({
      _id: req.params.id
    }, req.body, {
      new: true
    }).lean().exec();

    if (!updatedDoc) {
      return res.status(400).json({
        message: 'cannot update the data'
      });
    }

    res.status(200).json(_objectSpread({}, updatedDoc));
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'sth wrong',
      error
    });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    console.log(req + 'test');
    const removed = await _ProductModel.default.findOneAndRemove({
      // createdBy: req.user._id,
      _id: req.params.id
    }).lean().exec();

    if (!removed) {
      return res.status(400).json({
        message: 'cannot remove the data'
      });
    }

    return res.status(200).json(_objectSpread({}, removed));
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'sth wrong',
      error
    });
  }
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvcHJvZHVjdHMuanMiXSwibmFtZXMiOlsicm91dGVyIiwicG9zdCIsInJlcSIsInJlcyIsImRvYyIsIlByb2R1Y3RNb2RlbCIsImNyZWF0ZSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNvZGUiLCJzZW5kIiwibWVzc2FnZSIsImdldCIsImRvY3MiLCJmaW5kIiwibGVhbiIsImV4ZWMiLCJwcm9kdWN0cyIsImZpbmRPbmUiLCJfaWQiLCJwYXJhbXMiLCJpZCIsInB1dCIsInVwZGF0ZWREb2MiLCJmaW5kT25lQW5kVXBkYXRlIiwibmV3IiwiZGVsZXRlIiwicmVtb3ZlZCIsImZpbmRPbmVBbmRSZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQUVBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHLHNCQUFmO0FBRUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVosRUFBaUIsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ25DLE1BQUk7QUFDRixVQUFNQyxHQUFHLEdBQUcsTUFBTUMsc0JBQWFDLE1BQWIsbUJBQ2JKLEdBQUcsQ0FBQ0ssSUFEUyxFQUFsQjtBQUdBSixJQUFBQSxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxJQUFJLEVBQUVOO0FBQVIsS0FBckI7QUFDRCxHQUxELENBS0UsT0FBT08sS0FBUCxFQUFjO0FBQ2RDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLEdBQUMsTUFBbEI7O0FBQ0EsUUFBSUEsS0FBSyxDQUFDRyxJQUFOLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEIsYUFBT1gsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQk8sSUFBaEIsQ0FBcUI7QUFBRUMsUUFBQUEsT0FBTyxFQUFFLGlCQUFYO0FBQThCTCxRQUFBQTtBQUE5QixPQUFyQixD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LEtBQWQ7QUFDQVIsSUFBQUEsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRU8sTUFBQUEsT0FBTyxFQUFFLFdBQVg7QUFBd0JMLE1BQUFBO0FBQXhCLEtBQXJCO0FBQ0Q7QUFDRixDQXJCRDtBQXVCQVgsTUFBTSxDQUFDK0IsTUFBUCxDQUFjLE1BQWQsRUFBc0IsT0FBTzdCLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUN4QyxNQUFJO0FBQ0ZTLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWCxHQUFHLEdBQUMsTUFBaEI7QUFDQSxVQUFNOEIsT0FBTyxHQUFHLE1BQU0zQixzQkFBYTRCLGdCQUFiLENBQThCO0FBQ2xEO0FBQ0FULE1BQUFBLEdBQUcsRUFBRXRCLEdBQUcsQ0FBQ3VCLE1BQUosQ0FBV0M7QUFGa0MsS0FBOUIsRUFJbkJOLElBSm1CLEdBS25CQyxJQUxtQixFQUF0Qjs7QUFPQSxRQUFJLENBQUNXLE9BQUwsRUFBYztBQUNaLGFBQU83QixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFTyxRQUFBQSxPQUFPLEVBQUU7QUFBWCxPQUFyQixDQUFQO0FBQ0Q7O0FBRUQsV0FBT2IsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsbUJBQTBCdUIsT0FBMUIsRUFBUDtBQUNELEdBZEQsQ0FjRSxPQUFPckIsS0FBUCxFQUFjO0FBQ2RDLElBQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0FSLElBQUFBLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVPLE1BQUFBLE9BQU8sRUFBRSxXQUFYO0FBQXdCTCxNQUFBQTtBQUF4QixLQUFyQjtBQUNEO0FBQ0YsQ0FuQkQ7ZUFxQmVYLE0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJzXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbi8vIG1vZHVsZXNcbmltcG9ydCBQcm9kdWN0TW9kZWwgZnJvbSAnLi4vbW9kZWxzL1Byb2R1Y3RNb2RlbC5qcyc7XG5cbi8vIHJvdXRlciBpbml0XG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcblxucm91dGVyLnBvc3QoJy8nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkb2MgPSBhd2FpdCBQcm9kdWN0TW9kZWwuY3JlYXRlKHtcbiAgICAgIC4uLnJlcS5ib2R5LFxuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZGF0YTogZG9jIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKyc/Pz8/Jyk7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09IDExMDAwKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiAnRHVwbGljYXRlZCBEYXRhJywgZXJyb3IgfSk7XG4gICAgfVxuICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogJ3N0aCB3cm9uZycsIGVycm9yIH0pO1xuICB9XG59KTtcblxucm91dGVyLmdldCgnLycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRvY3MgPSBhd2FpdCBQcm9kdWN0TW9kZWwuZmluZCgpXG4gICAgICAubGVhbigpXG4gICAgICAuZXhlYygpO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgcHJvZHVjdHM6IGRvY3MsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnc3RoIHdyb25nJywgZXJyb3IgfSk7XG4gIH1cbn0pO1xuXG4vLyByb3V0ZXIuZ2V0KCcvOnNrdV9jb2RlJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3QgZG9jID0gYXdhaXQgUHJvZHVjdE1vZGVsLmZpbmRPbmUoe1xuLy8gICAgICAgc2t1X2NvZGU6IHJlcS5wYXJhbXMuc2t1X2NvZGUsXG4vLyAgICAgfSlcbi8vICAgICAgIC5sZWFuKClcbi8vICAgICAgIC5leGVjKCk7XG5cbi8vICAgICBpZiAoIWRvYykge1xuLy8gICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ1RoZSBkYXRhIGlzIG5vdCBmb3VuZCcgfSk7XG4vLyAgICAgfVxuXG4vLyAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAuLi5kb2MgfSk7XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4vLyAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnc3RoIHdyb25nJywgZXJyb3IgfSk7XG4vLyAgIH1cbi8vIH0pO1xuXG5yb3V0ZXIuZ2V0KCcvOmlkJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZG9jID0gYXdhaXQgUHJvZHVjdE1vZGVsLmZpbmRPbmUoe1xuICAgICAgX2lkOiByZXEucGFyYW1zLmlkLFxuICAgIH0pXG4gICAgICAubGVhbigpXG4gICAgICAuZXhlYygpO1xuXG4gICAgaWYgKCFkb2MpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdUaGUgZGF0YSBpcyBub3QgZm91bmQnIH0pO1xuICAgIH1cblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgLi4uZG9jIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ3N0aCB3cm9uZycsIGVycm9yIH0pO1xuICB9XG59KTtcblxucm91dGVyLnB1dCgnLzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVwZGF0ZWREb2MgPSBhd2FpdCBQcm9kdWN0TW9kZWwuZmluZE9uZUFuZFVwZGF0ZShcbiAgICAgIHtcbiAgICAgICAgX2lkOiByZXEucGFyYW1zLmlkLFxuICAgICAgfSxcbiAgICAgIHJlcS5ib2R5LFxuICAgICAgeyBuZXc6IHRydWUgfSxcbiAgICApXG4gICAgICAubGVhbigpXG4gICAgICAuZXhlYygpO1xuXG4gICAgaWYgKCF1cGRhdGVkRG9jKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnY2Fubm90IHVwZGF0ZSB0aGUgZGF0YScgfSk7XG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAuLi51cGRhdGVkRG9jIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ3N0aCB3cm9uZycsIGVycm9yIH0pO1xuICB9XG59KTtcblxucm91dGVyLmRlbGV0ZSgnLzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKHJlcSsndGVzdCcpO1xuICAgIGNvbnN0IHJlbW92ZWQgPSBhd2FpdCBQcm9kdWN0TW9kZWwuZmluZE9uZUFuZFJlbW92ZSh7XG4gICAgICAvLyBjcmVhdGVkQnk6IHJlcS51c2VyLl9pZCxcbiAgICAgIF9pZDogcmVxLnBhcmFtcy5pZCxcbiAgICB9KVxuICAgICAgLmxlYW4oKVxuICAgICAgLmV4ZWMoKTtcblxuICAgIGlmICghcmVtb3ZlZCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ2Nhbm5vdCByZW1vdmUgdGhlIGRhdGEnIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IC4uLnJlbW92ZWQgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnc3RoIHdyb25nJywgZXJyb3IgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=