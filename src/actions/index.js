import * as actionTypes from '../constants';

export const fetchingPosts = () => {
  return {
    type: actionTypes.FETCH_POSTS,
  };
};

export const fetchingPostsSucceed = (data) => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCEED,
    data,
  };
};

export const fetchingPostsFailed = error => {
  return {
    type: actionTypes.FETCH_POSTS_FAILED,
    error,
  };
};

export const fetchingPostDetail = (data) => {
  return {
    type: actionTypes.FETCH_POST_DETAIL,
    data
  };
};

export const fetchingPostDetailSucceed = (data) => {
  return {
    type: actionTypes.FETCH_POST_DETAIL_SUCCEED,
    data,
  };
};

export const fetchingPostDetailFailed = error => {
  return {
    type: actionTypes.FETCH_POST_DETAIL_FAILED,
    error,
  };
};
