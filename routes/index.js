var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/addfellow', function(req, res, next) {
  res.render('form');
});

router.get('')

module.exports = router;
