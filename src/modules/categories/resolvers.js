const { Categories } = require('../../model/model')

module.exports = {
    Query: {
        getCategories: async() => {
            return await Categories.findAll()
        }
    },
    Mutation: {
        newCategory: async(_, { name }) => {
            const newCategory = await Categories.create({ name })
            return newCategory
        },
        updateCategory: async(_, { name, id }) => {
            const updatedCategory = await Categories.update({ name }, {
                where: {
                    id
                }
            })
            return "updatedCategory"
        },
        deleteCategory: async(_, { id }) => {
            const deletedCategory = await Categories.drop({ id })
            return "deletedCategory"
        }
    }
}