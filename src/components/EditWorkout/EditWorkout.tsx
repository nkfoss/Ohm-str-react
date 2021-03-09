import { Component } from "react";

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import classes from './EditWorkout.module.scss'
import { Exercise } from "../../shared/models/Exercise";
import ExerciseTable from "./ExerciseComponent/ExerciseTable";
import Spinner from '../UI/Spinner'

import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class EditWorkout extends Component<any, any> {

	state = {
		workoutDate: new Date(), // This will eventually be something fetched from the route or query params.
		bodyweight: this.props.workout.bodyweight
	}

	// Get the workout (or attempt to). After response receved, no more loading spinner.
	componentDidMount() {
		console.log("[COMPONENT DID MOUNT]")
		this.props.onFetchWorkout()
	}
	
	componentDidUpdate(prevProps) {
		if (this.props.workout.bodyweight !== prevProps.workout.bodyweight) {
			this.setState({bodyweight: this.props.workout.bodyweight})
		}
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
		this.setState({workoutDate: newDate});
	}

	inputChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({bodyweight: event.currentTarget.value})
	}
	
	render() {

		// Render a table for each Exercise, but display spinner before loaded.
		let exercises = <Spinner />
		if (!this.props.loading) {
			exercises = this.props.workout.exercises.map((exercise: Exercise, index) => {
				return <ExerciseTable exercise={exercise} key={index} />
			})
		}

		return (
			<div className={classes.EditWorkout}>

				{/* Date navigator */}
				<div className={classes.DateContainer}>
					<IconButton id="prevDate" onClick={this.changeDateHandler}> <ArrowBackIcon /> </IconButton>
					{this.state.workoutDate.toDateString()}
					<IconButton id="nextDate" onClick={this.changeDateHandler}> <ArrowForwardIcon /> </IconButton>
				</div>

				{/* Bodyweight input */}
				<div className={classes.ExerciseContainer}> 
						<TextField 
							type="number"
							id="bodyweight"
							label="Bodyweight"
							value={this.state.bodyweight}
							onChange={this.inputChangedHandler}
						/>
				</div>

				{/* Collection of Exercise table components */}
				<div className={classes.ExerciseContainer}>
					{exercises}
				</div>

				{/* Add exercise / daveworkout */}
				<div>
					<Button variant="contained" color="primary">Add Exercise</Button>
					|
					<Button variant="contained" color="primary">Save Workout</Button>
				</div>
			</div>
		)
	}
 
}

//=============================================================

const mapStateToProps = (state: any) => {
	return {
		workout: state.workout,
		loading: state.loading,
		error: state.error
	}
}

const mapDispatchToProps = (dispatch: Function) => {
	return {
		onFetchWorkout: () => dispatch( actions.fetchWorkout() )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkout);