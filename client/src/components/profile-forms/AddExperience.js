import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience, history }) => {
	const [formData, setFormData] = useState({
		company: '',
		title: '',
		location: '',
		from: '',
		to: '',
		current: false,
		description: ''
	});

	const [toDateDisabled, toggleDisabled] = useState(false);

	const { company, title, location, from, to, current, description } = formData;

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	return (
		<div className='form-container'>
			<h1 className='large text-primary'>Add Experience Credentials</h1>
			<br />
			<form
				className='form'
				onSubmit={e => {
					e.preventDefault();
					addExperience(formData, history);
				}}
			>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Position'
						name='title'
						value={title}
						onChange={e => onChange(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Company you worked for'
						name='company'
						value={company}
						onChange={e => onChange(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Location'
						name='location'
						value={location}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<h4>Starting Date</h4>
					<input
						type='date'
						name='from'
						value={from}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<p>
						<input
							type='checkbox'
							name='current'
							checked={current}
							value={current}
							onChange={() => {
								setFormData({ ...formData, current: !current });
								toggleDisabled(!toDateDisabled);
							}}
						/>{' '}
						Is this your current job?
          </p>
				</div>
				<div className='form-group'>
					<h4>To Date</h4>
					<input
						type='date'
						name='to'
						value={to}
						onChange={e => onChange(e)}
						disabled={toDateDisabled ? 'disabled' : ''}
					/>
				</div>
				<div className='form-group'>
					<textarea
						name='description'
						cols='30'
						rows='3'
						placeholder='Describe the job'
						value={description}
						onChange={e => onChange(e)}
					/>
				</div>
				<input type='submit' className='btn btn-primary my-1' />
				<Link className='btn btn-light my-1' to='/dashboard'>
					Back
        </Link>
			</form>
		</div>
	);
};

AddExperience.propTypes = {
	addExperience: PropTypes.func.isRequired
};

export default connect(
	null,
	{ addExperience }
)(withRouter(AddExperience));
