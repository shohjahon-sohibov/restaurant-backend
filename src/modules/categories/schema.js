const { gql } = require('apollo-server-express')

module.exports = gql`
    type Categories {
        id: ID!
        name: String!
    }

    extend type Query {
        getCategories: [Categories!]!
    }

    extend type Mutation {
        newCategory(name: String!): Categories
        updateCategory(name: String! id: ID!): String!
    }

`