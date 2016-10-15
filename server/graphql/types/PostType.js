import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: {
      type: GraphQLInt,
    },
    title: {
      type: GraphQLString,
    },
    text: {
      type: GraphQLString,
    },
  },
});

export default PostType;
