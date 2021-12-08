const {TaskModel} = require( '../models/taskModel' );
const bcrypt = require( 'bcrypt' );

const TaskAPIController = {
    getAllTask: function(request, response){
        TaskModel.getAllTask()
        .then( result =>{
            response.status(200).json(result);
        })
    },

    showTask: function(request, response){
        let title = request.params.title;
        TaskModel
            .getTaskByTitle(title)
            .then(task =>{
                if(task == null){
                    throw new Error( "This task doesn't exist" );
                }
                else{
                    response.status(200).json(task)
                }
                
            })
            .catch( error => {
                response.statusMessage = error.message;
                response.status( 404 ).end();
            })
    },

    createTask: function(request, response){
        title = request.body.title;
        description = request.body.description;
        completed = request.body.completed;
        created_at = new Date();
        updated_at = new Date()
        
        if(title && description && completed){
        let newtask = {
            title,
            description,
            completed,
            created_at,
            updated_at
        };
                TaskModel
                .createTask(newtask)
                .then( task => {
                    response.status( 200 ).json( task );
                })
                .catch(error => {
                    console.log(error);
                    response.statusMessage = "That title is already taken by another task";
                    response.status(406).end()
                })
        }else{
            response.statusMessage = "You are missing a field ('Please add: Title, description, completed')";
            response.status( 404 ).end();
        }
    },

    updateTask: function(request, response){
        let title = request.params.title;

        updatedTitle = request.body.title;
        updatedDescription = request.body.description;
        updatedCompleted = request.body.completed;
        updated_at = new Date();

        TaskModel
        .getTaskByTitle(title)
        .then(taskToUpdated =>{
            if(taskToUpdated === null){
                response.statusMessage = "That task doesn't exists, therefore it cannot be edited";
                response.status( 404 ).end();
            }
            else{
                if(updatedTitle){
                    taskToUpdated.title = updatedTitle;
                }
                if(updatedDescription){
                    taskToUpdated.description = updatedDescription;
                }
                if(updatedCompleted){
                    taskToUpdated.completed = updatedCompleted;
                }
                taskToUpdated.updated_at = updated_at

                TaskModel
                    .updateTask(title , taskToUpdated)
                    .then(result=>{
                        response.status(200).json(result);
                })
                .catch(err => {
                    console.log(err);
                    response.statusMessage = "That title is already taken by another task";
                    rresponsees.status(400).end()
                })
            }
        });
    },

    deleteTask: function(request, response){
        let title = request.params.title;

        TaskModel
        .getTaskByTitle(title)
        .then(task =>{
            if(task === null){
                throw new Error( "That task doesn't exist, therefore it cannot be deleted" );
            }
            else{
                TaskModel
                    .deleteTask( title )
                    .then( result => {
                        response.status( 204 ).end();
                    });
            }
        })
        .catch( error => {
            response.statusMessage = error.message;
            response.status( 404 ).end();
        })
    }

}


module.exports = { TaskAPIController };