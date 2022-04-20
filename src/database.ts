import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const POSTGRES_HOST = '127.0.0.1'
const POSTGRES_DB = ''
const POSTGRES_USER = ''
const POSTGRES_PASSWORD = ''

const client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
})

export default client