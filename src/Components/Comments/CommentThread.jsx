import React from 'react';

const CommentThread = (props) => {
  const { renderTemplate, commentTree, dispatch, level } = props;
  // Remember: Root is postID -> default post id is postID

  const replyAction = (payload) => {
    dispatch({
      type: 'ADD_COMMENT',
      payload: payload,
    });
  };

  return (
    <>
      {commentTree.map((ele) => {
        const { userID: userName, userImg, msg } = ele.details;
        return renderTemplate(
          userName,
          userImg,
          msg,
          ele.id,
          level,
          replyAction
        );
      })}
    </>
  );
};

export default CommentThread;
