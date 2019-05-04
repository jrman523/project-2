var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  //contact form page
  app.get("/contact/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("contact", {
        examples: dbExamples
      });
    });
  });

  //search page
  app.get("/search/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("search", {
        msg: "Search for talents for your gig!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
