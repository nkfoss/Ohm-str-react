import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import classes from './DayRecord.module.scss';

interface Props {
	date: any,
	workout: any,
	lbs: any,
	sets: any,
	repsPerSet: any,
	notes: any
}

export default class DayRecord extends Component<Props> {
	render() {
		const StyledLink = styled(Link)`
			text-decoration: none;
			color: inherit;
			&:focus,
			&:hover,
			&:visited,
			&:link,
			&:active {
				text-decoration: none;
			}
		`;

		const StyledButton = styled(Button)`
			border: 1px solid black;
			margin-top: 0.5rem;
		`;

		return (
			<div className={classes.Day}>
				{/* Of course these will be props that `AllDayRecords` will iterate on later, I'm just lazy right now and about to go to work*/}
				<h2>{this.props.date}</h2>
				<h2>{this.props.workout}</h2>
				<strong>Lbs: {this.props.lbs}</strong> &nbsp;&nbsp;&nbsp;{' '}
				<strong>Sets: {this.props.sets}</strong> &nbsp;&nbsp;&nbsp;{' '}
				<strong>Reps per set: {this.props.repsPerSet}</strong>
				{this.props.notes.length > 0 && (
					<p>Notes: {this.props.notes}</p>
				)}
				<StyledButton>
					<StyledLink to={'/editdayrecord'}>
						Edit Day Record
					</StyledLink>
				</StyledButton>
			</div>
		);
	}
}