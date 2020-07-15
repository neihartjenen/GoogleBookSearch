const express = require("express");
const path = require("path");
const routes = require("./routes")
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}

app.use(routes)

// Define API routes here
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBook")
// Send every other request to the React appnpm start
// Define any API routes before this runs
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("Mongoose connected")
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
