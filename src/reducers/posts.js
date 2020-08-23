import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCEED,
  FETCH_POSTS_FAILED,
  FETCH_POST_DETAIL,
  FETCH_POST_DETAIL_SUCCEED,
  FETCH_POST_DETAIL_FAILED,
} from '../constants';

let initialState = {
  postList: [],
  isFetching: false,
  isError: false,
  message: '',
  postDetail: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        isError: false,
        message: 'Pending',
        postList: [],
        isFetching: true,
      };

    case FETCH_POSTS_FAILED:
      return { ...state, isError: true, message: action.error, isFetching: false };

    case FETCH_POSTS_SUCCEED:
      return {
        ...state,
        postList: action.data,
        message: 'fetch list posts succeed',
        isFetching: false,
        isError: false,
      };

    case FETCH_POST_DETAIL:
      return {
        ...state,
        isError: false,
        message: 'Pending',
        postDetail: {},
        isFetching: true,
      };

    case FETCH_POST_DETAIL_FAILED:
      return { ...state, isError: true, message: action.error, isFetching: false };

    case FETCH_POST_DETAIL_SUCCEED:
      return {
        ...state,
        postDetail: action.data,
        message: 'fetch post detail succeed',
        isFetching: false,
        isError: false,
      };

    default:
      return state;
  }
}
