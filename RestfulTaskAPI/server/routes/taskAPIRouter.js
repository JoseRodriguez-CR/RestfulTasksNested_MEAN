const express = require( 'express' );
const TaskAPIRouter = express.Router();
const {TaskAPIController} = require('../controllers/taskcontroller');

TaskAPIRouter
    .route( '/' )
    .get( TaskAPIController.getAllTask )
    .post( TaskAPIController.createTask );

TaskAPIRouter
    .route( '/:title' )
    .get( TaskAPIController.showTask)
    .put( TaskAPIController.updateTask)

TaskAPIRouter
    .delete('/:title', TaskAPIController.deleteTask);

    module.exports = {TaskAPIRouter};