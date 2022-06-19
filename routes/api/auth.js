const express = require('express');
const { registerUser, loginUser, logoutUser, currentUser, updatUser, updatUserImg } = require('../../controllers');
const { auth } = require('../../midleware/auth');
const { upload } = require('../../midleware/upload');
const { validateRequest } = require('../../midleware/validateRequest');
const { schemaRegister, schemaLogin, schemaPatchSubscr } = require('../../models/user');

const router = express.Router();

router.post('/registration', validateRequest(schemaRegister), registerUser);
router.post('/login', validateRequest(schemaLogin), loginUser);
router.post('/logout', auth, logoutUser);
router.get('/current', auth, currentUser);
router.patch('/', auth, validateRequest(schemaPatchSubscr), updatUser);
router.patch('/avatars', auth, upload.single('avatars'), updatUserImg);

module.exports = router;

