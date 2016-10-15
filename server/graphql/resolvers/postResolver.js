import {
  getPostById,
} from '../../data/posts';

export default (_, { id }) =>
  getPostById(id);
