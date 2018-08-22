import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should correctly render expenses summary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render expenses summary with many expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={22} expensesTotal={23512311} />);
    expect(wrapper).toMatchSnapshot();
});