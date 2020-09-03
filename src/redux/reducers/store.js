import { createStore } from 'redux';
import { counters } from '../reducers/counters';

const store = createStore(counters)

export { store }