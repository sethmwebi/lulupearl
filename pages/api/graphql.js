import Cors from "micro-cors";
import { gql, ApolloServer } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (parent, args, context) => "Hey Faith!"
  }
}

export const config = {
  api: {
    bodyParser: false
  }
}

const cors = Cors()

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const serverStart = server.start();

export default cors(async (req, res) => {
  if(req.method === "OPTIONS"){
    res.end()
    return false;
  }

  await serverStart;
  await server.createHandler({path: "/api/graphql"})(req, res)
})
