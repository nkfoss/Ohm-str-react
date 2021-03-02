import { Component } from "react";
import RecordDatePicker from '../Records/RecordDatePicker/RecordDatePicker';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { AnyMxRecord } from "dns";


class EditWorkout extends Component {

	state = {
		workoutDate: new Date(),
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
	
	render() {
		return (
			<div>
				<IconButton id="prevDate" onClick={this.changeDateHandler}>
					<ArrowBackIcon />
				</IconButton>
				{this.state.workoutDate.toDateString()}
				<IconButton id="nextDate" onClick={this.changeDateHandler}>
					<ArrowForwardIcon />
				</IconButton>
			</div>
		)
	}
 
}

export default EditWorkout;