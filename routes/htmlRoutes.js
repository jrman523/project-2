var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  //contact form page
  app.get("/contact/", function (req, res) {
    res.render("contact");
  });


  //search page
  app.get("/search/", function (req, res) {
    res.render("search");
  });

  // app.get("/search/", function(req, res) {
  //   db.listing.findAll({}).then(function(dbListing) {
  //     res.render("search", {
  //       msg: "Search for talents for your gig!",
  //       listing: listing
  //     });
  //   });
  // });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.listing.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

//Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};