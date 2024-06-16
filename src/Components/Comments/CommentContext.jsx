import { createContext, useContext, useReducer } from 'react';

const CommentContext = createContext({});

// initially, there will be a single key
const addComment = (currentState, commentID, commentDetails, parentID) => {
  for (let i = 0; i < currentState.length; i++) {
    if (currentState[i].id === parentID) {
      currentState[i].child.push({
        id: commentID,
        details: commentDetails,
        child: [],
      });
      return;
    }
    addComment(currentState[i].child, commentID, commentDetails, parentID);
  }
};

function reducerFunc(state, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      addComment(state, ...action.payload);
      return [...state];

    default:
      break;
  }
}

const initialState = [
  {
    id: 'postID',
    details: {
      userID: 'ankitraj7217',
      userImg: 'hahaha',
      msg: 'dKnsKnkn',
    },
    child: [],
  },
];

const CommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  return (
    <CommentContext.Provider value={{ state, dispatch }}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentProvider;

export const useCommentContext = () => useContext(CommentContext);
