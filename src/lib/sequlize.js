const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('postgres://cxovsdje:g6ZGQcmAOdQQ3V1Nztrr6WC268_LpK1b@mahmud.db.elephantsql.com/cxovsdje')

module.exports = {
    sequelize,
    DataTypes
}
