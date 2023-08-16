const express = require('express');
const router = express.Router();
const db = require('./sequelize');
const Usuarios = require("./model/Usuarios");
const Posts = require("./model/Posts");

db.sync();

//GET Retorna dados de usuarios 
router.get('/', async (req, res) => {
    const {page = 1 , limit = 10} = req.query;
    try {
        const [results, metadata] = await db.query(
            `SELECT * FROM usuarios ORDER BY updatedAt DESC LIMIT :limit OFFSET :offset`,
            { 
                replacements: { limit: limit, offset: (page - 1) * limit },
                type: db.QueryTypes.SELECT
            }
        );
        res.json(results);
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: error.message,
        });
    }
});

//GET Consulta usuario pelo ID
router.get('/usuarios/:id', async (req, res) => {
    try {
        const [results, metadata] = await db.query(
            `SELECT * FROM usuarios WHERE id = :id`,
            { 
                replacements: { id: req.params.id },
                type: db.QueryTypes.SELECT 
            }
        );
        if (results.length === 0){
            res.status(404).json({
                sucess: false,
                message:"usuario não encontrado",
            });
        } else {
            res.json({
                sucess: true,
                usuarios: results[0],
            });
        }
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: error.message,
        });
    }
});


//POST cadastrar novo usuario
router.post('/', async (req, res) => {
    db.query(`INSERT INTO usuarios (nome, email, createdAt, updatedAt) VALUES (?, ?, ?,?)`,
        { replacements: [req.body.nome,req.body.email,  new Date(), new Date()] }
    )
    .then(([results, metadata]) => {
        res.status(201).json({
            success: true,
            message: "Usuarios criado com sucesso",
            usuarios: results
        });
    }).catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    });
});

 
//PUT Atualiza nome do usuario
router.put('/:id', async (req, res) => {
    try {
        const [results, metadata] = await db.query(
            `UPDATE usuarios SET nome = :nome WHERE id = :id`,
            { 
                replacements: { id: req.params.id, nome: req.body.nome },
                type: db.QueryTypes.UPDATE 
            }
        );
        if (metadata.affectedRows === 0){
            res.status(404).json({
                sucess: false,
                message:"Usuario não encontrado",
            });
        } else {
            res.json({
                sucess: true,
                message: "Tarefa atualizada com sucesso",
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
            `DELETE FROM usuarios WHERE id = ?`,
            { 
                replacements: { id: req.params.id },
                type: db.QueryTypes.DELETE 
            }
        );
        if (metadata.affectedRows === 0){
            res.status(404).json({
                sucess: false,
                message:"usuario não encontrado",
            });
        } else {
            res.json({
                sucess: true,
                message: "Usuario deletado com sucesso",
            });
        }
    } catch (error) {
        res.status(500).json({
            sucess: true,
            message: "Usuario deletado com sucesso",
        });
    }
});

module.exports = router;