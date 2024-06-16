import React from 'react';
import Comment from '../../Components/SimpleComment/Comment';
import CommentProvider, {
  useCommentContext,
} from '../../Components/SimpleComment/CommentContext';

const withWrapperComment = (ChildComponent) => {
  return () => (
    <CommentProvider>
      <ChildComponent />
    </CommentProvider>
  );
};

const SimpleComment = () => {
  const { commentData } = useCommentContext();

  return (
    <>
      <Comment commentData={commentData} />
    </>
  );
};

export default withWrapperComment(SimpleComment);
