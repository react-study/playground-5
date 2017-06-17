import { createStore, combineReducers } from 'redux';
import bankReducer from './reducers/bankReducer';
import tabReducer from './reducers/tabReducer';

const reducers = combineReducers({
    bank: bankReducer,
    tab: tabReducer
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
