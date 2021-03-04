import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Exercise } from '../../../shared/models/Exercise';

interface iProps {
	exercise: Exercise
}

const exerciseComponent = (props: iProps) => {

	// First, dynamically render the rows ( weight, reps, percentEffort(?) )
	// The 'as any' syntax is a work-around for a Typescipt rule that doesn't allow us to map over an ambiguous type.
	let rows = (props.exercise.workingSets as any).map( (set, index) => {
		let percentEffort = "N/A"
		if (set.hasOwnProperty('percentEffort')) { 
			percentEffort = set.percentEffort;        // If there is no percentEffort, don't omit the row... just say 'N/A'
		}
		return (
			<TableRow key={index}>
				<TableCell> {index + 1} </TableCell>
				<TableCell> {props.exercise.workingSets[index].weight} </TableCell>
				<TableCell> {props.exercise.workingSets[index].reps} </TableCell>
				<TableCell> {percentEffort} </TableCell>
			</TableRow>
		)
	})

	return (
		<TableContainer> 
			<Table >
				
				<TableHead>
					<TableRow>
						<TableCell>Set #</TableCell>
						<TableCell>Weight</TableCell>
						<TableCell>Reps</TableCell>
						<TableCell>Percent of Record</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{rows}
				</TableBody>

			</Table>
		</TableContainer>
	)
}

export default exerciseComponent