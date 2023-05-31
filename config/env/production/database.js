const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
        debug: false,
        debug: false,
        acquireConnectionTimeout: 5000,
        pool: {
          min: 0,
          max: 10,
          createTimeoutMillis: 8000,
          acquireTimeoutMillis: 8000,
          idleTimeoutMillis: 8000,
          reapIntervalMillis: 1000,
          createRetryIntervalMillis: 100,
      },
    },
  },
});
