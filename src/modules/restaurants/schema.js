const { gql } = require('apollo-server-express')

module.exports = gql`
    type Restaurants {
        id: ID!
        name: String!
    }

    type Query {
        getRestaurants(categoryId: ID!): [Restaurants!]!
        getAllRestaurants: [Restaurants!]!
    }

    type Mutation {
        newRestaurant(name: String! categoryId: ID!): Restaurants!
        updateRestaurant(name: String! id: ID!): String!
    }
`