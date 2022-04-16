const { gql } = require('apollo-server-express')

module.exports = gql`

    scalar Date 

    type Orders {
        id: ID!
        name: String!
        price: Int!,
        createdAt: Date!
        location: String!
        branchId: ID!
    }

    extend type Query {
        getOrders(branchId: ID!): [Orders!]!
        getAllOrders: [Orders!]!
    }

    extend type Mutation {
        newOrder(name: String! price: Int! location: String! branchId: ID!): Orders!
        updateOrder(name: String! price: Int! location: String! id: ID!): String!
    }
`