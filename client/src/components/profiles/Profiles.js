import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
	useEffect(() => {
		getProfiles();
	}, [getProfiles]);

	const [currentProfiles, setCurrentProfiles] = useState(profiles);
	useEffect(() => {
		setCurrentProfiles(profiles);
	}, [profiles]);

	const onChange = e => {
		//do something  when user inputs 'e' to the text field
		if (e.target.value === '') {
			setCurrentProfiles(profiles);
			return;
		};

		let re = new RegExp(e.target.value, 'i');

		let temp = profiles.filter(profile => {
			return !(profile.user.name.search(re) === -1);
		});

		setCurrentProfiles(temp);
	};

	return (
		<Fragment>
			{loading ? (
				<Spinner />
			) : (
					<Fragment>
						<br />
						<form className='form' onSubmit={e => e.preventDefault()}>
							<div className='form-group containerize'>
								<input
									type='text'
									placeholder='Search for developers on DevNet'
									name='developer'
									onChange={e => onChange(e)}
								/>
							</div>
						</form>
						<br />
						<h1 className='large text-primary'>Developers</h1>
						<p className='lead'>
							<strong>Browse and connect with
							developers on DevNet</strong>
						</p>
						<hr />
						<br />

						<div className='profiles'>
							{currentProfiles.length > 0 ? (
								currentProfiles.map(profile => (
									<ProfileItem key={profile._id} profile={profile} />
								))
							) : (
									<h4>No profiles found...</h4>
								)}
						</div>
					</Fragment >
				)
			}
		</Fragment >
	);
};

Profiles.propTypes = {
	getProfiles: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile
});

export default connect(
	mapStateToProps,
	{ getProfiles }
)(Profiles);
