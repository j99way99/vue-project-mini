// libs
import { Router } from 'express';

// modules
// import passport from '../passport.js';
import UserModel from '../models/UserModel.js';

// router init
const router = Router();


router.get('/:userid', async (req, res) => {
  try {
    if(!req.params.userid){
        res.status(401).send('param userid is required.');
    }
      // find the user
    UserModel.findOne({
      userid: req.params.userid,
    }).then(user => {
        // non registered user
        if (!user) {
          res.status(401).send('Authentication failed. User not found.');
        }else{
          // create token with user info
          // const token = newToken(user);

          // current logged-in user
          const userInfo = {
            userid: user.userid,
            useremail: user.useremail,
            nickname: user.nickname,
            noteTitle: user.noteTitle,
            noteDetail: user.noteDetail
          };

          // return the information including token as JSON
          res.status(200).json({
            success: true,
            userinfo: userInfo,
            message: 'Get userInfo Success',
          });  
        }
      }).catch(error => {
        res.status(500).json('Internal Server Error');
        throw error;
      });

      // res.status(200).json({ ...userInfo,});

    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'sth wrong', error });
    }
  });

router.put('/:userid', async (req, res) => {
  try {
    console.log('This is Params::'+req.params);
    const updatedUserInfo = await UserModel.findOneAndUpdate(
      {
        userid: req.params.userid,
      },
      req.body, //update
      { new: true },
    )
      .lean()
      .exec();

    if (!updatedUserInfo) {
      return res.status(400).json({ message: 'cannot update the data' });
    }

    const resUserInfo = {
      userid: updatedUserInfo.userid,
      useremail: updatedUserInfo.useremail,
      nickname: updatedUserInfo.nickname,
      noteTitle: updatedUserInfo.noteTitle,
      noteDetail: updatedUserInfo.noteDetail
    };

    // return the information including token as JSON
    res.status(200).json({
      success: true,
      userinfo: resUserInfo,
      message: 'update userInfo Success',
    });

    // res.status(200).json({ ...updatedUserInfo });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'sth wrong', error });
  }
});

export default router;
