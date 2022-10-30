const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3021;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'ATVS2.db'; //use o nome que você achar melhor para o banco de dados

app.use(express.json());

app.get('/EXPERIENCIA', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT ID_USUARIO, NOME_EMPRESA, INICIO_EMPRESA, FIM_EMPRESA, CARGO, DESCRICAO_CARGO FROM EXPERIENCIA ORDER BY ID_USUARIO DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.get('/FORMACAO', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT ID_USUARIO, CURSO, ANO_INICIO, ANO_FIM, DESCRICAO_CURSO FROM FORMACAO ORDER BY ID_USUARIO DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});


app.get('/HABILIDADE', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT ID_USUARIO, COMPETENCIA, NIVEL_COMPETENCIA FROM HABILIDADES ORDER BY ID_USUARIO DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});


app.get('/INFORMACOES_PESSOAIS', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT ID_USUARIO, NOME_COMPLETO, CARGO, ENDERECO, TEL, EMAIL, DESCRICAO_PESSOAL, FOTO FROM INFORMACOES_PESSOAIS ORDER BY ID_USUARIO DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.get('/PERSONALIDADE', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT ID_USUARIO, CARACTERISTICAS, NIVEL FROM PERSONALIDADE ORDER BY ID_USUARIO DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});


app.get('/REALIZACOES', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT ID_USUARIO, NOME_EMPRESA, ANO, DESC_REALIZACAO FROM REALIZACOES ORDER BY ID_USUARIO DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
}); 

/* Inicia o servidor */
app.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});