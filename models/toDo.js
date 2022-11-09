const {Schema, model} = require("mongoose");

const listSchema = new Schema ({
    title: String,
    description: String,
},
    {timestamp: true} 
);

module.exports = model("lists", listSchema);