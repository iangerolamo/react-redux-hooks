import { createStore } from 'redux';
import { counters } from './counters'

const store = createStore(counters)

export { store }