import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Coffee',
    note: '',
    amount: 295,
    createdAt: moment(0).add(3, 'days').valueOf()
}, {
    id: '3',
    description: 'credit card',
    note: '',
    amount: 291000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}];