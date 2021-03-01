import { Component } from "react";
import classes from './EditExercise.module.scss';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'


class EditExercise extends Component {

	// The state contains data relevant for the input elements, and validation.
	state = {
		editMode: true,
		exerciseForm: {
			exerciseName: {
				elementType: 'input',  // ignore this property for now. Might be used for dynamic rendering.
				error: '',        // The error message (if any). Empty value indicates the form input is valid.
				label: "Exercise name", // ignore this too.
				touched: false,       // for use with displaying error msgs
				validation: {       // the ruleset for validation. See the checkValidity method.
					required: true,
					maxLength: 50
				},
				value: ''   // bound to the input element's value
			},
			exerciseNotes: {
				elementType: 'textarea',
				error: '',
				label: 'Exercise notes',
				touched: false,
				validation: {
					maxLength: 500
				},
				value: ''
			},
			setType: {
				elementType: 'select',
				error: '',
				elementConfig: {
					options: [   // dynamic rendering stuff
						{value: "regular", text: 'Regular sets'},
						{value: "clusters", text: 'Heavy Clusters'},
						{value: "rpd", text: 'Rest-pause double'},
						{value: "mtor", text: 'mTOR'},
						{value: "myo", text: 'Myo-reps'},
						{value: "dropsets", text: 'Drop-sets'}
					]
				},
				label: 'Set type',
				touched: false,
				validation: {
					maxLength: 500
				},
				value: ''
			},
			formIsValid: false // Overall form validity.
		}
	}
	
	/**
	 * 
	 * @param event Received from the input element. Fires when the entered value changes. References the event source (target), which has
	 * an id that corresponds to a property in this.state.exerciseForm (exerciseName, exerciseNotes, etc). The id is used in the function.
	 */
	inputChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const updatedExerciseForm = { 
			...this.state.exerciseForm  // shallow copy
		}
		const updatedFormElement = {
			...updatedExerciseForm[event.target.id] // also shallow copy
		} 

		// Set 'touched' true, and set the value
		updatedFormElement.touched = true;
		updatedFormElement.value = event.target.value;

		// Check the validity of the input. If invalid, set the error message.
		updatedFormElement.error = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
		updatedExerciseForm[event.target.id] = updatedFormElement // Update the highest level object.

		// Go through each of the form's input properties to see if the form is valid OVERALL.
		let formIsValid = true;
		for (let inputIdentifier in updatedExerciseForm) {
			if (inputIdentifier === "formIsValid") { continue; } // skip this property.
			formIsValid = !updatedExerciseForm[inputIdentifier].error && formIsValid;
		}
		updatedExerciseForm['formIsValid'] = formIsValid;

		this.setState({exerciseForm: updatedExerciseForm})  // Update the state
	}

	/**
	 * If an error is found, returns the error message (to be displayed under the input element). 
	 * Else, returns an empty string.
	 * @param value The value of the input to validate
	 * @param rules An object whose keys/values correspond to validation rules
	 */
	checkValidity(value: string, rules: any): string {  // Notes: #1
		if (rules.required && value.trim() == '') {
			return 'Entry is required.'
		}
		if (rules.minLength && value.length < rules.minLength) {
			return `Entry is too short. Minimum ${rules.minLength} characters.`
		}
		if (rules.maxLength && value.length >= rules.maxLength) {
			return `Entry is too long. Maximum ${rules.maxLength} characters.`
		}
		return '';
	}

	//====================================================================================

	render() {

		// This is a temporary implementation of a form element w/validation.
		// In the future, it may possibly be rendered dynamically, dependent on the 
		// form-elements contained in the state.
		let exerciseNameFormElement = this.state.exerciseForm['exerciseName']
		let exerciseNameInput = (
			<TextField 
				error = {!!exerciseNameFormElement.error}
				id = "exerciseName"
				label = "Exercise name"
				helperText = {exerciseNameFormElement.error}
				value={exerciseNameFormElement.value}
				onChange={this.inputChangedHandler}
				variant="outlined"
			/>
		)

		// Only show the delete exercise button when editMode = true.
		let DeleteExerciseButton = null;
		if (this.state.editMode) {
			DeleteExerciseButton = <Button variant="contained" color="secondary">Delete</Button>
		}

		// ===================================================================================


		return (
			<div className={classes.EditExercise}>

				<div className={classes.ButtonContainer}>
					<Button variant="contained">Back</Button>
					{DeleteExerciseButton}
				</div>
				<hr></hr>

				<div> 

					{/* Here's the important part. */}
					{exerciseNameInput}

					<hr></hr>

					{/* Everything from here down is a rough sketch. Some will probably be in their own components. */}
					{/* ============================================================================================== */}
					<FormControl variant="outlined" className={classes.SetTypeControl}>
						<InputLabel id="set-type-label">Set Type</InputLabel>
						 <Select
							labelId="set-type-select-label"
							id="set-type-select"
							label="set-type"
        				>
							<MenuItem value={"mtor"}>mTOR</MenuItem>
							<MenuItem value={"regular"}>REgular Sets</MenuItem>
						</Select>
					</FormControl>
				</div>
				<hr></hr>

				<div className={classes.NotesContainer}>
					<TextField
						id="exercise-notes"
						label="Exercise notes"
						multiline
						rows={4}
						variant="outlined"
					/>
					<Button variant="contained">Old notes</Button>
				</div>
				<hr></hr>

				<Button disabled={!this.state.exerciseForm.formIsValid} variant="contained" color="primary">Submit</Button>
			</div>
			
		)
	}

}
export default EditExercise;
