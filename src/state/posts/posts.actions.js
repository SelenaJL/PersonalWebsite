export const POSTS = {
  RECIEVED: 'POSTS_RECIEVED',
  REQUESTED: 'POSTS_REQUESTED',
};

export const onRequestBlogPosts = () =>
({
  type: POSTS.REQUESTED,
});

export const onRecieveBlogPosts = (blogPosts) => ({
  type: POSTS.RECIEVED,
  payload: blogPosts,
});
