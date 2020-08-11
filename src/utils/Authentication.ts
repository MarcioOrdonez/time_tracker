import bcrypt from 'bcrypt';

export default class Authentication{
    async hashPassword(password: string){
        return await bcrypt.hash(password,10);
    }
}