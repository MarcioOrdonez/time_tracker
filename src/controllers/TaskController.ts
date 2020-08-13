import express, { Request, Response } from 'express'

import db from '../database/connection';

export default class TaskController{
    async create(req: Request, res: Response){
        const {id, name } = req.body;
        if(!name) return res.status(400).json({message:"Not enough parameters!"});
        await db('tasks').insert({
            
        })
    }

    async index(){

    }

    async updateState(){

    }

    async edit(){
        
    }
}