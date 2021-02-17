import React, { Component } from 'react';
import RecordDatePicker from '../RecordDatePicker/RecordDatePicker';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export default class CreateRecord extends Component {
	render() {
		const StyledTextField = styled(TextField)`
			margin-bottom: 1rem;
		`;

		const StyledButton = styled(Button)`
			border: 1px solid black;
		`;

		return (
			<div>
				<h1>CreateRecord</h1>
				<RecordDatePicker></RecordDatePicker>
				<form noValidate autoComplete='off'>
					{/* TODO: iterate each one with params, akin to how sidebar items are mapped*/}
					<StyledTextField
						id='outlined-basic'
						label='Workout Title'
						variant='outlined'
					/>{' '}
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
					<StyledTextField
						id='outlined-basic'
						label='Notes'
						variant='outlined'
					/>
				</form>

				<StyledButton>Add Record</StyledButton>
			</div>
		);
	}
}