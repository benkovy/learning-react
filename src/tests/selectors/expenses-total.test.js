import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return total of 0 for no expenses', () => {
    expect(selectExpensesTotal()).toBe(0);
});

test('Should return total for one expense', () => {
    expect(selectExpensesTotal([expenses[2]])).toBe(291000);
});

test('Should return total for many expenses', () => {
    expect(selectExpensesTotal(expenses)).toBe(291490);
});