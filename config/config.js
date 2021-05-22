require ('dotenv'). config ();
const {DB_HOST, DB_USERNAME, DB_PASSWORD} = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "ecommerce",
    "host": DB_HOST,
    "timezone": "-3:00",
    "dialect": "mysql"
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "ecommerce",
    "host": DB_HOST,
    "timezone": "-3:00",
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "ecommerce",
    "host": DB_HOST,
    "timezone": "-3:00",
    "dialect": "mysql"
  }
}