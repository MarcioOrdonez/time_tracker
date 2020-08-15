import {Request, Response, NextFunction} from 'express';
import jwt,{DecodeOptions} from 'jsonwebtoken';
import { config } from 'dotenv';


export default new class AuthorizationMiddeware{
    async isAuthenticated(req: Request, res: Response, next: NextFunction){
        const secret = process.env.JWT_HASH || 'A very secret key';
        const token = req.headers['authorization'];
        if (!token) return res.status(400).json({message:"Missing token"});
        // FIX THIS !
        jwt.verify(token,secret, (err,decode:any)=>{
            if (err || !decode) return res.status(500).json({message:"Invalid token"});
            req.body.id = decode.id;
            next();
        });
    }
}