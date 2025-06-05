import mysql from 'mysql2/promise' //promise allows the use of async and await
import {config} from 'dotenv'

config()

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

export {pool}