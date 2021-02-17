import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';

// "Important: For material-ui-pickers v3 use v1.x version of @date-io adapters."
// https://material-ui-pickers.dev/getting-started/installation#peer-library
// The standalone date-fns package is 2+ as of this commit, but it seems fine independently of date-io package
import DateFnsUtils from '@date-io/date-fns';

import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';


const RecordDatePicker: React.FC = () => {
	// The first commit of Material-UI
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container>
				<KeyboardDatePicker
					margin='normal'
					id='date-picker-dialog'
					label='Pick date to view'
					format='MM/dd/yyyy'
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	);
}

export default RecordDatePicker;

