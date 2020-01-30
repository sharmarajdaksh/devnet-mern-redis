import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation, history }) => {
	const [formData, setFormData] = useState({
		school: '',
		degree: '',
		fieldofstudy: '',
		from: '',
		to: '',
		current: false,
		description: ''
	});

	const [toDateDisabled, toggleDisabled] = useState(false);

	const {
		school,
		degree,
		fieldofstudy,
		from,
		to,
		current,
		description
	} = formData;

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	return (
		<div class="form-container">
			<h1 className='large text-primary'>Add Education Credential</h1>
			<br />
			<form
				className='form'
				onSubmit={e => {
					e.preventDefault();
					addEducation(formData, history);
				}}
			>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Name of Institute'
						name='school'
						value={school}
						onChange={e => onChange(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Degree/Certification'
						name='degree'
						value={degree}
						onChange={e => onChange(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Field of Study'
						name='fieldofstudy'
						value={fieldofstudy}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<h4>Start Date</h4>
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
						Is this your current institute?
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
						placeholder='Description the study program'
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

AddEducation.propTypes = {
	addEducation: PropTypes.func.isRequired
};

export default connect(
	null,
	{ addEducation }
)(withRouter(AddEducation));
