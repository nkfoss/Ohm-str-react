import * as actionTypes from './actionsTypes'
import { iWorkout } from '../../shared/models/Workout'
import axios from '../../axios/axios-general'

export const fetchWorkout = (date: string) => {
	return dispatch => {
		dispatch( fetchWorkoutStart() );
		axios.get(`/api/workout/${date}`)
			.then( (response: any) => {
				dispatch( fetchWorkoutSuccess(response.data.workout, date) )
			})
			.catch( error => {
				dispatch( fetchWorkoutFail(error) )
			})
	}
}
export const fetchWorkoutStart = () => {
	return {
		type: actionTypes.FETCH_WORKOUT_START
	}
}
export const fetchWorkoutSuccess = (workout: iWorkout, date: string) => {
	return {
		type: actionTypes.FETCH_WORKOUT_SUCCESS,
		workout: workout,
		date: date
	}
}
export const fetchWorkoutFail = (error: Error) => {
	return {
		type: actionTypes.FETCH_WORKOUT_FAIL,
		error: error
	}
}

export const saveWorkout = (workout: iWorkout) => {
	return dispatch => {
		dispatch( saveWorkoutStart() );
		axios.put(`/api/workout/save`, workout)
			.then( (response: any) => {
				console.log("Success sacing")
				dispatch( saveWorkoutSuccess(response) )
			})
			.catch( error => {
				console.log("erros")
				dispatch( saveWorkoutFail(error) )
			})
	}
}
export const saveWorkoutStart = () => {
	return {
		type: actionTypes.SAVE_WORKOUT_START
	}
}
export const saveWorkoutSuccess = (response) => {
	return {
		type: actionTypes.SAVE_WORKOUT_SUCCESS,
		response: response
	}
}
export const saveWorkoutFail = (error) => {
	return {
		type: actionTypes.SAVE_WORKOUT_SUCCESS,
		error: error
	}
}