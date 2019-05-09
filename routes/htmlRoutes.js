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
  
  //Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};