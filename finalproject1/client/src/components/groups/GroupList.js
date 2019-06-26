import React from "react";
import GroupItem from "./GroupItem";
import { connect } from "react-redux";
import { getGroups } from '../../actions';
import {Link} from 'react-router-dom';

class GroupList extends React.Component {

  componentDidMount() {
    this.props.getGroups();
  }


  renderList() {
   return this.props.groups.map(group => {
     return (
       <div className="item" key={group.group_id} >
         
         <i className="large middle aligned icon camera" />
         <div className="content">
           <div>

             <Link to={`/posts/${group.group_id}`} className="header">

               {group.group_name}
             </Link>
           </div>
           <div className="description">{group.group_description}</div>
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
    groups: Object.values(state.groups)
  };
};

export default connect(mapStateToProps, { getGroups })(GroupList);
