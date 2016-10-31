var db = require('./database');

// Remove all dummy data
db.Events.destroy({truncate: true}).catch(function (errors) {
    console.log(errors);
});

for (i = 0; i < 4; i++) {
    var title = 'Title ' + (i + 1);
    var venue = 'ICT';
    var description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    var time = new Date();
    var image = 'images/demo.jpg';
    db.newEvent(title, venue, time, description, image);
}