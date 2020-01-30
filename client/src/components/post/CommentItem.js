import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';
import { markdown } from 'markdown';
import { Parser } from 'html-to-react';

const CommentItem = ({
	postId,
	comment: { _id, text, name, avatar, user, date },
	auth,
	deleteComment
}) => {

	const htmlToReactParser = new Parser();

	return (
		<div className='post bg-white p-1 my-1'>
			<div>
				<Link to={`/profile/${user}`}>
					<img className='round-img' src={avatar} alt='' />
					<h4>{name}</h4>
				</Link>
			</div>
			<div>
				<p className='my-1'>{htmlToReactParser.parse(markdown.toHTML(text))}</p>
				<p className='post-date'>
					Posted <Moment format='YYYY/MM/DD'>{date}</Moment>
				</p>
				{!auth.loading && user === auth.user._id && (
					<button
						onClick={() => deleteComment(postId, _id)}
						type='button'
						className='btn btn-danger delete-comment'
					>
						Delete Comment
					</button>
				)}
			</div>
		</div>
	);
}

CommentItem.propTypes = {
	postId: PropTypes.string.isRequired,
	comment: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ deleteComment }
)(CommentItem);
