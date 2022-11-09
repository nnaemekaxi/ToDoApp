/**
 * 1. Create a connection function for mongodb
 * 2. Start a local mongodb server connection
 */

const mongoose = require("mongoose");
require("dotenv").config();
const {MONGO_URI} = process.env;

async function connect(){
    try {
        mongoose.connect(MONGO_URI);
        console.log("Database Connected!")
    } catch (err) {
        console.log(err.message)
    }
}

// const connect = async () => {
//     try {
//     mongoose.connect('mongod://localhost/toDoAppDb'); 
//         console.log("Database Connected!")
//     } catch (err) {
//         console.log(err.message);

//         //Exit with failure
//         process.exit(1);
//     }
// }

module.exports = connect;

//create the connection function
// const ConnectDb = () => {
//     mongoose.connect(MONGO_URI, {
//         userNewUrlParser: true,
//         userCreateIndex: true,
//         userUnifiedTopology: true,
//         userFindAndModify:  false
//     })
//     .then(() => {
//         console.log("Database Connected!");
        
//         //send data
//     })
//     .catch((err) => {
//         console.log(err.message);

//         //Exit with failure
//         process.exit(1);
//     })    
// }

