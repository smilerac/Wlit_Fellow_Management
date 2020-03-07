var express = require('express');
var router = express.Router();
var fellowdetailsSchema= require('../models/fellow');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/addfellow', function (req, res, next) {
  //Movies.find().exec(function(err,movies){
  res.render('addfellow')
  //})

});

router.post('/addfellow', function (req, res, next) {
  console.log(req.body)
  var fellow = new fellow({
    name: req.body.name,
    batch: req.body.batch,
    college: req.body.college,

  })
  var promise = fellow.save()
  promise.then((fellow) => {
    console.log('fellow saved', fellow)

  })
  res.redirect('/home');

});

module.exports = router;
