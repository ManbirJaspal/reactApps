import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Signup } from "./landing/signup";
import { Students } from "./landing/students";
import { Login } from "./landing/Login";
import  GroupList  from "./groups/GroupList";
import SearchBar from "./landing/SearchBar";
import MainView from "./landing/MainView";
import history from '../history';
import PostCreate from './Posts/PostCreate';
import PostsList from './Posts/PostsList';


const Landing = () => {
  return(
    <div className="ui container">
      <Router history={history}>
        <div>
          <Route path="/" component={Signup} />
          <Route path="/groups/posts/new" component={PostCreate} />
          <Route path="/groups" component={GroupList} />
          <Route path="/signup" component={Signup} />
          <Route path="/students" component={Students} />
          <Route path="/login" component={Login} />
          <Route path="/posts/:id" component={PostsList} />
          <Route path="/post/:id" component={MainView} />
        </div>
      </Router>
    </div>
        );
        };

export default Landing;
