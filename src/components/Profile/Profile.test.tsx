import React from 'react'
import { render, screen } from '@testing-library/react';

import Profile from './Profile'


describe('Profile', () => {

	test('renders Profile component', () => {
		render(<Profile />);
		screen.debug; // Use this to get prettified-print of the DOM
	})

})