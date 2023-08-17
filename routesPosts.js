const express = require('express');
const router = express.Router();
const db = require('./sequelize');
const Usuarios = require("./model/Usuarios");
const Posts = require("./model/Posts");

db.sync();


//GET Retorna todas as postagens
router.get('/', async (req, res) => {
    try {
        const results = await db.query(
            `SELECT * FROM posts ORDER BY updatedAt DESC`,
            { 
                type: db.QueryTypes.SELECT
            }
        );
        res.json(results);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

//GET Consulta uma tarefa pelo ID
router.get('/:id', async (req, res) => {
    try {
        const [results, metadata] = await db.query(
            `SELECT * FROM posts WHERE id = :id`,
            { 
                replacements: { id: req.params.id },
                type: db.QueryTypes.SELECT 
            }
        );
        if (results.length === 0){
            res.status(404).json({
                sucess: false,
                message:"post não encontrado",
            });
        } else {
            res.json({
                sucess: true,
                posts: results[0],
            });
        }
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: error.message,
        });
    }
});

// Post realizar nova postagem 
router.post('/', async (req, res) => {
    db.query(`INSERT INTO posts (titulo,conteudo, autor_id, createdAt, updatedAt) VALUES (?, ?, ?,?, ?)`,
        { replacements: [req.body.titulo, req.body.conteudo, req.body.autor_id, new Date(), new Date()] }
    )
    .then(([results, metadata]) => {
        res.status(201).json({
            success: true,
            message: "Post criado com sucesso",
            results: results
        });
    }).catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    });
});

 
//PUT Atualiza titulo pelo ID
router.put('/:id', async (req, res) => {
    try {
        const [results, metadata] = await db.query(
            `UPDATE posts SET titulo = :titulo WHERE id = :id`,
            { 
                replacements: { id: req.params.id, titulo: req.body.titulo },
                type: db.QueryTypes.UPDATE 
            }
        );
        if (metadata.affectedRows === 0){
            res.status(404).json({
                sucess: false,
                message:"Post não encontrada",
            });
        } else {
            res.json({
                sucess: true,
                message: "Titulo atualizado com sucesso",
            });
        }
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: error.message,
        });
    }
});

//DELETE Deleta uma tarefa pelo ID
router.delete('/:id', async (req, res) => {
    try {
        const [results, metadata] = await db.query(
            `DELETE FROM posts WHERE id = ?`,
            { 
                replacements: { id: req.params.id },
                type: db.QueryTypes.DELETE 
            }
        );
        if (metadata.affectedRows === 0){
            res.status(404).json({
                sucess: false,
                message:"Post não encontrado",
            });
        } else {
            res.json({
                sucess: true,
                message: "Post deletado com sucesso",
            });
        }
    } catch (error) {
        res.status(500).json({
            sucess: true,
            message: "Post deletado com sucesso",
        });
    }
});

module.exports = router;