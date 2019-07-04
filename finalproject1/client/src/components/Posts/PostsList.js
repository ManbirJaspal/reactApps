import React from "react";
import PostItem from "./PostItem";
import PostCreate from './PostCreate';
import { connect } from "react-redux";
import { fetchPosts,clearPosts } from '../../actions';
import { Link } from 'react-router-dom';


class PostsList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearPosts();
  }

  renderAdmin = (post) => {
    console.log("Inside renderADMIN () IN postList");
    console.log(post.user_id, this.props.currentUserId);
    if (post.post_user_id === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/posts/edit/${post.post_id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/posts/delete/${post.post_id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
    if(this.props.mod === true && post.alert === "true") {
      return (
        <div className="right floated content">
          <Link to={`/posts`} className="ui button primary">
            Alert
          </Link>
        </div>
      );
    }
  }

    renderList() {
      console.log(this.props.posts);
     return this.props.posts.map(post => {
       return (
         <div className="item" key={post.post_id} >
           {this.renderAdmin(post)}
           <i className="large middle aligned icon camera" />
           <div className="content">
             <div>
               <Link  to={`/comments/${post.post_id}`} className="header">
                 {post.title}
               </Link>
               <div class="meta">
          <span>Description</span>
        </div>
        <div className=" description">
          <p>{post.description}</p>
        </div>
        <div class="extra content">
          <span>created by:      {post.post_user_id}</span>
        </div>

             </div>
           </div>
         </div>

           );
           });
   }

   renderCreate() {
     if (this.props.isSignedIn && this.props.mod == null) {

     return (
       <div style={{ textAlign: 'right' }}>
         <Link
           to={`/posts/new/${this.props.match.params.id}`}
           className="ui grey basic button">Create a post
         </Link>
       </div>
     );
   }
 }


    render() {
    return (
   <div>
     <div className="ui container">
       <div className="ui celled list">{this.renderList()}</div>
       {this.renderCreate()}
     </div>
     <Link to='/groups' className="ui grey basic button">Go Back</Link>
   </div>
            );
         }

  }

  const mapStateToProps = state => {
    return {
      posts: Object.values(state.posts),
      currentUserId: state.auth.userId,
      isSignedIn: state.auth.isSignedIn,
      mod: state.auth.mod
    };
  };


export default connect(mapStateToProps, { fetchPosts, clearPosts })(PostsList);
