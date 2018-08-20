import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('Should genereate action object for set start date', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('Should genereate action object for set end date', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});

test('Should generate action object for sort by date', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Should generate action object for sort by amount', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('Should generate action object for set text filter default', () => {
    const res = setTextFilter();
    expect(res).toEqual({
        type: 'SET_TEXT_FILTER',
        filter: ''
    });
});

test('Should generate action object for set text filter', () => {
    const res = setTextFilter('New filter');
    expect(res).toEqual({
        type: 'SET_TEXT_FILTER',
        filter: 'New filter'
    });
});