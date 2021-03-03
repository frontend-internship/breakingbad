import { combineReducers } from 'redux'
import Characters from '../redux/reducers/chars/Characters';

const rootReducer = combineReducers({
    Characters,
})

export default rootReducer;