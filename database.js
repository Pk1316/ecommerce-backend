import { DataSource } from "typeorm";
import path from "path";
import url from "url";
import config from "./config/config.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataSource = new DataSource({
  type: "postgres",
  host: config.PGHOST,
  port: 5432,
  username: config.PGUSER,
  password: config.PGPASSWORD,
  database: config.PGDATABASE,
  synchronize: true,
  entities: [
    path.join(__dirname, "..", "entities/**/!(*.test).cjs"),
    path.join(__dirname, "..", "entities/**/*.cjs"),
  ],
  ssl: {
    rejectUnauthorized: false,
  },
});

const database = async () => {
  dataSource
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((error) => {
      console.error("Error during Data Source initialization:", error);
      process.exit(1);
    });
};

export default database;
