import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuBar from './MenuBar';

/**
 * Tests that the MenuBar component can be rendered and that when it is rendered, it renders two buttons 
 * (a menu button and a 'Login' button) and heading text.
 */
test('menu bar is rendered', () => {
	// WHEN
	render(<MenuBar />);

	// THEN

	// Ensure menu and login buttons are both rendered
	const menuButtons = screen.getAllByRole('button');
	expect(menuButtons.length).toEqual(2);
	menuButtons.forEach(button => {
		expect(button).toBeInTheDocument();
	});

	// Ensure menu text is rendered
	const menuText = screen.getByRole('heading');
	expect(menuText).toBeInTheDocument();
	expect(menuText).toHaveTextContent('News');
});