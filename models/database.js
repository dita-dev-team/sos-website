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

var Events = connection.define('events',
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

var Photos = connection.define('photo_urls',
{
  image_url:{type: Sequelize.TEXT}
});

connection.sync();
