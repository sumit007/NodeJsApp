var express = require('express');
var router = express.Router();

let landing = require('../controller/landing');
let user = require('../controller/user');

/* Login Singnup */
router.get('/login', user.show_login);
router.get('/signup', user.show_signup);

/* GET Home page */
router.get('/', landing.get_landing);
router.post('/', landing.submit_lead);
router.get('/leads', landing.show_leads);
router.get('/lead/:lead_id', landing.show_lead)
router.get('/lead/:lead_id/edit', landing.show_edit_lead)
router.post('/lead/:lead_id/edit', landing.edit_lead)
router.post('/lead/:lead_id/delete', landing.delete_lead)
router.post('/lead/:lead_id/delete-json', landing.delete_lead_json)
module.exports = router;
