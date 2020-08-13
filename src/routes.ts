import express from 'express';

import authenticationController from './controllers/AuthenticationController';
import AuthorizationMiddleware from './middleware/AuthorizationMiddleware';

const routes = express.Router();

const authorizationMiddleware = new AuthorizationMiddleware();

routes.get('/',(req,res)=>{
    return res.status(200).json({message:"bom dia"});
});

routes.post('/create',authenticationController.create);
routes.post('/login',authenticationController.logIn);

routes.get('/secret',authorizationMiddleware.isAuthenticated,(req,res)=>{
    return res.json({message:"Authorized"});
})

export default routes;