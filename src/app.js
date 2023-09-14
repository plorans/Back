import express from 'express';

const app = express();
app.use(express.json());

import usuarioRuta from '../src/routes/usuarioRuta.js';

app.use('/api', usuarioRuta);

app.get('/', (req, res) => {
    res.send('Hola mundo!');
});
    
app.post('/adios', (req, res) => {
    res.send('ADIOS');
});

const port = 5002 || process.env.port;

app.listen(port, () => {
    console.log(`El puerto es : ${port}`);
});