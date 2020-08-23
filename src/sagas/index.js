import { callApi } from '../utils/services';
import { put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_POSTS,
  FETCH_POST_DETAIL,
} from '../constants';

import {
  fetchingPostsSucceed,
  fetchingPostsFailed,
  fetchingPostDetailSucceed,
  fetchingPostDetailFailed,
} from '../actions';

function* fetchingPosts() {
  try {
    const dataResult = yield callApi('/wp-json/wp/v2/posts', {
      _fields: 'author,id,excerpt,title,link'
    });
    yield put(fetchingPostsSucceed(dataResult.data));
  } catch(err) {
    yield put(fetchingPostsFailed(err));
  }
}

function* fetchingPostDetail(payload) {
  try {
    const dataResult = yield callApi(`/wp-json/wp/v2/posts/${payload.data}`);
    yield put(fetchingPostDetailSucceed(dataResult.data));
  } catch(err) {
    yield put(fetchingPostDetailFailed(err));
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_POSTS, fetchingPosts);
  yield takeLatest(FETCH_POST_DETAIL, fetchingPostDetail);
}
