import React from 'react';
import PageNotFound from '../../components/PageNotFound';
import { shallow } from 'enzyme';

test('should render PageNotFound', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();
});