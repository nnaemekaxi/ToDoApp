//create an express server
const express = require("express");

require("dotenv").config(); //allows you to use environment variables in .env
//connect to mongodb
const connect = require("./db/index");
connect();

//initialize express
const app = express();

const toDo = require("./controllers/toDoController");
const models = require("./models/toDo");
const routes = require("./routes/toDoRoute");

//Initialize express middleware
app.use(express.json({extended: false}));
app.use("/", routes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})