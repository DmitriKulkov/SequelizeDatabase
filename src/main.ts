import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  repositoryMode: true,
  dialect: "postgres",
  host: "postgres",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "some_db",
  storage: ":memory:",
  models: [__dirname + "/models"],
});
