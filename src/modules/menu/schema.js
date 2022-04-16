const { gql } = require('apollo-server-express')

module.exports = gql`
    type Menu {
        id: ID!
        name: String!,
        price: Int!
        branchId: ID!
    }

    extend type Query {
        getMenu(branchId: ID!): [Menu!]!
        getAllMenu: [Menu!]!
    }

    extend type Mutation {
        newMenu(name: String! branchId: ID! price: Int!):Menu!
        updateMenu(name: String! price: Int! id: ID!):String!
    }

`