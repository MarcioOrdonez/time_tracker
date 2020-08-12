import {Request, Response, NextFunction} from 'express';
import bcrypt from 'bcrypt';
import jwt, { decode } from 'jsonwebtoken';
import { config } from 'dotenv';

export default class Authentication{
    async hashPassword(password: string){
        return await bcrypt.hash(password,10);
    }

    async comparePassword(hash: string, password: string){
        return await bcrypt.compare(password,hash);
    }

    async createToken(id: number){
        const secret = process.env.JWT_HASH || 'A very secret key';
        return await jwt.sign({id},secret,{
            expiresIn:3000
        });
    }

    async validateToken(token: string){
        const secret = process.env.JWT_HASH || 'A very secret key';
        return await jwt.verify(token, secret,(err,decoded)=>{
            if(err){
                console.log('erro com o token');
                return false
            }
            return true;
        })
    }
    async isAuthenticated(req: Request, res: Response, next: NextFunction){
        const secret = process.env.JWT_HASH || 'A very secret key';
        const token = req.headers['authorization'];
        if (!token) return res.status(400).json({message:"Missing token"});
        jwt.verify(token,secret, (err,decode)=>{
            if (err) return res.status(500).json({message:"Invalid token"});
            next();
        })
    }
}