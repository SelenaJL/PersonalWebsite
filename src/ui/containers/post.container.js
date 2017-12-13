import React from 'react';
import { connect } from 'react-redux';
import { onRequestBlogPosts } from './../../state/posts/posts.actions';

const stateProps = (state) => ({ listOfBlogPosts: state.blogPosts });
const actionProps = { requestBlogPosts: onRequestBlogPosts }

// _Var is convention for a private varialbe
// render button to fire redux action, empty payload for now
// render any blog posts that are in redux state on the 'blogPosts' property
const _BlogPosts = ({ listOfBlogPosts, requestBlogPosts }) =>
  <div>
    <div className="blogPosts">
      <button onClick = { () => requestBlogPosts() }>Load Fake Blog Posts</button>
    </div>
    {
      listOfBlogPosts.map(post =>
        <div key={post.id} className="blogPost">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      )
    }
  </div>

export const BlogPosts = connect(stateProps, actionProps)(_BlogPosts);
