const express = require('express');
const router = express.Router();


/* GET home page. */
const ctrlGyms = require('../controllers/gyms'); 
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlGyms.home);
router.get('/login', ctrlGyms.logIn);
router.get('/register', ctrlGyms.register);
/* Other pages */
router.get('/about', ctrlOthers.register);
module.exports = router;
