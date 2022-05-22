const express = require('express');
const logsCtrl = require('./logs.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(logsCtrl.getLogs);
router.route('/').post(logsCtrl.saveLog);
module.exports = router;
