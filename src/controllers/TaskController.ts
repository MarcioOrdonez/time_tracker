import express, { Request, Response } from 'express'
import StateChanger from '../utils/StateChanger';

import db from '../database/connection';
const stateChanger = new StateChanger();

export default new class TaskController{
    async create(req: Request, res: Response){
        const {user_id, name } = req.body;
        if(!name) return res.status(400).json({message:"Not enough parameters!"});
        await db('tasks').insert({
            owner:user_id,
            name,
            state:'new'
        })
        return res.status(200).json({message:"Task successfully created"});
    }

    async index(req: Request, res: Response){
        const {user_id} = req.body;
        const tasks = await db('tasks').where('owner','=',user_id);
        if(!tasks) return res.status(200).json({message:"You dont have any tasks yet"});
        return res.status(200).json({content:tasks});
    }

    async updateState(req: Request, res: Response){
        const { id, state } = req.body;
        const [task] = await db('tasks').where('id','=',id);
        await db('tasks').where('id','=',id).update(stateChanger.init(state,task));
        return res.status(200).json({message:"State updated"});
    }

    async delete(){
        
    }
}