import express from 'express';
import graphQLHTTP from 'express-graphql';
import schema from './graphql/schema';

const PORT = '3000';

export const launch = () => {
  const server = express();
  server.use('/graphql', graphQLHTTP({
    schema,
    graphiql: true,
  }));
  server.listen(PORT, () => {
    console.log(`Server is listening port ${PORT}`);
  });
};
