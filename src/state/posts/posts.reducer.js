export const blogPosts = (state = [], action) => {
  switch (action.type) {
    case 'POSTS_RECIEVED':
      return action.payload;
    default:
      return [];
  }
};
