const http = require('http')
const express = require('express')
const app = express()
const { ApolloServer } = require('apollo-server-express')
const { PORT } = require('./config')
const { sequelize } = require('./lib/sequlize')
const modules = require('./modules');

sequelize.sync({ force: false })
.then(() => console.log('connected'))
.catch(e => console.log(e.message))

const server = new ApolloServer({
    modules,
    introspection: true,
    playground: true
});

const httpServer = http.createServer(app)
server.applyMiddleware({ app })

httpServer.listen({ port: PORT }, () => {
    console.log(PORT + server.graphqlPath);
})