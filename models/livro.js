const db = require("../db")

class Livro {
  static async inserir(data) {
    const connect = await db.connect();
    const sql = "insert into livros(titulo, editora, preco, data_publicacao)values($1, $2, $3)";
    const values = [data.titulo, data.editora, data.preco, data.data_publicacao]
    return await connect.query(sql, values);
  }
  static async selecionar() {
    const connect = await db.connect();
    return await connect.query("select * from livros");
  }
  static async atualizar(data) {
    const connect = await db.connect();
    const sql = "update livros set titulo = $2, editora = $3, preco = $4, data_nascimento = $5 where id = $1";
    const values = [data.id, data.titulo, data.editora, data.preco, data.data_publicacao]
    return await connect.query(sql, values);
  }
  static async deletar(data) {
    const connect = await db.connect();
    const sql = "delete from livros where id = $1";
    const values = [data.id]
    return await connect.query(sql, values);
  }
  static async livroporautor(data) {
    const connect = await db.connect();
    const sql = "select * from livros wherw autor_id = $1"
    const values = [data.autor_id];
    return await connect.query(sql, values);
  }
}
module.exports = Livro;