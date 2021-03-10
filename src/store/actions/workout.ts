import * as actionTypes from './actionsTypes'
import { iWorkout } from '../../shared/models/Workout'
import axios from '../../axios/axios-general'


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

export const fetchWorkout = (date: string) => {
	return dispatch => {
		dispatch( fetchWorkoutStart() );
		axios.get(`/api/workout/${date}`)
			.then( (response: any) => {
				dispatch( fetchWorkoutSuccess(response.data.workout) )
			})
			.catch( error => {
				dispatch( fetchWorkoutFail(error) )
			})
	}
}