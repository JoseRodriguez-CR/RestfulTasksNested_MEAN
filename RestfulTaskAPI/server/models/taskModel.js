const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Task title is required'],
        minlength: [5, 'Task title length must be greater than 5'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Task description is required'],
        default: ''
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    created_at: {
        type: Date,
        required: true
    },
    updated_at: {
        type: Date,
        required: true
    }
});

const Task = mongoose.model( 'tasks', TaskSchema );

const TaskModel = {

    createTask: function(task){
        return Task.create(task)
    },
    getAllTask : function(){
        return Task.find();
    },
    getTaskByTitle : function( title ){
        return Task.findOne({ title });
    },
    deleteTask : function( title ){
        return Task.remove({ title });
    },
    updateTask: function(title , taskToUpdated) {
        return Task.findOneAndUpdate({title}, {$set : taskToUpdated}, {new:true})
    }
}

module.exports = {TaskModel};