import React, { useEffect, useState, Fragment } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const Createprofile = ({
	createProfile,
	getCurrentProfile,
	profile: { profile, loading },
	history,
}) => {
	const [formData, setFormData] = useState({
		company: "",
		website: "",
		location: "",
		status: "",
		skills: "",
		githubusername: "",
		bio: "",
		twitter: "",
		facebook: "",
		linkedin: "",
		youtube: "",
		instagram: "",
	});
	const [displaySocialInputs, toggleSocialInputs] = useState(false);
	const {
		company,
		website,
		location,
		status,
		skills,
		githubusername,
		bio,
		twitter,
		facebook,
		linkedin,
		youtube,
		instagram,
	} = formData;
	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	const onSubmit = e => {
		e.preventDefault();
		createProfile(formData, history);
	};
	useEffect(() => {
		getCurrentProfile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getCurrentProfile]);
	return loading && profile === null ? (
		<Redirect to='/dashboard' />
	) : (
			<Fragment>
				<h1 className='large text-primary'>Create Your Profile</h1>
				<p className='lead'>
					A complete profile makes you look professional and allows other users to know something about you.
      </p>
				<small>* = required field</small>
				<form className='form' onSubmit={e => onSubmit(e)}>
					<div className='form-group'>
						<input
							type='text'
							placeholder="Work"
							name='status'
							value={status}
							onChange={e => onChange(e)} />
						<small className='form-text'>
							Your occupation
          </small>
					</div>
					<div className='form-group'>
						<input
							type='text'
							placeholder='Company'
							name='company'
							value={company}
							onChange={e => onChange(e)}
						/>
						<small className='form-text'>
							Your workplace
          </small>
					</div>
					<div className='form-group'>
						<input
							type='text'
							placeholder='Website'
							name='website'
							value={website}
							onChange={e => onChange(e)}
						/>
						<small className='form-text'>
							Your personal or company website
          </small>
					</div>
					<div className='form-group'>
						<input
							type='text'
							placeholder='Location'
							name='location'
							value={location}
							onChange={e => onChange(e)}
						/>
						<small className='form-text'>
							Your city of residence
          </small>
					</div>
					<div className='form-group'>
						<input
							type='text'
							placeholder='Your skillset'
							name='skills'
							value={skills}
							onChange={e => onChange(e)}
						/>
						<small className='form-text'>
							Seperate skills by commans (React, NodeJS)
          </small>
					</div>
					<div className='form-group'>
						<input
							type='text'
							placeholder='Github Username'
							name='githubusername'
							value={githubusername}
							onChange={e => onChange(e)}
						/>
						<small className='form-text'>
							Your github username
          </small>
					</div>
					<div className='form-group'>
						<textarea
							placeholder='Tell others something about yourself'
							name='bio'
							value={bio}
							onChange={e => onChange(e)}
						/>
						<small className='form-text'>A short but interesting bio can increase interest in your profile</small>
					</div>

					<div className='my-2'>
						<button
							onClick={() => toggleSocialInputs(!displaySocialInputs)}
							type='button'
							className='btn btn-light'
						>
							Add Social Media Links
          </button>
						<span>* Optional</span>
					</div>
					{displaySocialInputs && (
						<Fragment>
							<div className='form-group social-input'>
								<i className='fab fa-twitter fa-2x' />
								<input
									type='text'
									placeholder='Twitter URL'
									name='twitter'
									value={twitter}
									onChange={e => onChange(e)}
								/>
							</div>

							<div className='form-group social-input'>
								<i className='fab fa-facebook fa-2x' />
								<input
									type='text'
									placeholder='Facebook URL'
									name='facebook'
									value={facebook}
									onChange={e => onChange(e)}
								/>
							</div>

							<div className='form-group social-input'>
								<i className='fab fa-youtube fa-2x' />
								<input
									type='text'
									placeholder='YouTube URL'
									name='youtube'
									value={youtube}
									onChange={e => onChange(e)}
								/>
							</div>

							<div className='form-group social-input'>
								<i className='fab fa-linkedin fa-2x' />
								<input
									type='text'
									placeholder='Linkedin URL'
									name='linkedin'
									value={linkedin}
									onChange={e => onChange(e)}
								/>
							</div>

							<div className='form-group social-input'>
								<i className='fab fa-instagram fa-2x' />
								<input
									type='text'
									placeholder='Instagram URL'
									name='instagram'
									value={instagram}
									onChange={e => onChange(e)}
								/>
							</div>
						</Fragment>
					)}

					<input type='submit' className='btn btn-primary my-1' />
					<Link className='btn btn-light my-1' to='/dashboard'>
						Go Back
        </Link>
				</form>
			</Fragment>
		);
};

Createprofile.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
	profile: state.profile,
});
export default connect(
	mapStateToProps,
	{ createProfile, getCurrentProfile },
)(withRouter(Createprofile));
