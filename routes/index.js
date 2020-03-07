var express = require('express');
var router = express.Router();
var fellowdetailsSchema= require('../models/fellow');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
<<<<<<< HEAD
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
=======
router.get('/addfellow', function(req, res, next) {
  res.render('form');
});
router.get('/session', function(req, res, next) {
  res.render('session');
});

// router.post("/addfellow",upload, function (req, res) {

//   var story = new Story
//     ({
//       username:req.body.username,
  
//       useremail:req.body.useremail,

//       description: req.body.description,
    
     
//       imagename :imageFile
//     })
//   var promise = story.save()
//   // promise.then((story) => {
//   //   res.redirect('/storyview')
//   // })
// });

router.get('')
>>>>>>> 404eeee0c4006f2d205baf306a2ac6be2165be78

module.exports = router;
