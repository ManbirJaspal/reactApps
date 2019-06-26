import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './postsReducer';
import groupsReducer from './groupsReducer';

export default combineReducers ({
  auth: authReducer,
  form: formReducer,
  posts: postsReducer,
  groups: groupsReducer,
});
