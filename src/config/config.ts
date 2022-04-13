import dotenv from "dotenv"

dotenv.config()

type Config = {
  env: string,
  dbHost: string,
  dbPort: string,
  dbUser: string,
  dbPassword: string,
  dbName: string
}

export const config: Config = {
  env: process.env.NODE_ENV as string,
  dbHost: process.env.DB_HOST as string,
  dbPort: process.env.DB_PORT as string,
  dbUser: process.env.DB_USER as string,
  dbPassword: process.env.DB_PASSWORD as string,
  dbName: process.env.DB_NAME as string
}