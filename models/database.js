    var Sequelize = require('sequelize');
    var connection = new Sequelize('sos_website', 'root', 'root'
    /*,
    {
      //this is for when we host this website.
      host: 'localhost',
      //Kipesh Should uncomment this line since he wants to use postgres
      dialect: 'postgres'
    }
    */);

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

  function newEvent(newTitle, newVenue, newTime, newDescription)
  {

  //var newTitle, newVenue, newTime, newDescription;
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

  function findFaculty(memberName)
  {
    try
    {
        faculty.find
        ({
          where:{facultyName: memberName}
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
  module.exports =
  {
    newEvent: newEvent,
    newFaculty: newFaculty,
    newPhotos: newPhotos,
    findFaculty: findFaculty,
    findPhoto: findPhoto,
    findEvent: findEvent
  }
