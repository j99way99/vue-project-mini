"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _UserModel = _interopRequireDefault(require("../models/UserModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// libs
// modules
// import passport from '../passport.js';
// router init
const router = (0, _express.Router)();
router.get('/:userid', async (req, res) => {
  try {
    if (!req.params.userid) {
      res.status(401).send('param userid is required.');
    } // find the user


    _UserModel.default.findOne({
      userid: req.params.userid
    }).then(user => {
      // non registered user
      if (!user) {
        res.status(401).send('Authentication failed. User not found.');
      } else {
        // create token with user info
        // const token = newToken(user);
        // current logged-in user
        const userInfo = {
          userid: user.userid,
          useremail: user.useremail,
          nickname: user.nickname,
          noteTitle: user.noteTitle,
          noteDetail: user.noteDetail
        }; // return the information including token as JSON

        res.status(200).json({
          success: true,
          userinfo: userInfo,
          message: 'Get userInfo Success'
        });
      }
    }).catch(error => {
      res.status(500).json('Internal Server Error');
      throw error;
    }); // res.status(200).json({ ...userInfo,});

  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'sth wrong',
      error
    });
  }
});
router.put('/:userid', async (req, res) => {
  try {
    console.log('This is Params::' + req.params);
    const updatedUserInfo = await _UserModel.default.findOneAndUpdate({
      userid: req.params.userid
    }, req.body, //update
    {
      new: true
    }).lean().exec();

    if (!updatedUserInfo) {
      return res.status(400).json({
        message: 'cannot update the data'
      });
    }

    const resUserInfo = {
      userid: updatedUserInfo.userid,
      useremail: updatedUserInfo.useremail,
      nickname: updatedUserInfo.nickname,
      noteTitle: updatedUserInfo.noteTitle,
      noteDetail: updatedUserInfo.noteDetail
    }; // return the information including token as JSON

    res.status(200).json({
      success: true,
      userinfo: resUserInfo,
      message: 'update userInfo Success'
    }); // res.status(200).json({ ...updatedUserInfo });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'sth wrong',
      error
    });
  }
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvdXNlcmluZm8uanMiXSwibmFtZXMiOlsicm91dGVyIiwiZ2V0IiwicmVxIiwicmVzIiwicGFyYW1zIiwidXNlcmlkIiwic3RhdHVzIiwic2VuZCIsIlVzZXJNb2RlbCIsImZpbmRPbmUiLCJ0aGVuIiwidXNlciIsInVzZXJJbmZvIiwidXNlcmVtYWlsIiwibmlja25hbWUiLCJub3RlVGl0bGUiLCJub3RlRGV0YWlsIiwianNvbiIsInN1Y2Nlc3MiLCJ1c2VyaW5mbyIsIm1lc3NhZ2UiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInB1dCIsImxvZyIsInVwZGF0ZWRVc2VySW5mbyIsImZpbmRPbmVBbmRVcGRhdGUiLCJib2R5IiwibmV3IiwibGVhbiIsImV4ZWMiLCJyZXNVc2VySW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUlBOzs7O0FBTEE7QUFHQTtBQUNBO0FBR0E7QUFDQSxNQUFNQSxNQUFNLEdBQUcsc0JBQWY7QUFHQUEsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBWCxFQUF1QixPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDekMsTUFBSTtBQUNGLFFBQUcsQ0FBQ0QsR0FBRyxDQUFDRSxNQUFKLENBQVdDLE1BQWYsRUFBc0I7QUFDbEJGLE1BQUFBLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLDJCQUFyQjtBQUNILEtBSEMsQ0FJQTs7O0FBQ0ZDLHVCQUFVQyxPQUFWLENBQWtCO0FBQ2hCSixNQUFBQSxNQUFNLEVBQUVILEdBQUcsQ0FBQ0UsTUFBSixDQUFXQztBQURILEtBQWxCLEVBRUdLLElBRkgsQ0FFUUMsSUFBSSxJQUFJO0FBQ1o7QUFDQSxVQUFJLENBQUNBLElBQUwsRUFBVztBQUNUUixRQUFBQSxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQix3Q0FBckI7QUFDRCxPQUZELE1BRUs7QUFDSDtBQUNBO0FBRUE7QUFDQSxj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ckNEO2VBdUNldEIsTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnNcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuXG4vLyBtb2R1bGVzXG4vLyBpbXBvcnQgcGFzc3BvcnQgZnJvbSAnLi4vcGFzc3BvcnQuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcblxuLy8gcm91dGVyIGluaXRcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuXG5cbnJvdXRlci5nZXQoJy86dXNlcmlkJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYoIXJlcS5wYXJhbXMudXNlcmlkKXtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoJ3BhcmFtIHVzZXJpZCBpcyByZXF1aXJlZC4nKTtcbiAgICB9XG4gICAgICAvLyBmaW5kIHRoZSB1c2VyXG4gICAgVXNlck1vZGVsLmZpbmRPbmUoe1xuICAgICAgdXNlcmlkOiByZXEucGFyYW1zLnVzZXJpZCxcbiAgICB9KS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAvLyBub24gcmVnaXN0ZXJlZCB1c2VyXG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCdBdXRoZW50aWNhdGlvbiBmYWlsZWQuIFVzZXIgbm90IGZvdW5kLicpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAvLyBjcmVhdGUgdG9rZW4gd2l0aCB1c2VyIGluZm9cbiAgICAgICAgICAvLyBjb25zdCB0b2tlbiA9IG5ld1Rva2VuKHVzZXIpO1xuXG4gICAgICAgICAgLy8gY3VycmVudCBsb2dnZWQtaW4gdXNlclxuICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0ge1xuICAgICAgICAgICAgdXNlcmlkOiB1c2VyLnVzZXJpZCxcbiAgICAgICAgICAgIHVzZXJlbWFpbDogdXNlci51c2VyZW1haWwsXG4gICAgICAgICAgICBuaWNrbmFtZTogdXNlci5uaWNrbmFtZSxcbiAgICAgICAgICAgIG5vdGVUaXRsZTogdXNlci5ub3RlVGl0bGUsXG4gICAgICAgICAgICBub3RlRGV0YWlsOiB1c2VyLm5vdGVEZXRhaWxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gcmV0dXJuIHRoZSBpbmZvcm1hdGlvbiBpbmNsdWRpbmcgdG9rZW4gYXMgSlNPTlxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICB1c2VyaW5mbzogdXNlckluZm8sXG4gICAgICAgICAgICBtZXNzYWdlOiAnR2V0IHVzZXJJbmZvIFN1Y2Nlc3MnLFxuICAgICAgICAgIH0pOyAgXG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oJ0ludGVybmFsIFNlcnZlciBFcnJvcicpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0pO1xuXG4gICAgICAvLyByZXMuc3RhdHVzKDIwMCkuanNvbih7IC4uLnVzZXJJbmZvLH0pO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnc3RoIHdyb25nJywgZXJyb3IgfSk7XG4gICAgfVxuICB9KTtcblxucm91dGVyLnB1dCgnLzp1c2VyaWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBQYXJhbXM6OicrcmVxLnBhcmFtcyk7XG4gICAgY29uc3QgdXBkYXRlZFVzZXJJbmZvID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICB7XG4gICAgICAgIHVzZXJpZDogcmVxLnBhcmFtcy51c2VyaWQsXG4gICAgICB9LFxuICAgICAgcmVxLmJvZHksIC8vdXBkYXRlXG4gICAgICB7IG5ldzogdHJ1ZSB9LFxuICAgIClcbiAgICAgIC5sZWFuKClcbiAgICAgIC5leGVjKCk7XG5cbiAgICBpZiAoIXVwZGF0ZWRVc2VySW5mbykge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ2Nhbm5vdCB1cGRhdGUgdGhlIGRhdGEnIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc1VzZXJJbmZvID0ge1xuICAgICAgdXNlcmlkOiB1cGRhdGVkVXNlckluZm8udXNlcmlkLFxuICAgICAgdXNlcmVtYWlsOiB1cGRhdGVkVXNlckluZm8udXNlcmVtYWlsLFxuICAgICAgbmlja25hbWU6IHVwZGF0ZWRVc2VySW5mby5uaWNrbmFtZSxcbiAgICAgIG5vdGVUaXRsZTogdXBkYXRlZFVzZXJJbmZvLm5vdGVUaXRsZSxcbiAgICAgIG5vdGVEZXRhaWw6IHVwZGF0ZWRVc2VySW5mby5ub3RlRGV0YWlsXG4gICAgfTtcblxuICAgIC8vIHJldHVybiB0aGUgaW5mb3JtYXRpb24gaW5jbHVkaW5nIHRva2VuIGFzIEpTT05cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgdXNlcmluZm86IHJlc1VzZXJJbmZvLFxuICAgICAgbWVzc2FnZTogJ3VwZGF0ZSB1c2VySW5mbyBTdWNjZXNzJyxcbiAgICB9KTtcblxuICAgIC8vIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgLi4udXBkYXRlZFVzZXJJbmZvIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ3N0aCB3cm9uZycsIGVycm9yIH0pO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19