//Includes
var Sequelize = require('sequelize');
//Module exports
module.exports = function(app) {
    //Declare model
    var Model = app.sequelize.define('agendamentos',{  
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        dia: {
          type: Sequelize.DATE,
          allowNull: false
        },
        id_horario: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'horario',
                key: 'id'
            }
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false
          },
        comentario: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        id_disciplina: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'disciplina',
                key: 'id'
            }
        },
    },{
        //Disabled fields for not create automatic into table
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        freezeTableName: true,
        tableName: 'agendamentos'
    });
    //Returns
    return Model;
};
