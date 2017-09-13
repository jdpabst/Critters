var app = require('./index.js');

module.exports = {
  addSpecies: function(req, res, next){
    const db = req.app.get('db');
    let arr = [req.body.species, req.body.datefound, req.body.latitude, req.body.longitude, req.body.additional]
    db.add_species(arr)
    .then((response) => { res.status(200).send(response) })
    .catch((error) => { res.status(200).send(error) })
  }
};
