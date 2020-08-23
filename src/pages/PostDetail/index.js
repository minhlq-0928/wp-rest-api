/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import {
  fetchingPostDetail,
} from '../../actions';

const PostDetail = ({
  fetchingPostDetail,
  postDetail,
  match,
}) => {
  useEffect(() => {
    fetchingPostDetail(match.params.id);
  }, []);

  return (
    <>
      <h1>PostDetail page</h1>
      <Link to="/">Back to home</Link>
      {
        postDetail && postDetail.title &&
        <div className="post-detail">
          <h1>{postDetail.title.rendered}</h1>
          <div className="post-detail__content" dangerouslySetInnerHTML={{__html: postDetail.content.rendered}} />
        </div>
      }
    </>
  );
};

PostDetail.propTypes = {
  match: PropTypes.object,
  postDetail: PropTypes.object,
  fetchingPostDetail: PropTypes.func,
};

PostDetail.defaultProps = {
  postDetail: {},
};

const mapStateToProps = state => {
  return {
    postDetail: state.posts.postDetail,
  };
};

const mapDispatchToProps = {
  fetchingPostDetail,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail));
