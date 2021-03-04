import * as actionTypes from '../../ActionTypes';

const initState = {
    characters: [],
    fetching: false,
}

const charactersReducer = (state = initState, action) => {
    // console.log('from reducer => state: ',state, " action : " , action)
    switch (action.type) {
        case actionTypes.GET_ALL_CHARACTERS_PENDING:
            return {
                ...state,
                fetching: true
            }
        case actionTypes.GET_ALL_CHARACTERS_FULFILLED:
            return {
                ...state,
                characters: action.payload,
                fetching: false
            }
        case actionTypes.GET_ALL_CHARACTERS_REJECTED:
            return {
                ...state,
                fetching: false
            }
        default:
            return {
                ...state,
                fetching: false
            }
    }
}

export default charactersReducer;
