const express = require("express");
const path = require("path");

// Express stuff
const app = express();
const port = 3000;



// Load the landing page by default
// TODO: Once logged in, auto redirect to the main actual "app" page
app.use(express.static(path.join("public", "landing")));



// Start the express server
app.listen(port, () => console.log(`Server listening on port ${port}🥳\nconnect via http://localhost:3000/`));