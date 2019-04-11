// const Sequelize = require('sequelize/lib/sequelize')

// const sequelize = new Sequelize(`sqlite:${__dirname}/gnotes.db`);

class Note extends Sequelize.Model {
    //
}
// Note.init({
//     title: Sequelize.STRING,
//     description: Sequelize.TEXT,
//     completed: Sequelize.BOOLEAN
// }, { sequelize })

exports.Note = Note
