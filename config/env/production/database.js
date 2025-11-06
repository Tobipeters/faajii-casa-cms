const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  // const { host, port, database, user, password } = parse(env("DATABASE_URL"));
  const dbUrl = env("DATABASE_URL");
  if (!dbUrl) {
    throw new Error("DATABASE_URL is not defined in environment variables");
  }

  // const { host, port, database, user, password } = parse(dbUrl);

  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "dpg-d46hiia4d50c73b2kv30-a"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "faaji_casa_db"),
        user: env("DATABASE_USERNAME", "faaji_casa_db_user"),
        password: env("DATABASE_PASSWORD", "RLqPLDHf0BvpaU361lVV0BgX9VYlUYj0"),
        ssl: {
          rejectUnauthorized: false, // required by Render’s managed PostgreSQL
        },
        // host,
        // port,
        // database,
        // user,
        // password,
      },
      debug: false,
    },
  };
};
