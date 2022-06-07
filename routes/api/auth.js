const express = require('express');
const { registerUser } = require('../../controllers/authControllers');
const { validateRequest } = require('../../midleware/validateRequest');
const { schemaRegister } = require('../../models/user')
const router = express.Router();



router.post('/registration', validateRequest(schemaRegister), registerUser);


module.exports = router;

