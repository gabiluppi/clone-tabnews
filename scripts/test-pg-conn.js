require('dotenv').config({ path: '.env.development' });
const { Client } = require('pg');

const config = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT ? Number(process.env.POSTGRES_PORT) : undefined,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
};
console.log('config object:', config);

const c = new Client(config);

c.connect().then(() => {
  console.log('connected OK');
  return c.end();
}).catch(err => {
  console.error('connect error:');
  console.error(err);
  process.exit(1);
});
