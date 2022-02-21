import { createStore, combineReducers } from 'redux';
import { reducerFunction } from '../reducers/count.reducer';
import { kappaReducerFunction } from '../reducers/kappa.reducer';

export const store = createStore(combineReducers({
    counter: reducerFunction,
    kappa: kappaReducerFunction
}));