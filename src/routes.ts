import express from 'express';

import authenticationController from './controllers/AuthenticationController';

const routes = express.Router();


routes.get('/',(req,res)=>{
    return res.status(200).json({message:"bom dia"});
});

routes.post('/create',authenticationController.create);

export default routes;