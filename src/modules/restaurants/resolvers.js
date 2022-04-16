const { Restaurants } = require('../../model/model')

module.exports = {
    Query: {
        getRestaurants: async(_, { categoryId }) => {
            return await Restaurants.findAll({
                where: {
                    categoryId
                }
            })
        },
        getAllRestaurants: async() => {
            return await Restaurants.findAll()
        }
    },
    Mutation: {
        newRestaurant: async(_, { name, categoryId }) => {
            const newRestautant = await Restaurants.create({ name, categoryId })
            return newRestautant
        },
        updateRestaurant: async(_, { name, id }) => {
            const updateRestaurant = await Restaurants.update({ name }, {
                where: {
                    id
                }
            })
            return "updateRestaurant"
        }
    }
}