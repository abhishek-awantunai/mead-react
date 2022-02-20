import { createStore } from 'redux';

import countReducer from './../reducers/count.reducer';

// Create a store
const store = createStore(countReducer)

export default store;