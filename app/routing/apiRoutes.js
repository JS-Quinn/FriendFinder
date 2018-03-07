// ===============================================================================
// LOAD DATA
// We are linking our routes to "data" sources.
// This source holds an array of information on friends.
// ===============================================================================

var friendData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    // API GET Request
    // Handles when a user visits a page.
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    // API POST Request
    // Handles when a user submits a form and sata is submitted to the server.
    app.post("/api/friends", (req, res) => {
        friendData.add(req.body);
        res.json(req.body);
    });
};