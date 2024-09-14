import { DataSource, createConnection } from "typeorm";
import path from "path";
import url from "url";
import config from "./config/config";
import User from "./entities/User";
import Product from "./entities/Product";
import OrderItem from "./entities/OrderItem";
import Order from "./entities/Order";
import Category from "./entities/Category";
import Cart from "./entities/Cart";

const dataSource = new DataSource({
  type: "postgres",
  host: config.PGHOST,
  port: 5432,
  username: config.PGUSER,
  password: config.PGPASSWORD,
  database: config.PGDATABASE,
  synchronize: true,
  // entities: [
  //   // path.join(__dirname, "..", "entities/**/!(*.test)."),
  //   // path.join(__dirname, "..", "entities/**/*."),
  // ],
  entities: [User, Product, OrderItem, Order, Category, Cart],
  // migrations: ["./migration/**/*"],
  // subscribers: ["./subscriber/**/*"],

  ssl: {
    rejectUnauthorized: false,
  },
});

const database = async () => {
  try {
    await dataSource.initialize();

    // await createConnection({
    //   type: "postgres",
    //   host: config.PGHOST,
    //   port: 5432,
    //   username: config.PGUSER,
    //   password: config.PGPASSWORD,
    //   database: config.PGDATABASE,
    //   entities: [__dirname + "/entities/*"],
    //   synchronize: true,
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
    // });

    console.log("Data Source has been initialized!");
  } catch (e) {
    console.log("Error during Data Source initialization:", e);
    process.exit(1);
  }
};

export default database;
