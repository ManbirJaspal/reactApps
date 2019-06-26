import React from "react";
import PostItem from "./PostItem";
import PostCreate from './PostCreate';
import { connect } from "react-redux";
import { fetchPosts } from '../../actions';
import { Link } from 'react-router-dom';


class PostsList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts(this.props.match.params.id);
  }

    renderList() {
      console.log(this.props.posts);
     return this.props.posts.map(post => {
       return (
         <div className="item" key={post.post_id} >

           <i className="large middle aligned icon camera" />
           <div className="content">
             <div>

               <Link to={`/posts/${post.post_id}`} className="header">

                 {post.title}
               </Link>
             </div>
             <div className="description">{post.post}</div>
           </div>
         </div>
           );
           });
   }

    render() {
    return (
   <div>
     <div className="ui container">

       <div className="ui celled list">{this.renderList()}</div>

     </div>
   </div>
            );
         }

  }

  const mapStateToProps = state => {
    return {
      posts: Object.values(state.posts)
    };
  };


export default connect(mapStateToProps, { fetchPosts })(PostsList);
