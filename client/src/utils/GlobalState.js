import React, { useReducer, createContext, useContext } from "react";
// Don't forget to import all of your actions!
import {
  UPDATE_POSTS,
  ADD_POST,
  REMOVE_POST,
  SET_CURRENT_POST,
  LOADING 
} from "./actions";

const StoreContext = createContext();

const {Provider} = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: return {...state, posts:[...state.posts, action.post]}
    case REMOVE_POST: return {...state, posts: state.posts.filter(post => post.id !== action.id)}
    case UPDATE_POSTS: return {...state, posts: [...action.posts]}
    default: 
    return state; 
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {posts: []});

  return <Provider value= {[state, dispatch]} {...props}/>;
};


const useStoreContext = () => {
  return useContext(StoreContext)
};

export { StoreProvider, useStoreContext };