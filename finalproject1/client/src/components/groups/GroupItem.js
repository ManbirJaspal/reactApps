import React from "react";
import { getPosts } from "../utils/RestUtils";
import {Students} from '../landing/students';


const GroupItem = ({id, name, description, onGroupSelect, onGetPosts}) => {
  return (
    <div className="ui item" onClick={() => onGroupSelect(id, onGetPosts)}>
      <div className="item">
        <div className="content">
          <div className="header">
            <h1>{name}</h1>
          </div>
          <div className="meta">
            <span>Description</span>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupItem;
