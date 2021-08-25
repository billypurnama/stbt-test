const express = require('express');
const router = express.Router();

// Controllers
const MovieController = require('../../controllers/movie')

router.get('/', MovieController.search)

module.exports = router;
