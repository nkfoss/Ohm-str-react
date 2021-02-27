import React, { Component } from 'react';
import RecordDatePicker from '../RecordDatePicker/RecordDatePicker';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import './CreateRecord.scss'
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";

// TODO: Epic #4: "Create the edit/add exercise page": https://github.com/nkfoss/Ohm-str-react/issues/4
// EditExerciseRecord: also used for adding new exercises

// 	--- TEMPLATE ----

	// 	A button to cancel / go back
	// 	A button to Delete the current exercise (if not in edit mode)

	// 	Input for exercise name
	// 	A dropdown menu to select the set-type (myo, mtor, rest-pause-double, etc.)
	// 	Textarea for Notes

	// 	Dynamic form (warm-up sets):
	// 		A button to add a warmup-set element. 
	// 		Each element contains a number, weight (input), reps (input), and button to delete element.

	// 	Dynamic form (working sets):
	// 		*** This will look different depending on the specific type of set. In general, it will have
	// 			the set #, weight, and reps

	// 	A button to submit the form

const setTypes = [
	{
		value: 'myo',
		label: 'myo',
	},
	{
		value: 'mtor',
		label: 'mtor',
	},
	{
		value: 'rest-pause-double',
		label: 'rest-pause-double',
	},
];

export default function CreateRecord() {
	const StyledTextField = styled(TextField)`
		margin-bottom: 1rem;
	`;
	const StyledButton = styled(Button)`
		border: 1px solid black;
	`;

	const [workout, setWorkout] = React.useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setWorkout(event.target.value);
	};

	const history = useHistory();

	return (
		<div>
			<h1>
				<ArrowBackIcon onClick={() => {
                    history.goBack();
                }} />
				CreateRecord
			</h1>
			<RecordDatePicker></RecordDatePicker>
			<form noValidate autoComplete='off'>
				{/* TODO: iterate each one with params, akin to how sidebar items are mapped*/}
				<StyledTextField
					id='outlined-basic'
					label='Workout Title'
					variant='outlined'
					className="block" />
				{' '}
				<div id="set-numbers">
					<StyledTextField 
						label='Set Type'
						select
						id="outlined-basic"
						variant='outlined'
						style={{'width': '200px'}}
						value={workout}
						onChange={handleChange}
					>
						{setTypes.map((option) => (
							<MenuItem key={option.value} value={option.value}>
							{option.label}
							</MenuItem>
						))}
					</StyledTextField>{' '}
					<StyledTextField
						id='outlined-basic'
						label='Lbs'
						variant='outlined'
						type='number'
					/>{' '}
					<StyledTextField
						id='outlined-basic'
						label='Sets'
						variant='outlined'
						type='number'
					/>{' '}
					<StyledTextField
						id='outlined-basic'
						label='Rep per set'
						variant='outlined'
						type='number'
					/>{' '}
				</div>

				<StyledTextField
					id='outlined-basic'
					label='Notes'
					variant='outlined'
					className="block"
				/>
			</form>

			<StyledButton>Add Record</StyledButton>
		</div>
	);
}