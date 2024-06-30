const express = require('express');

const v1ApiRoutes = require('./v1-routes/v1-routes');

const router = express.Router();


router.use('/v1', v1ApiRoutes);

module.exports = router;