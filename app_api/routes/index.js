const express = require('express');
const router = express.Router();
const ctrlGyms = require('../controllers/gyms');


// locations
router
  .route('/locations')
  .get(ctrlGyms.loadGyms)
  .post(ctrlGyms.locationsCreate);



module.exports = router;
