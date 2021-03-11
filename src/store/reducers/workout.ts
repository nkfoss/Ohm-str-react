import { iWorkout } from '../../shared/models/Workout'
import * as actionTypes from '../actions/actionsTypes'

interface iState {
	workout: iWorkout
};

const initialState: iState = {
	workout: {
		date: null,
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
				return {
					...initialState,
					workout: {
						...initialState.workout,
						date: action.date
					}
				}   // If there's no workout for given date, return an empty one with date.
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

		case actionTypes.SAVE_WORKOUT_START:
			return {
				...state,
				saving: true
			}
		
		case actionTypes.SAVE_WORKOUT_SUCCESS:
			return {
				...state,
				saving: false,
				response: action.response
			}

		case actionTypes.SAVE_WORKOUT_FAIL:
			return {
				...state,
				saving: false,
				error: action.error
			}

		default:
			return state;
	}
}

export default reducer;