import { iWorkout } from '../../shared/models/Workout'
import * as actionTypes from '../actions/actionsTypes'

interface iState {
	workout: iWorkout
};

const initialState: iState = {
	workout: {
		bodyweight: 0,
		exercises: [],
		notes: ''
	}
};

const reducer = (state = initialState, action) => {

	switch (action.type) {

		case actionTypes.FETCH_WORKOUT_START:
			return {
				...state,
				loading: true
			}

		case actionTypes.FETCH_WORKOUT_SUCCESS:
			if (!action.workout) {
				return {...initialState}   // If there's no workout for current date, return an empty one.
			}
			return {
				...state,
				loading: false,
				workout: action.workout
			}

		case actionTypes.FETCH_WORKOUT_FAIL:
			return {
				...state,
				loading: false,
				error: action.error
			}

		default:
			return state;
	}
}

export default reducer;