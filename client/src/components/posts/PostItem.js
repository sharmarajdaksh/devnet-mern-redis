import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
import { markdown } from 'markdown';
import { Parser } from 'html-to-react';

const PostItem = ({
	addLike,
	removeLike,
	deletePost,
	auth,
	post: { _id, text, name, avatar, user, likes, comments, date },
	showActions
}) => {

	const htmlToReactParser = new Parser();

	return (
		<div className='post bg-white p-1 my-1'>
			<div>
				<Link to={`/profile/${user}`}>
					<img className='round-img' src={avatar} alt='' />
					<h5>{name}</h5>
				</Link>
			</div>
			<div>
				<div className='my-1'>{htmlToReactParser.parse(markdown.toHTML(text))}</div>
				<p className='post-date'>
					Posted <Moment format='YYYY/MM/DD'>{date}</Moment>
				</p>

				{showActions && (
					<Fragment>
						<button
							onClick={() => addLike(_id)}
							type='button'
							className='btn btn-light'
						>
							<i className='fas fa-thumbs-up' />{' '}
							<span>{likes.length > 0 && <span>{likes.length}</span>}</span>
						</button>
						<button
							onClick={() => removeLike(_id)}
							type='button'
							className='btn btn-light'
						>
							<i className='fas fa-thumbs-down' />
						</button>
						<Link to={`/posts/${_id}`} className='btn btn-primary'>
							Discussion
							{comments.length > 0 && (
								<Fragment>
									&nbsp; &nbsp;
									<span className='comment-count'>{comments.length}</span>
								</Fragment>
							)}
						</Link>
						{!auth.loading && user === auth.user._id && (
							<button
								onClick={() => deletePost(_id)}
								type='button'
								className='btn btn-danger btn-delete-post'
							>
								Delete post
							</button>
						)}
					</Fragment>
				)}
			</div>
		</div>
	)
};

PostItem.defaultProps = {
	showActions: true
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	addLike: PropTypes.func.isRequired,
	removeLike: PropTypes.func.isRequired,
	deletePost: PropTypes.func.isRequired,
	showActions: PropTypes.bool
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ addLike, removeLike, deletePost }
)(PostItem);
