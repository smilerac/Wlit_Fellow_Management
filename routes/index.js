var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
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

router.get('/newsession', function (req, res, next) {
  res.render('session');
})



module.exports = router;
