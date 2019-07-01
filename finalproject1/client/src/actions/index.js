import history from '../history';
import { url } from "../components/utils/RestUtils";
import axios from "axios";
import qs from 'qs';

import {
  SIGN_IN, SIGN_OUT,
  CREATE_POST,
  GET_GROUPS,
  FETCH_POSTS,
  CREATE_GROUP,
  FETCH_POST,
  EDIT_POST,
  FETCH_GROUP,
  EDIT_GROUP,
  DELETE_POST,
  GET_COMMENTS,
  CREATE_COMMENT,
  FETCH_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  CLEAR_POSTS,
  CLEAR_COMMENTS

} from './types';

export const signIn = (id) => (dispatch) => {
  console.log("inside signIn action", id)
  dispatch({
    type: SIGN_IN,
    payload: id
  })
  history.push('/groups');
};


export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createPost = (formValues, id) => async (dispatch, getState) => {
  console.log("inside createPost actions");
  const {userId} = getState().auth;
  const createPost_Data = qs.stringify({
    group_id: id,
    description: formValues.description,
    user_id: userId,
    title: formValues.title
  });

  await axios.post(url + "posts", createPost_Data)
  .then(response => {
    console.log('Post created at actions.');
    console.log(response.data);
    dispatch({
      type: CREATE_POST,
      payload: response.data
    })
    history.push(`/posts/${id}`);
  },
  function(error) {
    console.log(error)
  }
);
}


export const createGroup = formValues => async (dispatch, getState) => {

  console.log("inside createGroup actions");
  const {userId} = getState().auth;

  const createGroup_Data = qs.stringify({
    group_description: formValues.group_description,
    user_id: userId,
    title: formValues.group_name
  });

  await axios.post(url + "groups", createGroup_Data)
  .then(response => {
    console.log('Group created at actions.');
    console.log(response.data);
    dispatch({
      type: CREATE_GROUP,
      payload: response.data
    })
    history.push(`/groups`);
  },
  function(error) {
    console.log(error)
  }
);
}

export const getGroups = () => async dispatch => {
  console.log("inside getGroups in actions");
  await axios.get(url + "groups")
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

export const fetchGroup = (id) => async dispatch => {
  console.log("inside fetchGroup in actions");
  console.log(id);
  await axios.get(url + "group", {params: {
    group_id: id }
  })
  .then(response => {
    console.log(response.data);
    dispatch({
      type: FETCH_GROUP,
      payload: response.data
    })
  }, function(error) {
    console.log(error);
  });
}

export const editGroup = (id, formValues) => async dispatch => {
  console.log("inside editGroup in actions");
  console.log(id);

  const update_GroupData = qs.stringify({
    group_description: formValues.group_description,
    group_title: formValues.group_name,
    group_id: id
  });

  await axios.put(url + "group", update_GroupData)
  .then(response => {
    console.log(response.data);
    dispatch({
      type: EDIT_GROUP,
      payload: response.data
    })
    history.push("/groups");
  }, function(error) {
    console.log(error);
  });
}


export const fetchPosts = (id) => async dispatch => {
  console.log("inside fetchPosts in actions");
  await axios.get(url + "posts", {params: {
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

export const fetchPost = (id) => async dispatch => {
  console.log("inside fetchPost in actions");
  console.log(id);
  await axios.get(url + "post", {params: {
    post_id: id }
  })
  .then(response => {
    console.log(response.data);
    dispatch({
      type: FETCH_POST,
      payload: response.data
    })
  }, function(error) {
    console.log(error);
  });
}

export const editPost = (id, formValues) => async dispatch => {
  console.log("inside editPost in actions");
  console.log(id);

  const update_PostData = qs.stringify({
    description: formValues.description,
    title: formValues.title,
    post_id: id
  });

  await axios.put(url + "post", update_PostData)
  .then(response => {
    console.log(response.data);
    dispatch({
      type: EDIT_POST,
      payload: response.data
    })
    history.push("/groups");
  }, function(error) {
    console.log(error);
  });
}

export const deletePost = (id) => async dispatch => {
  console.log("inside deletePost in actions");
  console.log(id);
  await axios.delete(url + "post", {params: {
    post_id: id }
  })
  .then(response => {
    dispatch({
      type: DELETE_POST,
      payload: id
    })
    history.push('/groups');
  }, function(error) {
    console.log(error);
  });
}

export const clearPosts = () => (dispatch) => {
  console.log("inside clearPost() in action")
  dispatch({
    type: CLEAR_POSTS
  })
};

export const createComment = (formValues, id) => async (dispatch, getState) => {
  console.log("inside createComment actions");
  const {userId} = getState().auth;
  const createComment_Data = qs.stringify({
    post_id: id,
    comment: formValues.comment,
    comment_user_id: userId
  });

  await axios.post(url + "comments", createComment_Data)
  .then(response => {
    console.log('Comment created at actions.');
    console.log(response.data);
    dispatch({
      type: CREATE_COMMENT,
      payload: response.data
    })
    history.push(`/comments/${id}`);
  },
  function(error) {
    console.log(error)
  }
);
}

export const fetchComments = (id) => async dispatch => {
  console.log("inside fetchComments in actions");
  await axios.get(url + "comments", {params: {
    post_id: id }
  })
  .then(response => {
    console.log(response.data);
    dispatch({
      type: GET_COMMENTS,
      payload: response.data
    })
  }, function(error) {
    console.log(error);
  });
}

export const clearComments = () => (dispatch) => {
  console.log("inside clearComments() in action")
  dispatch({
    type: CLEAR_COMMENTS
  })
};

export const fetchComment = (id) => async dispatch => {
  // console.log("inside fetchPost in actions");
  // console.log(id);
  // await axios.get(url + "post", {params: {
  //   post_id: id }
  // })
  // .then(response => {
  //   console.log(response.data);
  //   dispatch({
  //     type: FETCH_POST,
  //     payload: response.data
  //   })
  // }, function(error) {
  //   console.log(error);
  // });
}

export const editComment = (id, formValues) => async dispatch => {
  // console.log("inside editPost in actions");
  // console.log(id);
  //
  // const update_PostData = qs.stringify({
  //   description: formValues.description,
  //   title: formValues.title,
  //   post_id: id
  // });
  //
  // await axios.put(url + "post", update_PostData)
  // .then(response => {
  //   console.log(response.data);
  //   dispatch({
  //     type: EDIT_COMMENT,
  //     payload: response.data
  //   })
  //   history.push("/groups");
  // }, function(error) {
  //   console.log(error);
  // });
}
