// export const blogPosts = (state = [], { type, payload  }) => {
export const blogPosts = (state = [], action) => {
  switch (action.type) {
    case 'POSTS_RECIEVED':
      // return action.payload;
      return {
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
      }
    default:
      return [];
  }
};
