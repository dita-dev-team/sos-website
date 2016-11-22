var express = require('express');
var router = express.Router();
var db = require('../models/database');


/* GET home page. */
router.get('/', function(req, res, next) {
    // get the latest events
  db.Events.findAll({
    order: 'time DESC',
    limit: 4
  }).then(function (events) {
    if (events.length > 0) {
      console.log('Events found');

        // get the faculty
        db.Faculty.findAll({
            limit: 4
        }).then(function (faculty) {
            if (faculty.length > 0) {
                console.log('Faculty found');
                res.render('index', {title: 'School of Science', events: events, faculty: faculty});
            } else {
                res.render('index', {title: 'School of Science', events: events});
            }
        });
    } else {
      console.log('No events found');
      res.render('index', {title: 'School of Science'});
    }
  });

});

router.get('/login', function(req, res, next)
{
  res.render('login', {title: 'Login'});
});

module.exports = router;
