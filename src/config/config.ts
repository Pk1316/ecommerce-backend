import dotenv from "dotenv";
dotenv.config();

const {
  PGHOST ,
   PGDATABASE,
  PGUSER ,
  PGPASSWORD,
  ENDPOINT_ID ,
  PORT = 3000,
  MODE = process.env.MODE,
  ACCESS_TOKEN_SECRET = "ACCESS_TOKEN_SECRET",
  REFRESH_TOKEN_SECRET = "REFRESH_TOKEN_SECRET",
} = process.env;

const config = {
  port: PORT,
  mode: MODE || "development",
  PGHOST,
  PGDATABASE,
  PGUSER,
  PGPASSWORD: decodeURIComponent(PGPASSWORD!),
  ENDPOINT_ID,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
};
if (config.mode === "development") console.log(config);
export default config;
