var express = require('express');
var router = express.Router();
const Autor = require ("../models/autor");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.post('/inserir', async function(req, res, next) {
/*
  const autor = {
    nome: "Lulu",
    sobrenome: "Linda",
    data_nascimento: "2022/03/11"
  }*/
  const autores = await Autor.inserir(req.body);
  res.json(autores.rows);
});

router.put('/atualizar', async function(req, res, next) {

  /*const autor = {
    nome: "Lulu",
    sobrenome: "Linda",
    data_nascimento: "2022/03/11",
    id: " "
  }*/
  const autores = await Autor.atualizar(req.body);
  res.json(autores.rows);
  
});

router.get('/deletar', async function(req, res, next) {

  const autor = {
    nome: "Lulu",
    sobrenome: "Linda",
    data_nascimento: "2022/03/11"
  }
  const autores = await Autor.deletar(autor);
  res.json(autores.rows);
});

module.exports = router;