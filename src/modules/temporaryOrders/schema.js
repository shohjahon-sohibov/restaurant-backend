const { gql } = require('apollo-server-express')

module.exports = gql`

    type TempOrders {
        id: ID!
        name: String!
        price: Int!,
        branchId: ID!
    }

    extend type Query {
        getAllTempOrders: [TempOrders!]!
    }

    extend type Mutation {
        newTempOrder(name: String! price: Int! branchId: ID!): String
    }
`