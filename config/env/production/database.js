const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  // const { host, port, database, user, password } = parse(env("DATABASE_URL"));
  // const dbUrl = env("DATABASE_URL");
  // if (!dbUrl) {
  //   throw new Error("DATABASE_URL is not defined in environment variables");
  // }

  // const { host, port, database, user, password,, dbUrl } = parse(dbUrl);

  return {
    connection: {
      client: "postgres",
      connection: {
        dbUrl: env("DATABASE_URL", "postgresql://postgres:12345&Abcde?!@db.mnnbswrjyzvsjutomgbl.supabase.co:5432/postgres"),
        host: env("DATABASE_HOST", "db.mnnbswrjyzvsjutomgbl.supabase.co"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "postgres"),
        user: env("DATABASE_USERNAME", "postgres.faaji-casa"),
        password: env("DATABASE_PASSWORD", "12345&Abcde?!"),
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
