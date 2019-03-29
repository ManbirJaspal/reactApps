import React from "react";
import GroupItem from "./GroupItem";

const GroupList = ({ groups, onGroupSelect, onGetPosts}) => {
  const renderedList = groups.map(group => {
    return (
    <GroupItem
      id={group.group_id}
      name={group.group_name}
      description={group.group_description}
      onGroupSelect={onGroupSelect}
      onGetPosts={onGetPosts}
    />
);
  });

  return (
    <div className="ui relaxed divided list">{renderedList}</div>
);
};

export default GroupList;
