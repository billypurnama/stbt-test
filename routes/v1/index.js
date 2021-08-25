const express = require('express');
const router = express.Router();

// v1
const searchRoutes = require('./search')
const detailRoutes = require('./detail')

router.use('/search', searchRoutes)
router.use('/detail', detailRoutes)

module.exports = router;
