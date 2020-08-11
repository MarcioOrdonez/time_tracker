import bcrypt from 'bcrypt';

export default class Authentication{
    async hashPassword(password: string){
        return await bcrypt.hash(password,10);
    }

    async comparePassword(hash: string, password: string){
        return await bcrypt.compare(password,hash);
    }
}