import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Filters default values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortby to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortby to date', () => {

    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const action = { type: 'SORT_BY_DATE' };

    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        filter: 'set this text'
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('set this text');
});

test('should set startDate filter', () => {
    const action = {
        type: 'SET_START_DATE',
        date: 123123123
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(123123123);
});

test('should set endDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        date: 123123123
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(123123123);
});