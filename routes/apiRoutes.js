var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/listing", function (req, res) {
    db.listing.findAll({}).then(function (dblisting) {
      console.log("jp",dblisting.data);
      res.json(dblisting);
      // res.render("search",{
        // lastmingig: dblisting
      // });
    });
  });

  // Create a new example
  app.post("/api/listing", function (req, res) {
    db.listing.create({
      name: req.body.name,
      location: req.body.location,
      craft: req.body.craft,
      sex: req.body.sex,
      email: req.body.email,
      description: req.body.description,
      img: req.body.img,
      available: req.body.available
    }).then(function (dblisting) {
      res.json(dblisting);
    })
      .catch(function (err) {
        res.json(err);
      });
  });

  // Update a listing
  app.put("/api/listing/:id", function (req, res) {
    db.listing.update({
      name: req.body.name,
      location: req.body.location,
      craft: req.body.craft,
      sex: req.body.sex,
      email: req.body.email,
      description: req.body.description,
      img: req.body.img,
      available: req.body.available
    }, {
      where: {
        id: req.params.id
      }
    }).then(function (dblisting) {
      res.json(dblisting);
    })
      .catch(function (err) {
        res.json(err);
      });
  });

  // Delete an example by id
  app.delete("/api/listing/:id", function (req, res) {
    db.listing.destroy({ where: { id: req.params.id } }).then(function (dblisting) {
      res.json(dblisting);
    });
  });
};
