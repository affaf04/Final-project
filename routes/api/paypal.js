const express = require('express');
const router = express.Router();
const paypalCtrl = require('../../controllers/api/paypal');


router.post('/generateAccessToken', paypalCtrl.generateAccessToken);





module.exports = router;