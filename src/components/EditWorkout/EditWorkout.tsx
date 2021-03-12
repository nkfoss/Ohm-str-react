import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';

import classes from './EditWorkout.module.scss'
import { Exercise } from "../../shared/models/Exercise";
import ExerciseTable from "./ExerciseComponent/ExerciseTable";
import Spinner from '../UI/Spinner/Spinner'

import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import { iWorkout } from "../../shared/models/Workout";

class EditWorkout extends Component<any, any> {

	state = {
		workoutDate: new Date(), // This will eventually be something fetched from the route or query params.
		bodyweight: this.props.workout.bodyweight,
		snackbarOpen: false
	}

	// Get the workout (or attempt to). After response receved, no more loading spinner.
	componentDidMount() {
		this.props.onFetchWorkout( 
			this.formatDate( this.state.workoutDate )  
		);
	}

	/**
	 * For use to format the datestring to be used as a route param and property of the database entry
	 * @param date The workout date object
	 * @returns A string formatted: YYYY-MM-DD
	 */
	formatDate(date: Date): string {
		let arr = date.toLocaleDateString().split('/').reverse();  
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].length < 2) {
				arr[i] = "0".concat(arr[i])  // Put leading 0's in front of single-digit months and dates
			}
		}
		arr = [ arr[0], arr[2], arr[1] ] // format as yyyy-mm-dd
		return arr.join('-')
	}

	
	// Once workout is fetched, update the bodyweight input.
	componentDidUpdate(prevProps, prevState) {
		if (this.props.workout.bodyweight !== prevProps.workout.bodyweight) {
			this.setState({bodyweight: this.props.workout.bodyweight})
		}
		if (this.state.workoutDate !== prevState.workoutDate) {
			this.props.onFetchWorkout( 
				this.formatDate( this.state.workoutDate ) 
			);
		}
		if (this.props.saving !== prevProps.saving) {
			this.setState({ snackbarOpen: true})
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

	toggleSnackBar = () => this.setState({ snackbarOpen: false })
	

	//==========================================================================================================
	
	render() {

		// Render a table for each Exercise, but display spinner before loaded.
		let exercises = <Spinner />
		if (!this.props.loading) {
			if (this.props.error) {
				exercises = <p> There was an error. Reload or check your connection. </p>   // If we receive an error, display it.
			}
			else {
				exercises = this.props.workout.exercises.map((exercise: Exercise, index) => {
					return <ExerciseTable exercise={exercise} key={index} />
				})
			}
		}

		let savingMessage = null;
		if (this.props.saving) {
			savingMessage = <span style={{fontSize: "12px", marginLeft: "10px"}}> Saving... </span>
		}

		//===============================================================================
		return (
			<div className={classes.EditWorkout}>

				{/* Date navigator */}
				<div className={classes.DateContainer}>
					<IconButton id="prevDate" onClick={this.changeDateHandler}> <ArrowBackIcon /> </IconButton>
					{ this.state.workoutDate.toDateString() }
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

				{/* Add exercise / saveworkout */}
				<div>
					<Button disabled={this.props.error || this.props.loading} variant="contained" color="primary">Add Exercise</Button>
					|
					<Button 
						onClick={() => this.props.onSaveWorkout( this.props.workout )} 
						disabled={this.props.error || this.props.loading || this.props.saving} variant="contained" color="primary"
					>
						Save workout
					</Button>
					{savingMessage}
			
				</div>

				<Snackbar 
					open={this.state.snackbarOpen} 
					autoHideDuration={3000} 
					onClose={this.toggleSnackBar}
					message={this.props.message ? this.props.message : null}
					action={
						<React.Fragment>
						  <IconButton size="small" aria-label="close" color="inherit" onClick={this.toggleSnackBar}>
							<CloseIcon fontSize="small" />
						  </IconButton>
						</React.Fragment>
					}
				/>	

			</div>
		)
	}
 
}

//=============================================================

const mapStateToProps = (state: any) => {
	return {
		workout: state.workout,
		loading: state.loading,
		error: state.error,
		saving: state.saving,
		message: state.message
	}
}

const mapDispatchToProps = (dispatch: Function) => {
	return {
		onFetchWorkout: (date: string) => dispatch( actions.fetchWorkout( date ) ),
		onSaveWorkout: (workout: iWorkout) => dispatch( actions.saveWorkout( workout ) ),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkout);