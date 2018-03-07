// ==============================================================================
// DEPENDENCIES
// ==============================================================================
const express = require("express");
const bodyParser = require("body-parser");

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

// Creates an express server
const app = express();
// Sets an initial port.
const PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// Points our server to a series of route files.
// ================================================================================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code starts the server
// =============================================================================

app.listen(PORT, () => {
  console.log(`Welcome to Friend Finder. Now looking for friends on port ${port}!`);
});