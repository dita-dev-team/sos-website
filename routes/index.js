var express = require('express');
var router = express.Router();
var db = require('../models/database');


/* GET home page. */
router.get('/', function(req, res, next) {
  db.Events.findAll().then(function (events) {
    if (events) {
      console.log('Events found');
    } else {
      console.log('No events found');
    }
    res.render('index', {title: 'School of Science'});
  });

});

module.exports = router;
