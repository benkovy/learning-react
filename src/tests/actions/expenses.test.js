import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import { ExpandSubscriber } from '../../../node_modules/rxjs/operators/expand';

test('Should generate remove expense object', () => {
    const res = removeExpense({ id: '123abc' });
    expect(res).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should generate edit expense object', () => {
    const res = editExpense('123abc', { note: 'New note!' });
    expect(res).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note!'
        }
    });

});

test('Should generate add expense object for default values', () => {
    const res1 = addExpense();
    expect(res1).toEqual({
        expense: {
            amount: 0,
            createdAt: 0,
            description: '',
            note: '',
            id: expect.any(String)
        },
        type: 'ADD_EXPENSE',
    });
});

test('Should generate add expense object for specified values', () => {
    const expense = {
        amount: 1200,
        createdAt: 1020201020100,
        description: 'adasdasd',
        note: 'blahh'
    };

    const action = addExpense(expense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }

    });
});