import { createStore } from 'redux';

const incrementCount = ( { incrementBy = 1 } = {} ) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

// Reducers 
// 1. Reducers are pure functions
// 2. Never change state or action


const countReducer = (state = { count: 0 }, action) => {
    
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return { count: state.count +  incrementBy };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return { count: state.count - decrementBy };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions are just objects that get sent to the store

// Increment
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 1000 }));

store.dispatch(incrementCount());


store.dispatch(decrementCount({decrementBy: 500}));

// Decrement
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 20
});

// unsubscribe();

// Reset
store.dispatch({
    type: 'RESET'
});