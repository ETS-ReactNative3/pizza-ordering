import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk'
const store = createStore(
    reducers,
    {},
)

export default store;