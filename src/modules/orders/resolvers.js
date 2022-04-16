const { Orders } = require('../../model/model')

module.exports = {
    Query: {
        getOrders:async (_, { branchId}) => {
            return await Orders.findAll({
                where: {
                    branchId
                }
            })
        },
        getAllOrders: async() => {
            return  await Orders.findAll()
        }
    },
    Mutation: {
        newOrder: async(_, { name, number, price, location, branchId }) => {
            const newOrder = await Orders.create({ name, number, price, location, branchId })
            return newOrder
        },
        updateOrder: async(_, { name, number, price, location, id }) => {
            await Orders.update({ name, number, price, location, }, {
                where: {
                    id
                }
            })
            return "updateOrder"
        }
    }
}