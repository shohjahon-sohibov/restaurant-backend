const { temporaryOrders } = require('../../model/model')

module.exports = {
    Query: {
        getAllTempOrders: async() => {
            return  await temporaryOrders.findAll()
        }
    },
    Mutation: {
        newTempOrder: async(_, { name, price, branchId }) => {
            await temporaryOrders.create({ name, price, branchId })
            return "newOrder"
        }
    }
}