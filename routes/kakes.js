var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("sample API");
});

router.get('/getMyName', function(req, res, next) {
  res.send("Krishna Kumar VS");
});

module.exports = router;
