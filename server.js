const express = require("express");
// TODO update controllers for express session
const controllers = require("./controllers");
const sequelize = require("./config/connection");
// TODO add sequelize store


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// TODO add static path to front end public folder

// TODO update this to require controllers
app.use(controllers);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening on " + PORT));
})