const express = require("express");
const path = require("path");

// Express stuff
const app = express();
const port = 3000;



// Stuff that I forgot the name of
app.use(express.static(path.join("public")));



// Start the express server
app.listen(port, () => console.log(`Server listening on port ${port}🥳\nconnect via http://localhost:3000/`));