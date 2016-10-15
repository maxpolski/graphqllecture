import { addUser } from '../server/data/user';
import { addPost } from '../server/data/posts';

const posts = [
  {
    title: 'Title1',
    text: 'Text1',
  },
  {
    title: 'Title2',
    text: 'Text2',
  },
  {
    title: 'Title3',
    text: 'Text3',
  },
  {
    title: 'Title4',
    text: 'Text4',
  },
  {
    title: 'Title5',
    text: 'Text5',
  },
];

export const generate = () => {
  const postsIds = posts.map(post => addPost(post.title, post.text));
  addUser('user1', postsIds);
};
