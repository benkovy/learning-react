import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should filter by text filter', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const res = selectExpenses(expenses, filters);
    expect(res).toEqual([expenses[1], expenses[2]]);;
});

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const res = selectExpenses(expenses, filters);
    expect(res).toEqual([expenses[1], expenses[0]]);
});

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(1, 'days')
    };
    const res = selectExpenses(expenses, filters);
    expect(res).toEqual([expenses[0], expenses[2]]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const res = selectExpenses(expenses, filters);
    expect(res).toEqual([expenses[1], expenses[0], expenses[2]]);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const res = selectExpenses(expenses, filters);
    expect(res).toEqual([expenses[2], expenses[1], expenses[0]]);
});