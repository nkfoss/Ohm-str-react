import { Component } from "react";

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import classes from './EditWorkout.module.scss'
import exerciseArray from './exercisesArray'
import { Exercise } from "../../shared/models/Exercise";
import ExerciseComponent from "./ExerciseComponent/ExerciseComponent";

class EditWorkout extends Component {

	state = {
		workout: {
			workoutDate: new Date(), // This will eventually be something fetched from the route or query params.
			bodyweight: null,
			exercises: exerciseArray
		}
	}

	/**
	 * The function that increments the current date. 
	 * @param event A click event received from the forward/back buttons.
	 */
	changeDateHandler = (event: React.MouseEvent) => {
		let newDate = new Date()
		if (event.currentTarget.id === "prevDate") {
			newDate.setDate(this.state.workout.workoutDate.getDate() - 1)
		}
		else if (event.currentTarget.id === "nextDate") {
			newDate.setDate(this.state.workout.workoutDate.getDate() + 1)
		}
		console.log(newDate);
		this.setState({workoutDate: newDate});
	}

	inputChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({bodyweight: event.currentTarget.value})
	}
	
	render() {

		// Render a table for each Exercise
		let exercises = [];
		exercises = this.state.workout.exercises.map((exercise: Exercise) => {
			return <ExerciseComponent exercise={exercise} />
		})


		return (
			<div className={classes.EditWorkout}>

				<div className={classes.DateContainer}>
					<IconButton id="prevDate" onClick={this.changeDateHandler}> <ArrowBackIcon /> </IconButton>
					{this.state.workout.workoutDate.toDateString()}
					<IconButton id="nextDate" onClick={this.changeDateHandler}> <ArrowForwardIcon /> </IconButton>
				</div>

				<div className={classes.ExerciseContainer}>
						<TextField 
							type="number"
							id="bodyweight"
							label="Body weight"
							value={this.state.workout.bodyweight}
							onChange={this.inputChangedHandler}
						/>
				</div>
				<div className={classes.ExerciseContainer}>
					{exercises}
				</div>
				<div>
					<Button variant="contained" color="primary">Add Exercise</Button>
					|
					<Button variant="contained" color="primary">Save Workout</Button>
				</div>
				
			</div>
		)
	}
 
}

export default EditWorkout;