import express, { Request, Response } from 'express'

import db from '../database/connection';

export default new class TaskController{
    async create(req: Request, res: Response){
        const {id, name } = req.body;
        if(!name) return res.status(400).json({message:"Not enough parameters!"});
        await db('tasks').insert({
            owner:id,
            name,
            state:'new'
        })
        return res.status(200).json({message:"Task successfully created"});
    }

    async index(req: Request, res: Response){
        const {id} = req.body;
        const tasks = await db('tasks').where('owner','=',id);
        if(!tasks) return res.status(200).json({message:"You dont have any tasks yet"});
        return res.status(200).json({content:tasks});
    }

    async updateState(){

    }

    async edit(){
        
    }
}