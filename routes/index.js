var express = require('express');
var router = express.Router();
var db = require('../models/database');


/* GET home page. */
router.get('/', function(req, res, next) {
  db.Events.findAll({
    order: 'time DESC',
    limit: 4
  }).then(function (events) {
    if (events.length > 0) {
      console.log('Events found');
      res.render('index', {title: 'School of Science', events: events});
    } else {
      console.log('No events found');
      res.render('index', {title: 'School of Science'});
    }
  });

});

router.get('/dashboard', function(req, res, next)
{
  res.render('dashboard', {title: 'dashboard'});
});

module.exports = router;
