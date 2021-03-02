import { Component } from "react";

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import classes from './EditWorkout.module.scss'

class EditWorkout extends Component {

	state = {
		workoutDate: new Date(), // This will eventually be something fetched from the route or query params.
		bodyweight: null
	}

	/**
	 * The function that increments the current date. 
	 * @param event A click event received from the forward/back buttons.
	 */
	changeDateHandler = (event: React.MouseEvent) => {
		let newDate = new Date()
		if (event.currentTarget.id === "prevDate") {
			newDate.setDate(this.state.workoutDate.getDate() - 1)
		}
		else if (event.currentTarget.id === "nextDate") {
			newDate.setDate(this.state.workoutDate.getDate() + 1)
		}
		console.log(newDate);
		this.setState({workoutDate: newDate});
	}

	inputChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({bodyweight: event.currentTarget.value})
	}
	
	render() {
		return (
			<div className={classes.EditWorkout}>
				<div className={classes.DateContainer}>
					<IconButton id="prevDate" onClick={this.changeDateHandler}>
						<ArrowBackIcon />
					</IconButton>
					{this.state.workoutDate.toDateString()}
					<IconButton id="nextDate" onClick={this.changeDateHandler}>
						<ArrowForwardIcon />
					</IconButton>
				</div>
				<div className={classes.ExerciseContainer}>
						<TextField 
							type="number"
							id="bodyweight"
							label="Body weight"
							value={this.state.bodyweight}
							onChange={this.inputChangedHandler}
						/>
				</div>
				<div className={classes.ExerciseContainer}>
					Here is where the exercises would go.
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