import React from 'react';
import { action } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/react';
import About from '../../src/components/about';
export default {
	title: 'demo',
	component: About,
	parameters: {
		info: {
			text: `
			- description or documentation about my component, supports markdown
			~~~js
			<About />
			~~~
		  `,
		},
	},
};

export const about = () => <About />;
