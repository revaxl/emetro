var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/reset-password', function(req, res){
  res.render('reset');
});

router.get('/dashboard', function(req, res){
  res.render('dashboard');
});

router.get('/metro', function(req, res){
  res.render('metros');
});

router.get('/affections', function(req, res){
  res.render('affections');
});

router.get('/tracking', function(req, res){
  res.render('tracking');
});

router.get('/problems', function(req, res){
  res.render('problems');
});

module.exports = router;
