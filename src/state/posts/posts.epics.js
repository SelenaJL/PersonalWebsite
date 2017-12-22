import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromPromise';
import { Observable } from 'rxjs/Observable';
import { POSTS, onRecieveBlogPosts } from './posts.actions.js';
import { getRealBlogPosts } from './../../api/api';

/*
// what are the dolla dolla bills for? convention for stream of many
// listen for 'post request' action, grab  fake posts from api.js, fire new action when posts are recieved
const watchForFakePostsRequested = action$ => action$
  .ofType(POSTS.REQUESTED)
  //.filter(({payload}) => (payload.isTechnical === true))
  .switchMap(() => Observable.fromPromise(getFakeBlogPosts())) // gives you another stream
  .map((theBlogPosts) => onRecieveBlogPosts(theBlogPosts));
  // maps existing stream values (list of blog posts) to action object with type and list as payload
  // aka it fires the action
*/

const watchForRealPostsRequested = action$ => action$
  .ofType(POSTS.REQUESTED)
  //.filter(({payload}) => (payload.isTechnical === true))
  .switchMap(() => Observable.fromPromise(getRealBlogPosts())) // gives you another stream
  .map((theBlogPosts) => onRecieveBlogPosts(theBlogPosts));

export const blogPostsEpics = [
  watchForRealPostsRequested,
];
