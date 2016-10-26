var Sequelize = require('sequelize');

var connection = new Sequelize('sos_website', 'tom', 'tom'

,
{
  //this is for when we host this website.
  host: 'localhost',
  //Kipesh Should uncomment this line since he wants to use postgres
  dialect: 'postgres'
}
);

    var events = connection.define('events',
    {
      title:
      {
        type: Sequelize.STRING,
        allowNull:false,
        validate:{notEmpty: true},
        unique:true
      },
      venue:{type: Sequelize.STRING},
      time:{type: Sequelize.DATE},
      description:{type: Sequelize.TEXT}
    });

    var faculty = connection.define('faculty',
    {
      facultyName:
      {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{notEmpty: true},
        unique: true

      },
      department:
      {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {notEmpty: true}
      },
      position:
      {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {notEmpty: true}
      },
      image_url:{type: Sequelize.TEXT}
    });

    var photos = connection.define('photo_urls',
    {
      image_url:{type: Sequelize.TEXT}
    });

    connection.sync();

    /*
     * Adds a new event, faculty and photo urlencoded
     */
  function newEvent(newTitle, newVenue, newTime, newDescription)
  {
    try
    {
      events.create
      ({
        title: newTitle,
        venue: newVenue,
        time: newTime,
        description: newDescription
      }).then
      (function(err)
      {
        console.log("event saved");
      });

    }
    catch (e)
    {
        console.log(e.message);
    }
  }

  function newFaculty(newName, newDepartment, newPosition)
  {
    try
    {
      faculty.create
      ({
        facultyName: newName,
        department: newDepartment,
        position: newPosition
      }).then(function(err)
      {
        console.log("faculty member saved");
      });
    }
    catch (e)
    {
      console.log(e.message);
    }
  }

  function newPhotos(newImageUrl)
  {
    try
    {
      photos.create
      ({
        image_url: newImageUrl
      }).then(function(err)
      {
        console.log("Image Url Saved");
      });
    }
    catch (e)
    {
      console.log(e.message);
    }
  }

  /* Finds data from the database and returns the required rows
   * from the relevant tables in the database
   */

function findFaculty(memberName, callback)
  {
    try
    {
        faculty.find
        ({
          where:{facultyName: memberName}
        }).then(callback);
    }
    catch (e)
    {
      console.log(e.message);
    }
  }

  function findEvent(eventTitle)
  {
    try
    {
      events.find
      ({
        where:{title: eventTitle}
      });
    }
    catch (e)
    {
      console.log(e.message);
    }
  }

  function findPhoto(photoUrl)
  {
    try
    {
        photos.find
        ({
          where:{image_url: photoUrl}
        });
    }
    catch (e)
    {
      console.log(e.message);
    }
  }

  /*
   *Deletes rows from the database for the various tables
   */

  function deleteEvent(eventTitle)
  {
    events.destroy
    ({
      where:{ title: eventTitle}
    });
  }

  function deleteFaculty(memberName)
  {
    faculty.destroy
    ({
      where:{facultyName: memberName}
    });
  }

  function deletePhoto(photoUrl)
  {
    photos.destroy
    ({
      where:{image_url: photoUrl}
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


  function updateEvent(newTitle, currentTitle)
  {
    events.update
    ({
      title: newTitle
    },
    {
      where:{ title: currentTitle}
    });
  }

  function updateFaculty(newFacultyName, currentFacultyName)
  {
    faculty.update
    ({
        facultyName: newFacultyName
    },
    {
      where: {facultyName: currentFacultyName}
    });
  }

  function updatePhoto(newPhotoUrl, currentPhotoUrl)
  {
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
    Photos: photos
  }
