import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove an expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove an expense for invalid id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '1231231'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        id: '4',
        description: 'new expense',
        note: '',
        amount: 1925,
        createdAt: 0
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', () => {
    const id = expenses[0].id;
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates: {
            description: 'This is the new description'
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('This is the new description');
});

test('should not edit expense if id invalid', () => {
    const id = 'qweqweqweqwe';

    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates: {
            description: 'This is the new description'
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});