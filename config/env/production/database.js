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
        acquireConnectionTimeout: 600000,
        pool: {
          min: 0,
          max: 100,
          acquireTimeoutMillis: 300000,
          createTimeoutMillis: 300000,
          destroyTimeoutMillis: 50000,
          idleTimeoutMillis: 300000,
          reapIntervalMillis: 10000,
          createRetryIntervalMillis: 2000,
          propagateCreateError: false,
        },
      },
    },
  },
});
