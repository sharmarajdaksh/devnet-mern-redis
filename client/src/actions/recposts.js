import axios from 'axios';
import { setAlert } from './alert';
import {
	// GET_POSTS,
	GET_REC_POSTS,
	POST_ERROR,
	UPDATE_LIKES,
	DELETE_POST,
	// ADD_POST,
	GET_POST,
	ADD_COMMENT,
	REMOVE_COMMENT
} from './types';

// Get posts
export const getRecPosts = () => async dispatch => {
	try {
		const res = await axios.get('/api/recposts');

		dispatch({
			type: GET_REC_POSTS,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};

// Add like
export const addLike = id => async dispatch => {
	try {
		const res = await axios.put(`/api/recposts/like/${id}`);

		dispatch({
			type: UPDATE_LIKES,
			payload: { id, likes: res.data }
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};

// Remove like
export const removeLike = id => async dispatch => {
	try {
		const res = await axios.put(`/api/recposts/unlike/${id}`);

		dispatch({
			type: UPDATE_LIKES,
			payload: { id, likes: res.data }
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};

// Delete post
export const deletePost = id => async dispatch => {
	try {
		await axios.delete(`/api/recposts/${id}`);

		dispatch({
			type: DELETE_POST,
			payload: id
		});

		dispatch(setAlert('Post Removed', 'success'));
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};

// Add post
// export const addPost = formData => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   try {
//     const res = await axios.post('/api/posts', formData, config);

//     dispatch({
//       type: ADD_POST,
//       payload: res.data
//     });

//     dispatch(setAlert('Post Created', 'success'));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// Get post
export const getPost = id => async dispatch => {
	try {
		const res = await axios.get(`/api/recposts/${id}`);

		dispatch({
			type: GET_POST,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};

// Add comment
export const addComment = (postId, formData) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	try {
		const res = await axios.post(
			`/api/recposts/comment/${postId}`,
			formData,
			config
		);

		dispatch({
			type: ADD_COMMENT,
			payload: res.data
		});

		dispatch(setAlert('Comment Added', 'success'));
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};

// Delete comment
export const deleteComment = (postId, commentId) => async dispatch => {
	try {
		await axios.delete(`/api/recposts/comment/${postId}/${commentId}`);

		dispatch({
			type: REMOVE_COMMENT,
			payload: commentId
		});

		dispatch(setAlert('Comment Removed', 'success'));
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};
