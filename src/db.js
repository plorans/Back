import cliente from 'pg'

const { Pool } = cliente;

const pool = new Pool ({
  user: 'postgres',
  host: 'localhost',
  database: 'back',
  password: '2255',
  port: 5432
});

export {pool};