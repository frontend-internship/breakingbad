import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from '../redux/rootReducer';

const middleware = applyMiddleware(promise(), thunk);


const store = createStore(rootReducer, middleware);
export default store;