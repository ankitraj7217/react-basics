import React from 'react';

import './CommentTemplate.scss';

// username, userpic, id, msg, replyAction
const CommentTemplate = (props) => {
  const { userName, userImg, msg, level, replyAction } = props;

  return (
    <article className="comment">
      <img src={userImg} alt={userName} className="comment-img" />
      <section className="comment-content">
        <cite className="comment-content__username">{userName}</cite>
        <p>{msg}</p>
      </section>
      <button className="comment-reply" onClick={replyAction}>
        Reply
      </button>
    </article>
  );
};

export default CommentTemplate;
