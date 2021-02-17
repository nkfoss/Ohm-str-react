import React, { Component } from 'react';
import DayRecord from '../DayRecord/DayRecord';
import RecordDatePicker from '../RecordDatePicker/RecordDatePicker';
import CreateRecordButton from '../CreateRecord/CreateRecordButton/CreateRecordButton';
import days from './dayRecords.json';

export default class AllDayRecords extends Component {
	state = {
		days: [],
	};

	// This will be used to sort by date, and later it will need to sort by something between same dates
	sortByDate() {
		this.setState((prevState) => {
			this.state.days.sort((a, b) => a.date - b.date);
		});
	}

	render() {
		return (
			<div>
				<h1 style={{ textAlign: 'center' }}>AllDayRecords</h1>
				<CreateRecordButton></CreateRecordButton>
				<RecordDatePicker></RecordDatePicker>

				{days.map(function (workout, index) {
					return (
						<div key={index}>
							<DayRecord
								date={workout.date}
								workout={workout.workout}
								lbs={workout.lbs}
								sets={workout.sets}
								repsPerSet={workout.repsPerSet}
								notes={workout.notes}
							></DayRecord>
						</div>
					);
				})}
			</div>
		);
	}
}