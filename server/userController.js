var app = require('./index.js');
var db = app.get('db');

module.exports = {
  addSpecies: function(req, res, next){
    var db = app.get('db');
    db.add_species().then((response) => {
    console.log(response)
    res.status(200).send(response);
  })
  .catch((error) => {
    res.status(200).send(error);
  })
  }
};
