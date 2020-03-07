var express = require('express');
var router = express.Router();
var fellowdetailsSchema = require('../models/fellow');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
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

router.get('/session', function (req, res, next) {
  res.render('session');
});
router.get('/feedback', function (req, res, next) {
  res.render('feedback');
});
router.post('/feedback', function (req, res, next) {
  res.render('/');
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


module.exports = router;
