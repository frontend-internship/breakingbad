import * as actionTypes from '../../ActionTypes';


const initState = {
    episodes: [],
    fetching: false,
}

const episodesReducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.GET_ALL_EPISODES_PENDING:
            return {
                ...state,
                fetching: true
            }
        case actionTypes.GET_ALL_EPISODES_FULFILLED:
            return {
                ...state,
                episodes: action.payload,
                fetching: false
            }
        case actionTypes.GET_ALL_EPISODES_REJECTED:
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

export default episodesReducer;