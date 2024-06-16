import { createContext, useContext, useState } from 'react';
import { commentsData } from '../../Components/SimpleComment/Data/comments';

const CommentContext = createContext({});

const CommentProvider = ({ children }) => {
  const [commentData, setCommentData] = useState(commentsData);

  const addNewReply = (subCommentList, commentID, msg) => {
    for (const subComment of subCommentList) {
      if (subComment.id == commentID) {
        const len = subComment.subComments.length;
        subComment.subComments.push({
          id: `${commentID}${len + 1}`,
          comment: `SubComment ${commentID}.${len + 1}`,
          subComments: [],
        });
        break;
      }
    }

    setCommentData([...commentData]);
  };

  return (
    <CommentContext.Provider value={{ commentData, addNewReply }}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentProvider;

export const useCommentContext = () => useContext(CommentContext);
