import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileEducation = ({
	education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
		<div>
			<p>
				<strong>{degree}</strong> in <strong>{fieldofstudy}</strong> at <strong>{school}</strong>
			</p>
			<p>
				<Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{' '}
				{!to ? ' Now' : <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>}
			</p>
			<p>
				{description}
			</p>
		</div >
	);

ProfileEducation.propTypes = {
	education: PropTypes.object.isRequired
};

export default ProfileEducation;
