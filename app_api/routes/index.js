const express = require('express');
const router = express.Router();
const ctrlGyms = require('../controllers/gyms');


// locations
router
  .route('/gym')
  .get(ctrlGyms.loadGyms)

router
  .route('/gyms/:gymid')
  .get(ctrlGyms.gymsReadOne)
 




module.exports = router;
