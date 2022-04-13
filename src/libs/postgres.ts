import { Pool } from "pg"
import { config } from "../config/config"

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
console.log('PASSWORD: ', PASSWORD);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
console.log('**** ', `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`);

const pool = new Pool({
  connectionString: URI
})

export default pool
