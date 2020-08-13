import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

export default class AuthorizationMiddeware{
    async isAuthenticated(req: Request, res: Response, next: NextFunction){
        const secret = process.env.JWT_HASH || 'A very secret key';
        const token = req.headers['authorization'];
        if (!token) return res.status(400).json({message:"Missing token"});
        jwt.verify(token,secret, (err,decode)=>{
            if (err) return res.status(500).json({message:"Invalid token"});
            next();
        });
    }
}