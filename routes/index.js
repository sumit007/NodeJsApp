var express = require('express');
var router = express.Router();

let landing = require('../controller/landing');

/* GET Home page */
router.get('/', landing.get_landing);

module.exports = router;
