import {
  getUserById,
} from '../../data/user';

export default (_, { id }) =>
  getUserById(id);
