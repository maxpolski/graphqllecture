class Post {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }
}

const posts = [];

export const addPost = (title, text) =>
  posts.push(new Post(title, text)) - 1;

export const getPosts = () => posts;

export const getPostById = (id) => posts[id];
