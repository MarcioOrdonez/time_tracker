import knex from 'knex';

export default class StateChanger{
    init(state:string,task:any){
        if(state==='active'){
            task.state = 'active';
            task.start = Date.now().toString();
            
        }
        else if(state==='closed'){
            task.state = 'closed';
            task.stop = Date.now().toString();
            const total = parseInt(task.stop) - parseInt(task.start);
            if(!task.total_time) task.total_time = total;
            else task.total_time = parseInt(task.total_time) + total;
            task.total_time = task.total_time.toString();


        }
        else if(state==='problem'){
            task.state = 'problem';
            task.stop = Date.now().toString();
            const total = parseInt(task.stop) - parseInt(task.start);
            if(!task.total_time) task.total_time = total;
            else task.total_time = parseInt(task.total_time) + total;
            task.total_time = task.total_time.toString();
        }
        else{// new

        }

        return task;

    }
}