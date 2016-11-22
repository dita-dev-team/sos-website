var database = require('./init');
var bcrypt = require('bcrypt-nodejs');

//var connection = new Sequelize('sos_website', 'root', 'root'
//);

var Sequelize = database.Sequelize;
var connection = database.sequelize;

var events = connection.define('events',
    {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {notEmpty: true},
            unique: true
        },
        venue: {type: Sequelize.STRING},
        time: {type: Sequelize.DATE},
        description: {type: Sequelize.TEXT},
        image: {type: Sequelize.STRING}
    });

var faculty = connection.define('faculty',
    {
        facultyName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {notEmpty: true},
            unique: true

        },
        department: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {notEmpty: true}
        },
        position: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {notEmpty: true}
        },
        image: {type: Sequelize.STRING}
    });

var photos = connection.define('photo_urls',
    {
        image_url: {type: Sequelize.TEXT}
    });

var users = connection.define('users',
{
  username: {
    type:Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true},
    unique: true
  },
  password: {
    type:Sequelize.TEXT,
    allowNull: false,
    validate: {notEmpty: true},
  },
});

connection.sync();

/*
 * Adds a new event, faculty and photo urlencoded
 */
function newEvent(newTitle, newVenue, newTime, newDescription, newImage) {
  try{
    events.create({
        title: newTitle,
        venue: newVenue,
        time: newTime,
        description: newDescription,
        image: newImage
    }).then(function () {
        console.log("event saved");
      });
    }
    catch (e) {
      console.log(e.message);
    };

}

//Adds a new Faculty member
function newFaculty(newName, newDepartment, newPosition, newImage) {
    try {
        faculty.create
        ({
            facultyName: newName,
            department: newDepartment,
            position: newPosition,
            image: newImage
        }).then(function () {
            console.log("faculty member saved");
        });
    }
    catch (e) {
        console.log(e.message);
    }
}

//Adds a new Photo
function newPhotos(newImageUrl) {
    try {
        photos.create
        ({
            image_url: newImageUrl
        }).then(function () {
            console.log("Image Url Saved");
        });
    }
    catch (e) {
        console.log(e.message);
    }
}

//Adds a new user for dashboard purposes
function newUser(user, pass)
{
  var hashPassword =  bcrypt.hashSync(pass, bcrypt.genSaltSync(8), null);
  try{
    users.create({
      username: user,
      password: hashPassword
    }).then(function(){
      console.log("username added");
    });
  }catch(e){
    console.log(e.message);
  }
}

/* Finds data from the database and returns the required rows
 * from the relevant tables in the database
 */

function findFaculty(memberName, callback) {
    try {
        faculty.find
        ({
            where: {facultyName: memberName}
        }).then(callback);
    }
    catch (e) {
        console.log(e.message);
    }
}

function findEvent(eventTitle, callback) {
    try {
        events.find
        ({
            where: {title: eventTitle}
        }).then(callback);
    }
    catch (e) {
        console.log(e.message);
    }
}

function findPhoto(photoUrl) {
    try {
        photos.find
        ({
            where: {image_url: photoUrl}
        }).then(callback);
    }
    catch (e) {
        console.log(e.message);
    }
}

/*
 *Deletes rows from the database for the various tables
 */

function deleteEvent(eventTitle) {
    events.destroy
    ({
        where: {title: eventTitle}
    });
}

function deleteFaculty(memberName) {
    faculty.destroy
    ({
        where: {facultyName: memberName}
    });
}

function deletePhoto(photoUrl) {
    photos.destroy
    ({
        where: {image_url: photoUrl}
    });
}

/*
 * Update functions for editing data
 * on the various tables
 * the basics are,
 * UPDATE events SET title = newTitle WHERE title = currentTitle
 * as in the below function.
 * Will add later function overloads for the below function
 */


function updateEvent(newTitle, currentTitle) {
    events.update
    ({
            title: newTitle
        },
        {
            where: {title: currentTitle}
        });
}

function updateFaculty(newFacultyName, currentFacultyName) {
    faculty.update
    ({
            facultyName: newFacultyName
        },
        {
            where: {facultyName: currentFacultyName}
        });
}

function updatePhoto(newPhotoUrl, currentPhotoUrl) {
    photos.update
    ({
            image_url: newPhotoUrl
        },
        {
            where: {image_url: currentPhotoUrl}
        });
};

/*
 * Exports functions so that other files and classes can use them
 * for function calls
 */

module.exports =
{
    newEvent: newEvent,
    newFaculty: newFaculty,
    newPhotos: newPhotos,
    newUser:newUser,
    findFaculty: findFaculty,
    findPhoto: findPhoto,
    findEvent: findEvent,
    deleteEvent: deleteEvent,
    deleteFaculty: deleteFaculty,
    deletePhoto: deletePhoto,
    updateEvent: updateEvent,
    updateFaculty: updateFaculty,
    updatePhoto: updatePhoto,
    Faculty: faculty,
    Events: events,
    Photos: photos,
    Users: users
}
