import React from 'react';
import CommentTemplate from '../../Components/Comments/CommentTemplate';
import CommentThread from '../../Components/Comments/CommentThread';
import useCommentContext from '../../Components/Comments/CommentContext.jsx';

const userDetails = {
  userName: 'Ankit Raj',
  userImg: 'https://picsum.photos/200/300',
  msg: 'Hello, How are you friends. Chai Peelo. Bacha Yadav. Hello, How are you friends. Chai Peelo. Bacha Yadav.Hello, How are you friends. Chai Peelo. Bacha Yadav',
  id: 'AR7217',
};

const Comments = () => {
  const replyButton = () => {};
  const { state: commentTree, dispatch } = useCommentContext();

  const renderTemplate = (userName, userImg, msg, id, level, replyAction) => {
    return (
      <CommentTemplate
        userName={userName}
        userImg={userImg}
        msg={msg}
        id={id}
        level={level}
        replyAction={replyAction}
      />
    );
  };

  return (
    <>
      <CommentThread
        renderTemplate={renderTemplate}
        state={commentTree}
        dispatch={dispatch}
        level={1}
      />
    </>
  );
};

export default Comments;
