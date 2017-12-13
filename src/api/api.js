import { blogPosts } from './mock-data/posts';

// return a promise of the mock data that resolves after half a second (not necessary)
export const getFakeBlogPosts = () => new Promise((resolve) => {
  {
    window.setTimeout(() => { resolve(blogPosts) }, 500);
  }
});
