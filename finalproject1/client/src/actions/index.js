import history from '../history';
import { url } from "../components/utils/RestUtils";
import axios from "axios";
import qs from 'qs';



import {
  SIGN_IN, SIGN_OUT,
  CREATE_POST,
  GET_GROUPS,
  FETCH_POSTS,
  // DELETE_POST,
  // EDIT_POST,
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createPost = formValues => async (dispatch, getState) => {

    const createPost_Data = qs.stringify({
    group_id: 1,
    post: formValues.description,
    user_id: 23,
    title: formValues.title
  });

  axios.post(url + "posts", createPost_Data)
   .then(response => {
    console.log('Post created at actions.');
    console.log(response.data);
    })
}


export const createGroup = formValues => async (dispatch, getState) => {

    const createPost_Data = qs.stringify({
    group_id: 1,
    post: formValues.description,
    user_id: 23,
    title: formValues.title
  });

  axios.post(url + "posts", createPost_Data)
   .then(response => {
    console.log('Post created at actions.');
    console.log(response.data);
    })
}

export const getGroups = () => async dispatch => {
  console.log("inside getGroups in actions");
  axios.get(url + "groups")
  .then(response => {
    console.log(response.data);

    dispatch({
      type: GET_GROUPS,
      payload: response.data
    })
    },
      function(error) {
        console.log(error)
              }
          );
};

export const fetchPosts = (id) => async dispatch => {
  console.log("inside fetchPosts in actions");
  axios.get(url + "posts", {params: {
    groupId: id }
  })
  .then(response => {
    console.log(response.data);
    dispatch({
      type: FETCH_POSTS,
      payload: response.data
    })
  }, function(error) {
    console.log(error);
  });
}
