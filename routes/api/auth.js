const express = require('express');
const { auth } = require('../../midleware/auth');
const { upload } = require('../../midleware/upload');
const { validateRequest } = require('../../midleware/validateRequest');
const { schemaRegister, schemaLogin, schemaPatchSubscr, schemaResendConfirm } = require('../../models/user');
const {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  updatUser,
  updatUserImg,
  confirmRegistration,
  resendMailConfirm } = require('../../controllers');

const router = express.Router();

router.post('/registration', validateRequest(schemaRegister), registerUser);
router.post('/login', validateRequest(schemaLogin), loginUser);
router.post('/logout', auth, logoutUser);
router.get('/current', auth, currentUser);
router.patch('/', auth, validateRequest(schemaPatchSubscr), updatUser);
router.patch('/avatars', auth, upload.single('avatars'), updatUserImg);

router.get('/verify/:verificationToken', confirmRegistration);
router.post('/verify', validateRequest(schemaResendConfirm), resendMailConfirm);

module.exports = router;

