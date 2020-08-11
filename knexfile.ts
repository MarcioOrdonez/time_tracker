import path from 'path';

module.exports = {
    client: 'pg',
    connection:{
        host: process.env.DATABASE_PATH || 'localhost',
        user: process.env.DATABASE_USER || 'postgres',
        password: process.env.DATABASE_PASS || '123456'
    },
    migrations: {
        directory: path.resolve(__dirname,'src','database','migrations')
    },
    useNullAsDefault: true
}