var express = require('express');
var router = express.Router();
const Autor = require ("../models/autor");

/* GET home page - Autores */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.post('/inserir', async function(req, res, next) {
  const autores = await Autor.inserir(req.body);
  res.json(autores.rows);
});

router.put('/atualizar', async function(req, res, next) {
  const autores = await Autor.atualizar(req.body);
  res.json(autores.rows);
  
});

router.delete('/deletar', async function(req, res, next) {
  const autores = await Autor.deletar(req.body);
  res.json(autores.rows);
});

/* GET home page - Livros */

router.get('/livrosporautor', async function(req, res, next){
  const livros = await Livro.livroporautor(req.body);
  res.json(livros.rows);
})

router.get('/livros', async function(req, res, next) {
  const livros = await Livro.selecionar();
  res.json(livros.rows);
});

router.post('/inserirlivro', async function(req, res, next) {
  const livros = await Livro.inserirlivro(req.body);
  res.json(livros.rows);
});

router.put('/atualizarlivro', async function(req, res, next) {
  const livros = await Livro.atualizarlivro(req.body);
  res.json(livros.rows);
  
});

router.delete('/deletarlivro', async function(req, res, next) {
  const livros = await Livro.deletarlivro(req.body);
  res.json(livros.rows);
});

module.exports = router;