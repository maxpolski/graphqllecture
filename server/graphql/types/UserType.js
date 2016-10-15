import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

import PostType from './PostType';
import postResolver from '../resolvers/postResolver';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: usr => usr.posts.map(id => postResolver({}, { id })),
    },
  },
});

export default UserType;
