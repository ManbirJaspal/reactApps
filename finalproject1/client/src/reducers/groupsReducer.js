import _ from 'lodash';
import {
  GET_GROUPS
} from '../actions/types';


export default (state = {}, action) => {

  switch (action.type) {
    case GET_GROUPS:
       console.log("inside GET_GROUPS in groupsREducer");

       return {...state, ..._.mapKeys(action.payload, 'group_id')};
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

//mapKeys is a function from lowdadsh that takes an array and returns an object.
