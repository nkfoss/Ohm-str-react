import React from 'react'
import { render, screen } from '@testing-library/react';

import AllDayRecords from './AllDayRecords'

describe('AllDayRecords', () => {
	test('renders AllDayRecords component', () => {
		render(<AllDayRecords />);
	})

})