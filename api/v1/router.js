const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.json({ test: 'testing', });
});

module.exports = router;
