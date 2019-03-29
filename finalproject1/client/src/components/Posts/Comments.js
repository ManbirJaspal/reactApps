import React from 'react';
export const Comments = ({comments}) => {

  const renderComments = comments.map((comment) => {
    return <div>{comment.comment}</div>;
  });
  return (
    <div>{renderComments}</div>
  )
}
