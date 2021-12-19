"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _express = require("express");

var _auth = require("../utils/auth.js");

var _UserModel = _interopRequireDefault(require("../models/UserModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// libs
// modules
// import passport from '../passport.js';
// router init
const router = (0, _express.Router)(); // router

router.post('/login', (req, res) => {
  // find the user
  _UserModel.default.findOne({
    userid: req.body.userid
  }).then(user => {
    // non registered user
    if (!user) {
      res.status(401).send('Authentication failed. User not found.');
    }

    _bcrypt.default.compare(req.body.password, user.password, (error, result) => {
      if (error) {
        res.status(500).send('Internal Server Error');
      }

      if (result) {
        // create token with user info
        const token = (0, _auth.newToken)(user);

        if (!user.noteTitle) {
          user.noteTitle = user.nickname + '의 노트';
        } // current logged-in user


        const loggedInUser = {
          userid: user.userid,
          useremail: user.useremail
        }; // return the information including token as JSON

        res.status(200).json({
          success: true,
          user: loggedInUser,
          message: 'Login Success',
          token: token
        });
      } else {
        res.status(401).json('Authentication failed. Wrong password.');
      }
    });
  }).catch(error => {
    res.status(500).json('Internal Server Error');
    throw error;
  });
});
router.post('/signup', (req, res) => {
  const {
    userid,
    useremail,
    password
  } = req.body;
  console.log('confirm:::' + req.body.password); // encrypt password
  // NOTE: 10 is saltround which is a cost factor

  _bcrypt.default.hash(password, 10, (error, hashedPassword) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        error
      });
    } else {
      const newUser = new _UserModel.default({
        userid,
        useremail,
        password: hashedPassword
      });
      newUser.save((error, saved) => {
        if (error) {
          console.log(error);
          res.status(409).send(error);
        } else {
          console.log(saved);
          res.send(saved);
        }
      });
    }
  });
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvYXV0aC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJwb3N0IiwicmVxIiwicmVzIiwiVXNlck1vZGVsIiwiZmluZE9uZSIsInVzZXJpZCIsImJvZHkiLCJ0aGVuIiwidXNlciIsInN0YXR1cyIsInNlbmQiLCJiY3J5cHQiLCJjb21wYXJlIiwicGFzc3dvcmQiLCJlcnJvciIsInJlc3VsdCIsInRva2VuIiwibm90ZVRpdGxlIiwibmlja25hbWUiLCJsb2dnZWRJblVzZXIiLCJ1c2VyZW1haWwiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJoYXNoIiwiaGFzaGVkUGFzc3dvcmQiLCJuZXdVc2VyIiwic2F2ZSIsInNhdmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBSUE7O0FBQ0E7Ozs7QUFQQTtBQUlBO0FBQ0E7QUFJQTtBQUNBLE1BQU1BLE1BQU0sR0FBRyxzQkFBZixDLENBRUE7O0FBQ0FBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVosRUFBc0IsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDbEM7QUFDQUMscUJBQVVDLE9BQVYsQ0FBa0I7QUFDaEJDLElBQUFBLE1BQU0sRUFBRUosR0FBRyxDQUFDSyxJQUFKLENBQVNEO0FBREQsR0FBbEIsRUFFR0UsSUFGSCxDQUVRQyxJQUFJLElBQUk7QUFDWjtBQUNBLFFBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1ROLE1BQUFBLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLHdDQUFyQjtBQUNEOztBQUNEQyxvQkFBT0MsT0FBUCxDQUFlWCxHQUFHLENBQUNLLElBQUosQ0FBU08sUUFBeEIsRUFBa0NMLElBQUksQ0FBQ0ssUUFBdkMsRUFBaUQsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ2xFLFVBQUlELEtBQUosRUFBVztBQUNUWixRQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQix1QkFBckI7QUFDRDs7QUFDRCxVQUFJSyxNQUFKLEVBQVk7QUFDVjtBQUNBLGNBQU1DLEtBQUssR0FBRyxvQkFBU1IsSUFBVCxDQUFkOztBQUVBLFlBQUcsQ0FBQ0EsSUFBSSxDQUFDUyxTQUFULEVBQW1CO0FBQ2pCVCxVQUFBQSxJQUFJLENBQUNTLFNBQUwsR0FBaUJULElBQUksQ0FBQ1UsUUFBTCxHQUFnQixNQUFqQztBQUNELFNBTlMsQ0FRVjs7O0FBQ0EsY0FBTUMsWUFBWSxHQUFHO0FBQ25CZCxVQUFBQSxNQUFNLEVBQUVHLElBQUksQ0FBQ0gsTUFETTtBQUVuQmUsVUFBQUEsU0FBUyxFQUFFWixJQUFJLENBQUNZO0FBRkcsU0FBckIsQ0FUVSxDQWNWOztBQUNBbEIsUUFBQUEsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQlksSUFBaEIsQ0FBcUI7QUFDbkJDLFVBQUFBLE9BQU8sRUFBRSxJQURVO0FBRW5CZCxVQUFBQSxJQUFJLEVBQUVXLFlBRmE7QUFHbkJJLFVBQUFBLE9BQU8sRUFBRSxlQUhVO0FBSW5CUCxVQUFBQSxLQUFLLEVBQUVBO0FBSlksU0FBckI7QUFNRCxPQXJCRCxNQXFCTztBQUNMZCxRQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCWSxJQUFoQixDQUFxQix3Q0FBckI7QUFDRDtBQUNGLEtBNUJEO0FBNkJELEdBcENILEVBcUNHRyxLQXJDSCxDQXFDU1YsS0FBSyxJQUFJO0FBQ2RaLElBQUFBLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JZLElBQWhCLENBQXFCLHVCQUFyQjtBQUNBLFVBQU1QLEtBQU47QUFDRCxHQXhDSDtBQXlDRCxDQTNDRDtBQTZDQWYsTUFBTSxDQUFDQyxJQUFQLENBQVksU0FBWixFQUF1QixDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUNuQyxRQUFNO0FBQUVHLElBQUFBLE1BQUY7QUFBVWUsSUFBQUEsU0FBVjtBQUFxQlAsSUFBQUE7QUFBckIsTUFBaUNaLEdBQUcsQ0FBQ0ssSUFBM0M7QUFDQW1CLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQWF6QixHQUFHLENBQUNLLElBQUosQ0FBU08sUUFBbEMsRUFGbUMsQ0FHbkM7QUFDQTs7QUFDQUYsa0JBQU9nQixJQUFQLENBQVlkLFFBQVosRUFBc0IsRUFBdEIsRUFBMEIsQ0FBQ0MsS0FBRCxFQUFRYyxjQUFSLEtBQTJCO0FBQ25ELFFBQUlkLEtBQUosRUFBVztBQUNUVyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVosS0FBWjtBQUNBLGFBQU9aLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JZLElBQWhCLENBQXFCO0FBQzFCUCxRQUFBQTtBQUQwQixPQUFyQixDQUFQO0FBR0QsS0FMRCxNQUtPO0FBQ0wsWUFBTWUsT0FBTyxHQUFHLElBQUkxQixrQkFBSixDQUFjO0FBQzVCRSxRQUFBQSxNQUQ0QjtBQUU1QmUsUUFBQUEsU0FGNEI7QUFHNUJQLFFBQUFBLFFBQVEsRUFBRWU7QUFIa0IsT0FBZCxDQUFoQjtBQUtBQyxNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxDQUFDaEIsS0FBRCxFQUFRaUIsS0FBUixLQUFrQjtBQUM3QixZQUFJakIsS0FBSixFQUFXO0FBQ1RXLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWixLQUFaO0FBQ0FaLFVBQUFBLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSSxLQUFyQjtBQUNELFNBSEQsTUFHTztBQUNMVyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUssS0FBWjtBQUNBN0IsVUFBQUEsR0FBRyxDQUFDUSxJQUFKLENBQVNxQixLQUFUO0FBQ0Q7QUFDRixPQVJEO0FBU0Q7QUFDRixHQXRCRDtBQXVCRCxDQTVCRDtlQStCZWhDLE0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJzXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcblxuLy8gbW9kdWxlc1xuLy8gaW1wb3J0IHBhc3Nwb3J0IGZyb20gJy4uL3Bhc3Nwb3J0LmpzJztcbmltcG9ydCB7IG5ld1Rva2VuIH0gZnJvbSAnLi4vdXRpbHMvYXV0aC5qcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuXG4vLyByb3V0ZXIgaW5pdFxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbi8vIHJvdXRlclxucm91dGVyLnBvc3QoJy9sb2dpbicsIChyZXEsIHJlcykgPT4ge1xuICAvLyBmaW5kIHRoZSB1c2VyXG4gIFVzZXJNb2RlbC5maW5kT25lKHtcbiAgICB1c2VyaWQ6IHJlcS5ib2R5LnVzZXJpZCxcbiAgfSkudGhlbih1c2VyID0+IHtcbiAgICAgIC8vIG5vbiByZWdpc3RlcmVkIHVzZXJcbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCgnQXV0aGVudGljYXRpb24gZmFpbGVkLiBVc2VyIG5vdCBmb3VuZC4nKTtcbiAgICAgIH1cbiAgICAgIGJjcnlwdC5jb21wYXJlKHJlcS5ib2R5LnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCgnSW50ZXJuYWwgU2VydmVyIEVycm9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIC8vIGNyZWF0ZSB0b2tlbiB3aXRoIHVzZXIgaW5mb1xuICAgICAgICAgIGNvbnN0IHRva2VuID0gbmV3VG9rZW4odXNlcik7XG5cbiAgICAgICAgICBpZighdXNlci5ub3RlVGl0bGUpe1xuICAgICAgICAgICAgdXNlci5ub3RlVGl0bGUgPSB1c2VyLm5pY2tuYW1lICsgJ+ydmCDrhbjtirgnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGN1cnJlbnQgbG9nZ2VkLWluIHVzZXJcbiAgICAgICAgICBjb25zdCBsb2dnZWRJblVzZXIgPSB7XG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXIudXNlcmlkLFxuICAgICAgICAgICAgdXNlcmVtYWlsOiB1c2VyLnVzZXJlbWFpbFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyByZXR1cm4gdGhlIGluZm9ybWF0aW9uIGluY2x1ZGluZyB0b2tlbiBhcyBKU09OXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIHVzZXI6IGxvZ2dlZEluVXNlcixcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdMb2dpbiBTdWNjZXNzJyxcbiAgICAgICAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuc3RhdHVzKDQwMSkuanNvbignQXV0aGVudGljYXRpb24gZmFpbGVkLiBXcm9uZyBwYXNzd29yZC4nKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oJ0ludGVybmFsIFNlcnZlciBFcnJvcicpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSk7XG59KTtcblxucm91dGVyLnBvc3QoJy9zaWdudXAnLCAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyB1c2VyaWQsIHVzZXJlbWFpbCwgcGFzc3dvcmR9ID0gcmVxLmJvZHk7XG4gIGNvbnNvbGUubG9nKCdjb25maXJtOjo6JytyZXEuYm9keS5wYXNzd29yZCk7XG4gIC8vIGVuY3J5cHQgcGFzc3dvcmRcbiAgLy8gTk9URTogMTAgaXMgc2FsdHJvdW5kIHdoaWNoIGlzIGEgY29zdCBmYWN0b3JcbiAgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwLCAoZXJyb3IsIGhhc2hlZFBhc3N3b3JkKSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICBlcnJvcixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXJNb2RlbCh7XG4gICAgICAgIHVzZXJpZCxcbiAgICAgICAgdXNlcmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmRcbiAgICAgIH0pO1xuICAgICAgbmV3VXNlci5zYXZlKChlcnJvciwgc2F2ZWQpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDA5KS5zZW5kKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzYXZlZCk7XG4gICAgICAgICAgcmVzLnNlbmQoc2F2ZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19