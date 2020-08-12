import express, { Request, Response } from 'express';

import db from '../database/connection';
import Authentication from '../utils/Authentication';

const authentication = new Authentication();

export default new class AuthenticationController{
    async create(req: Request, res: Response){
        const {name, email, password} = req.body;
        const [user] = await db('users').where('email','=',email);
        if (!user){
            await db('users').insert({
                name,
                email,
                password: await authentication.hashPassword(password)
            })
            return res.status(200).json({message:"user created successfully!"});
        }
        return res.status(400).json({message:"User already exists"});
    }

    async logIn(req: Request, res: Response){
        const {email,password} = req.body;
        const [user] = await db('users').where('email','=',email);

        if (!user) return res.status(400).json({message:"Email not found"});

        if (!await authentication.comparePassword(user.password,password)) return res.status(400)
        .json({message:"Password does not match!"});

        const token = await authentication.createToken(user.id);
        return res.status(200).json({'authorization':token});

    }

}