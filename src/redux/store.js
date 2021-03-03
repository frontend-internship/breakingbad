import { applyMiddleware, createStore, compose} from 'redux';
import promise from 'redux-promise-middleware';
import rootReducer from '../redux/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(promise);

const store = createStore(rootReducer, composeEnhancers(middleware));
export default store;