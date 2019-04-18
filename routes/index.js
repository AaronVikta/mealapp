var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  var meals= [
    {id:1, name:"Cake"},
    {id:2, name:"Butter"},
    {id:3, name:"Beans"}
  ];
  axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
  .then(function (response) {
    // handle success
    console.log(response);
    res.render('index', { title: 'MealDb', meals:meals, result:response});
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
});


module.exports = router;
