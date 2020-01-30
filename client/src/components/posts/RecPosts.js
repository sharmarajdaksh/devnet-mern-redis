import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import { getRecPosts } from '../../actions/recposts';

const Posts = ({ getRecPosts, post: { recposts, loading } }) => {
	useEffect(() => {
		getRecPosts();
	}, [getRecPosts]);

	return loading ? (
		<Spinner />
	) : (
			<Fragment>
				<h1 className='large text-primary'>Your Feed</h1>
				<p className='lead'>
					Curated posts based on your activity
      			</p>
				<hr />
				<br />
				{recposts.length === 0 ?
					(<div className='posts'>
						<h1>We could not create your feed... try to like/dislike posts so we know your preferences.</h1>
					</div>)
					:
					(<div className='posts'>
						{recposts.map(post => (
							<PostItem key={post._id} post={post} />
						))}
					</div>)}
			</Fragment>
		);
};

Posts.propTypes = {
	getRecPosts: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	post: state.post
});

export default connect(
	mapStateToProps,
	{ getRecPosts }
)(Posts);
