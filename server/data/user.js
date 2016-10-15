class User {
  constructor(name, posts = []) {
    this.name = name;
    this.posts = posts;
  }
}

const users = [];

export const addUser = (name, postsIds) =>
  users.push(new User(name, postsIds)) - 1;

export const getUsers = () => users;

export const getUserById = id => users[id];

export const addPostToUser = (userId, post) =>
  users[userId].posts.push(post);
