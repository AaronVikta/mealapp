
var express = require('express');
var router = express.Router();

// get the mealdb ids from mealdb api
router.get('/', function(req, res, next){
  res.render('meals',{name: 'Meals'});
});


module.exports = router;
