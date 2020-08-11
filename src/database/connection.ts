import Knex from 'knex';
import { config } from 'dotenv';

import pg from 'pg';

const db = Knex({
    client:'pg',
    connection:{
        host: process.env.DATABASE_PATH || 'localhost',
        user: process.env.DATABASE_USER || 'postgres',
        password: process.env.DATABASE_PASS || '123456'
    }
});

export default db;