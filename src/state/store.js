import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { blogPosts } from './posts/posts.reducer';
import { blogPostsEpics } from './posts/posts.epics';

const rootReducer = combineReducers({
  blogPosts,
});
const logger = createLogger({ collapsed: true });

const rootEpic = combineEpics(
  ...blogPostsEpics,
);
const epicMiddleware = createEpicMiddleware(rootEpic);

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      logger,
      epicMiddleware,
    ),
  ),
);
