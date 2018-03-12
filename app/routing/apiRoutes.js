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
        friendData.push(req.body);
        res.json(findFriend(friendData));
    });
};

function findFriend (data) {
    var diffArr = [];
    var userScores = data[data.length - 1].scores;
    for (var i = 0; i < data.length -1; i++) {
        var scores = data[i].scores;
        var diff = 0;
        for (var x = 0; x < scores.length; x++) {
            diff += Math.abs(parseInt(userScores[x]) - parseInt(scores[x]));
        }
        diffArr.push(diff);
    }
    var match = diffArr.indexOf(Math.min.apply(null, diffArr));
    var name = data[match].name;
    var photo = data[match].photo;
    return {"name": name, "photo": photo};
}