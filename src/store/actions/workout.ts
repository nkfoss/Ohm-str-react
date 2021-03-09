import * as actionTypes from './actionsTypes'
import exercisesArray from '../../components/EditWorkout/exercisesArray'
import { iWorkout } from '../../shared/models/Workout'


export const fetchWorkoutSuccess = (workout: iWorkout) => {
	return {
		type: actionTypes.FETCH_WORKOUT_SUCCESS,
		workout: workout
	}
}

export const fetchWorkoutFail = (error: Error) => {
	return {
		type: actionTypes.FETCH_WORKOUT_FAIL,
		error: error
	}
}

export const fetchWorkoutStart = () => {
	return {
		type: actionTypes.FETCH_WORKOUT_START
	}
}

export const fetchWorkout = () => {
	return dispatch => {
		dispatch( fetchWorkoutStart() );

		let workout: iWorkout = {
			bodyweight: 170,
			exercises: exercisesArray,
			notes: "Great workout. 10/10"
		}

		setTimeout(() => {	
			dispatch( fetchWorkoutSuccess(workout) )
		}, 3000)
	}
}