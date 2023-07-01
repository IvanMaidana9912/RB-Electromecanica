import express from 'express';

const app = express()
app.use(express.static(`./React/dist`));

app.listen(3001);

console.info("hola server node");