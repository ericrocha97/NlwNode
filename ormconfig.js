/*{
  /*dev
  "type": "sqlite",
  "database": "./src/database/database.sqlite",*/
/*deploy
"type": "postgres",
"host": "localhost",
"port": 5432,
"username": "postgres",
"password": "docker",
"database": "chatty",
"migrations": [
  "./src/database/migrations/*.ts"
],
"entities": [
  "./src/entities/*.ts"
],
"cli": {
  "migrationsDir": "./src/database/migrations"
}
}*/

module.exports = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATIONS],
  cli: {
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
  },
}