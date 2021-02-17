import { Component } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class CreateRecordButton extends Component {
	render() {
		const StyledButton = styled(Button)`
			border: 1px solid black;
		`;

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

		return (
			<div>
				<StyledLink to='/createrecord'>
					<StyledButton>Create Record</StyledButton>
				</StyledLink>
			</div>
		);
	}
}