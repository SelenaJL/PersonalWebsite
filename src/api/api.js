import { blogPosts } from './mock-data/posts';

// return a promise of the mock data that resolves after half a second (not necessary)
export const getFakeBlogPosts = () => new Promise((resolve) => {
  {
    window.setTimeout(() => { resolve(blogPosts) }, 500);
  }
});

const transformPosts = (arrayOfJsonPosts) => {
  return arrayOfJsonPosts.map((singlePostValue) => {
    console.log('one value is', singlePostValue);
    return {
      id: singlePostValue.id,
      title: singlePostValue.title.rendered,
      body: singlePostValue.content.rendered,
    }
  })
}

export const getRealBlogPosts = () =>
  fetch('http://www.selenalatchman.com/wp-json/wp/v2/posts') // returns a promise
  .then((payloadFromTheFetch) => payloadFromTheFetch.json()) //applies a method to the outcome of this before the thing that calls this method recievs it
  .then(transformPosts)
