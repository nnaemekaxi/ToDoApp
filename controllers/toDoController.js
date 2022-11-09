const lists = require("../models/toDo");
const {v4: uuid} = require("uuid");

// Add/Create ToDoItem
exports.addTask = async (req, res) => {
    try {
        const task = req.body;
        let added = await lists.create({...task});
        res.status(201).json({
            message: "New Item Added",
            added,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

//Get all ToDoItems
exports.getAllTasks = async (req, res) => {
    try {
        const task = await lists.find();
        if (!task)
            return res.status(404).json({success: false, message: "ToDo List Empty"});
            res.status(200).json({message: "ToDo List Items", task});   
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

//Get single ToDoItem
exports.getSingleTask = async (req, res) => {
    try {
        let id = req.params.id;
        const task = await lists.findById(id);
        if (!task)
            return res.status(404).json({success: false, message: "Task Not Found"})
        res.status(200).json({
            message: "Task Found",
            task: task
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

//Update/Edit ToDoItem
exports.updateTask = async (req, res) => {
    try {
        let id = req.params.id;
        const {title, description} = await req.body;
        const task = await lists.findByIdAndUpdate(id, {title, description}, {new: true});
        res.status(200).json({
            message: "Task Updated",
            task,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

//Delete ToDoItem
exports.deleteTask = async (req, res) => {
    try {
        let id = req.params.id;
        await lists.findByIdAndDelete(id);
        res.status(200).json({
            message: "Task Removed",
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}


