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

var Events = connection.define('Events', {
  title:
  {
    type: Sequelize.STRING,
    allowNull:false,
    validate:
    {
      notEmpty: function(val)
      {
        if(!val.length)
          throw new Erro ('empty strings not allowed for a title.');
      }
    }
  },
  venue:
  {
    type: Sequelize.STRING
  },
  time:{},
  description:{
    type: Sequelize.TEXT
  }
});

var faculty = connection.define('Facutly',{
  facultyName:{},
  department:{},
  position:{},
  image_url:{}
});

var Photos = db.define('Photo_urls', {
  image_url:{}
});

connection.sync();
