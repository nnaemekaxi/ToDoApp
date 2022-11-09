/**
 * 1. Create an express server
 * 2. Connect to MongoDb
 * 3. Initialize express
 * 4. Initialize express middleware
 * 5. Create a simple get request route (optional)
 * 6. Inject the routes
 * 7. Listen to the application
 */

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

//Create a simple get request route (optional)
// app.get("/", (req, res) => {
//     res.json({message: "Hello World!"})
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})