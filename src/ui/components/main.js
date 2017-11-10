import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Contact } from './../pages/contact'
import { Blog } from './../pages/blog'
import { Resume } from './../pages/resume'

export const Main = () => (
  <Switch>
    <Route exact path='/' component={Contact}/>
    <Route path='/blog' component={Blog}/>
    <Route path='/resume' component={Resume}/>
  </Switch>
);