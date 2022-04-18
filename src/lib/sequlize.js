const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('postgres://gxvcqikc:aPzRK6bOFfc8S2w1xQ5htGZTs5nvu4Sa@rajje.db.elephantsql.com/gxvcqikc')

module.exports = {
    sequelize,
    DataTypes
}