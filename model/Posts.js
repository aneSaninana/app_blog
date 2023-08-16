const db = require("../sequelize");
const Sequelize = require("sequelize");
const Usuarios = require("./Usuarios");

const Posts = db.define('Posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: Sequelize.STRING,
  conteudo: Sequelize.TEXT,
  autor_id: Sequelize.INTEGER
});

Posts.belongsTo(Usuarios, { foreignKey: 'autor_id' });
Posts.sync();

module.exports = Posts;