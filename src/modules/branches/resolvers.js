const { Branches } = require('../../model/model')

module.exports = {
    Query: {
        getBranches: async(_, { restaurantId }) => {
            return await Branches.findAll({
                where: {
                    restaurantId
                }
            })
        }
    },
    Mutation: {
        newBranch: async(_, { name, restaurantId }) => {
            const newBranch = await Branches.create({ name, restaurantId })
            return newBranch
        },
        updateBranch: async(_, { name, id }) => {
            const updateBranch = await Branches.update({ name }, {
                where: {
                    id
                }
            })
            return "updateBranch"
        },
        deleteBranch: async(_, { id }) => {
            const updateBranch = await Branches.drop({id})
            return "updateBranch"
        }
    }
}