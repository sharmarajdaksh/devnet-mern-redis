import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileExperience = ({
	experience: { company, title, location, current, to, from, description }
}) => (
		<div>
			<p className="text-dark"><strong>{title}</strong> at <strong>{company}</strong> in <strong>{location}</strong></p>
			<p>
				<Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{' '}
				{!to ? ' Now' : <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>}
			</p>
			<p>
				{description}
			</p>
		</div>
	);

ProfileExperience.propTypes = {
	experience: PropTypes.object.isRequired
};

export default ProfileExperience;
