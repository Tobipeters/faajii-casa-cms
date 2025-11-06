const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  // const { host, port, database, user, password } = parse(env("DATABASE_URL"));
  const dbUrl = env("DATABASE_URL");
  if (!dbUrl) {
    throw new Error("DATABASE_URL is not defined in environment variables");
  }

  const { host, port, database, user, password } = parse(dbUrl);

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
      },
      debug: false,
    },
  };
};
