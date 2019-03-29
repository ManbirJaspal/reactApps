import React from 'react';
import SearchBar from './SearchBar';
import GroupList from '../groups/GroupList';
import PostsList from '../Posts/PostsList';
import PostDetail from '../Posts/PostDetail';
import axios from 'axios';
import {url, getPosts} from "../utils/RestUtils";
import Header from '../Header';

class MainView extends React.Component {
  state = {grpSearchTerm:'',
            groups: [],
            posts: [],
            comments: [],
            viewState: 'groups'
            };


            componentDidMount() {
              console.log(this.state);
              if(this.state.viewState === "groups") {
                axios.get(url + "groups").then(
                    function(response) {
                        this.setState({ groups: response.data });
                    }.bind(this),
                    function(error) {
                        console.log(error)
                    }
                );
              }

            }

  onTermSubmit = (term) => {

  }

  onGetPosts = (response) => {
    console.log(response.data[0].group_id);
    this.setState({posts: response.data, viewState: 'posts'});
  }

  onGroupSelect(id, onGetPosts) {
    console.log("in click handler - "+id);
    axios.get(url + "posts", {params: {
        groupId: id  }}).then(
      function(response) {
        onGetPosts(response);
      },
      function(error) {
        console.log(error);
      }
    );
  }

  onGetComments = (response) => {
    this.setState({comments: response.data, viewState: 'comments'});
  }

  onPostSelect(id, onGetComments) {
    console.log("in click handler - "+id);
    axios.get(url + "comments", {params: {
        postId: id  }}).then(
      function(response) {
        onGetComments(response);
      },
      function(error) {
        console.log(error);
      }
    );
  }


  render() {
    return (
      <div>
        <Header/>
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          {this.state.viewState === 'groups' && this.state.groups.length > 0 ?
            <GroupList groups={this.state.groups} onGroupSelect={this.onGroupSelect} onGetPosts={this.onGetPosts}/>
          : null}
          {this.state.viewState === 'posts' && this.state.posts.length > 0?
            <PostsList posts={this.state.posts} onPostSelect={this.onPostSelect} onGetComments={this.onGetComments}/>
          : null}
          {this.state.viewState === 'comments' && this.state.comments.length > 0?
            <PostDetail comments={this.state.comments}/>
          : null}

        </div>
      </div>
              );
            }
}

export default MainView;
