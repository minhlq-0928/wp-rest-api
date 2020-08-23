/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import {
  fetchingPosts,
} from '../../actions';

const Home = ({
  fetchingPosts,
  postList,
}) => {
  useEffect(() => {
    fetchingPosts();
  }, []);

  return (
    <>
    <h1>Home page</h1>
    <div className="list-posts">
      {
        postList.map(post => (
          <div className="post-item" key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title.rendered}</Link>
            <p className="post-item__excerpt" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
          </div>
        ))
      }
    </div>
    </>
  );
};

Home.propTypes = {
  postList: PropTypes.array,
};

Home.defaultProps = {
  postList: [],
};

const mapStateToProps = state => {
  return {
    postList: state.posts.postList,
  };
};

const mapDispatchToProps = {
  fetchingPosts,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
