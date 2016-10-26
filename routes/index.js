var express = require('express');
var router = express.Router();
var db = require('../models/database');

db.findFaculty('new name', function (faculty) {
  console.log(faculty);
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'School of Science'});
});

module.exports = router;
