/* eslint-disable no-unused-vars */
const apolloLambda = require('apollo-server-lambda');
const admin = require('firebase-admin');
const typeDefs = require('./schema.gql');
const { fetchGames, addOpenings } = require('./resolvers');

const {
  ApolloServer,
  gql,
} = apolloLambda;

const credential = require('./pgnfen2-0dcc7c57af09.json');


admin.initializeApp({
  credential: admin.credential.cert(credential),
});


const resolvers = {
  Query: {
    allGames: (root, args, context) => fetchGames(),
  },
  Mutation: {
    addOpenings: async (root, args, context) => addOpenings(root, args, { ...context, admin }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

exports.handler = server.createHandler(
  {
    cors: {
      origin: '*',
      credentials: true,
    },
  },
);
