import { combineReducers } from 'redux'
import Characters from '../redux/reducers/chars/Characters';
import Episodes from '../redux/reducers/eps/Episodes';

const rootReducer = combineReducers({
    Characters,
    Episodes,

})

export default rootReducer;