import _ from 'lodash';
import {
  CREATE_POST,
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST,
  EDIT_POST,
} from '../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
       console.log("inside postsReducer FETCH_POSTS");
       console.log(action.paylod);
       return {...state, ..._.mapKeys(action.payload, 'post_id')};
    // case FETCH_POST:
    //   console.log(action.payload);
    //   return {...state, [action.payload.id]: action.payload };
    // case CREATE_POST:
    //   return {...state, [action.payload.id]: action.payload };
    // case EDIT_POST:
    //   return {...state, [action.payload.id]: action.payload };
    // case DELETE_POST:
    //   return _.omit(state, action.payload) // doesnt change the original state object. it creates a copy like above by itself.
    default:
      return state;
  }
}

//mapKeys is a function from lowdash that takes an array and returns an object.
