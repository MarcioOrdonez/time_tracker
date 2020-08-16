import express from 'express';

import authenticationController from './controllers/AuthenticationController';
import AuthorizationMiddleware from './middleware/AuthorizationMiddleware';
import TaskController from './controllers/TaskController';

const routes = express.Router();


routes.get('/',(req,res)=>{
    return res.status(200).json({message:"bom dia"});
});

routes.post('/create',authenticationController.create);
routes.post('/login',authenticationController.logIn);

routes.post('/task',AuthorizationMiddleware.isAuthenticated,TaskController.create);
routes.get('/task',AuthorizationMiddleware.isAuthenticated,TaskController.index);
routes.put('/task',AuthorizationMiddleware.isAuthenticated,TaskController.updateState);

export default routes;