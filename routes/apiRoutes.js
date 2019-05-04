var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/listing", function (req, res) {
    db.listing.findAll({}).then(function (dblisting) {
      res.json(dblisting);
    });
  });

  // Create a new example
  app.post("/api/listing", function (req, res) {
    db.listing.create(req.body).then(function (dblisting) {
      res.json(dblisting);
    });
  });

  // Update a listing
  app.put("/api/listing/:id", function (req, res) {
    db.listing.update({ where: { id: req.params.id } }).then(function (dblisting) {
      res.json(dblisting);
    });
  });

  // Delete an example by id
  app.delete("/api/listing/:id", function (req, res) {
    db.listing.destroy({ where: { id: req.params.id } }).then(function (dblisting) {
      res.json(dblisting);
    });
  });
};
