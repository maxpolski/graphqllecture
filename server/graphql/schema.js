import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
} from 'graphql';

import userResolver from './resolvers/userResolver';
import postResolver from './resolvers/postResolver';

import UserType from './types/UserType';
import PostType from './types/PostType';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: {
      type: UserType,
      args: {
        id: {
          name: 'id',
          type: GraphQLInt,
        },
      },
      resolve: userResolver,
    },
    todo: {
      type: PostType,
      args: {
        id: {
          name: 'id',
          type: GraphQLInt,
        },
      },
      resolve: postResolver,
    },
  }),
});

const schema = new GraphQLSchema({
  query: queryType,
});

export default schema;
