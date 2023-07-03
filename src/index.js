import express from 'express';
import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';
config()

const port = process.env.NODE_DOCKER_PORT;
const app = express();
const pool = createPool({
    host: process.env.MYSQLDB_HOST,
    user: 'root',
    password: process.env.MYSQLDB_ROOT_PASSWORD,
    port: process.env.MYSQLDB_DOCKER_PORT
})

app.use(express.static(`./views-react/dist`));

app.get('/hola', (req, res) => res.send('Hola mundo'));
app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT NOW()');
    res.json(result[0])
});

app.listen(port, () => console.log(`El puerto que escucha es: ${port}`));