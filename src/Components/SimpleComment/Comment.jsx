import React, { useState } from 'react';

import './Comment.scss';
import { useCommentContext } from '../../Components/SimpleComment/CommentContext';
import { commentsData } from '../../Components/SimpleComment/Data/comments';

const CommentItem = (props) => {
  const { comment, addReply } = props;
  const [input, setInput] = useState('');
  const [showReply, setShowReply] = useState(false);
  const [showAddReply, setShowAddReply] = useState(false);

  const _onSubmit = (e, id, msg) => {
    e.stopPropagation();
    addReply(id, msg);
  };

  return (
    <article className="comment">
      <section className="comment-details">
        <p className="comment-details-txt">{comment.comment}</p>
        <aside className="comment-details-replies">
          {comment.subComments.length > 0 && (
            <span
              className="comment-details-replies__view"
              onClick={() => setShowReply((prev) => !prev)}
            >
              View Reply
            </span>
          )}
          <span
            className="comment-details-replies__add"
            onClick={() => setShowAddReply((prev) => !prev)}
          >
            Add Reply
          </span>
        </aside>
      </section>
      <section className="comments-children">
        {showReply && <Comment commentData={comment.subComments} />}
      </section>
      {showAddReply && (
        <div className="comment-reply">
          <input
            type="text"
            placeholder="Enter your reply"
            autoFocus
            className="comment-reply__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="comment-reply__submit"
            onClick={(e) => _onSubmit(e, comment.id, input)}
          >
            |&gt;
          </button>
        </div>
      )}
    </article>
  );
};

const Comment = (props) => {
  const { commentData } = props;
  const { addNewReply } = useCommentContext();

  const addReply = (id, msg) => {
    addNewReply(commentData, id, msg);
  };

  return (
    <>
      {commentData.map((comment) => {
        return (
          <CommentItem comment={comment} key={comment.id} addReply={addReply} />
        );
      })}
    </>
  );
};

export default Comment;
