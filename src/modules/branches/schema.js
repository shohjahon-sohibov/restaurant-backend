const { gql } = require('apollo-server-express')

module.exports = gql`
    type Branches {
        id: ID!
        name: String!
    }

    extend type Query {
        getBranches(restaurantId: ID!): [Branches!]!
        getAllBranches: [Branches!]!
    }

    extend type Mutation {
        newBranch(name: String! restaurantId: ID!):Branches!
    }

`