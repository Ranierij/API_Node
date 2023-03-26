const express = require('express');

//Query => ?tipo=esportivo
//meusite.com/clientes/vip/carro?tipo=esportivo
//Route => /2
//meusite.com/clientes/vip/carro/2
//Body => { marca: 'Ferrari', modelo: 'T40' }
//meusite.com/clientes/vip/carro

//CRUD -> Create - Read - Update - Delete

const server = express();
server.use(express.json());
const cursos = ['Node JS', 'JavaScript', 'React Native'];

server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;
    return res.json(cursos[index]);
});

server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

server.post('/cursos', (req, res) => {
    const { nome } = req.body;
    cursos.push(nome);
    return res.json(cursos);
});

server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { nome } = req.body;
    cursos[index] = nome;
    return res.json(cursos);
});

server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;
    cursos.splice(index, 1);

    return res.json({ message: 'Curso deletado com sucesso!' });
});

server.listen(4000);