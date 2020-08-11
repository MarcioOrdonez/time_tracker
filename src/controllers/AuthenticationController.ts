import express, { Request, Response } from 'express';
import { config } from 'dotenv';

import db from '../database/connection';
import Autentication from '../utils/Authentication';

const authentication = new Autentication();

export default new class AuthenticationController{
    async create(req: Request, res: Response){
        const {name, email, password} = req.body;
        const [user] = await db('users').where('email','=',email);
        console.log(user);
        if (!user){
            await db('users').insert({
                name,
                email,
                password: authentication.hashPassword(password)
            })
            return res.status(200).json({message:"user created successfully!"});
        }
        return res.status(400).json({message:"User already exists"});
    }
}