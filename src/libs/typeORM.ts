import { DataSource } from "typeorm";
import { config } from "../config/config";
import { Products } from "../db/entities/product.entity";
import { User } from "../db/entities/user.entity";


export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.dbHost,
  port: +config.dbPort,
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  synchronize: true,
  logging: false,
  entities: [Products, User],
  // subscribers: [],
  // migrations: [],
})

export function turnOnORM() {
  AppDataSource.initialize()
    .then(() => {
      console.log("ORM is good");
    })
    .catch((err) => {
      console.log("Error in ORM", err);
    })
}
