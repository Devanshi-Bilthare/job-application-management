const express = require('express');
const { Create, GetAll, UpdateJob } = require('../Controllers/MainController');

const router = express.Router();

router.post('/create',Create)

router.get('/all',GetAll)

router.put('/all/:id',UpdateJob)


module.exports = router;