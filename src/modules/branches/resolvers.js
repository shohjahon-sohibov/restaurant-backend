const { Branches } = require('../../model/model')

module.exports = {
    Query: {
        getBranches: async(_, { restaurantId }) => {
            return await Branches.findAll({
                where: {
                    restaurantId
                }
            })
        },
        getAllBranches: async() => {
            return await Branches.findAll()
        }
    },
    Mutation: {
        newBranch: async(_, { name, restaurantId }) => {
            const newBranch = await Branches.create({ name, restaurantId })
            return newBranch
        }
    }
}