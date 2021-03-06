var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  
    app.get("/about", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/about.html"));
    });
  
    app.get("/portfolio", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/port.html"));
    });
  
  };
  