import express from 'express';

import authenticationController from './controllers/AuthenticationController';
import Authentication from './utils/Authentication';

const routes = express.Router();

const authentication = new Authentication();

routes.get('/',(req,res)=>{
    return res.status(200).json({message:"bom dia"});
});

routes.post('/create',authenticationController.create);
routes.post('/login',authenticationController.logIn);

routes.get('/secret',authentication.isAuthenticated,(req,res)=>{
    return res.json({message:"foiii"});
})

export default routes;