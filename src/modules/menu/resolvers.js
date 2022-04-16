const { Menu } = require('../../model/model')

module.exports = {
    Query: {
        getMenu: async(_, { branchId }) => {
            return await Menu.findAll({
                where: {
                    branchId
                }
            })
        },
        getAllMenu: async() => {
            return await Menu.findAll()
        }
    },
    Mutation: {
        newMenu: async(_, { name, price, branchId }) => {
            const newMenu = await Menu.create({ name, price, branchId })
            return newMenu
        },
        updateMenu: async(_, { name, id }) => {
            const updateMenu = await Menu.update({ name }, {
                where: {
                    id
                }
            })
            return "updateMenu"
        },
        deleteMenu: async(_, { id }) => {
            // const 
        }
    }
}