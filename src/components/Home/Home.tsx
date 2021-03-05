import React, { Component } from 'react';
import CreateRecordButton from '../Records/CreateRecord/CreateRecordButton/CreateRecordButton';
import RecordDatePicker from '../Records/RecordDatePicker/RecordDatePicker';

export default class Home extends Component {
	render() {
		return (
			<div>
				<h1>Strength Star</h1>
				<p>
					The premier strength training app made by two aspiring web
					developers that are open to employment.
				</p>
				
				<RecordDatePicker></RecordDatePicker>
				<CreateRecordButton></CreateRecordButton>
			</div>
		);
	}
}