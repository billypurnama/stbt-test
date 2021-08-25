const express = require('express');
const router = express.Router();

// Controllers
const MovieController = require('../../controllers/movie')

router.get('/:id', MovieController.detail)

module.exports = router;
