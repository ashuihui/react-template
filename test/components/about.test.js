import React from 'react';
import About from '@components/about/index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
describe('components about test', () => {
	it('click  add', () => {
		const wrapper = shallow(<About />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
