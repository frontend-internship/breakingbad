import * as types from '../../ActionTypes';


const initState = {
    characters: [],
    fetching: false,
}

const charactersReducer =  (state = initState, action) => {
// console.log('from reducer: ',state, " type : " , action)
    switch(action.type){
        case types.GET_ALL_CHARACTERS_PENDING:
            // console.log('from reducer PENDING: ',state, " action : " , action)

            return{
                ...state,
                fetching: true
            }
        case types.GET_ALL_CHARACTERS_FULFILLED:
            // console.log('from reducer FULFILLED: ',state, " action : " , action)

            return{
                ...state,
                characters: action.payload,
                fetching: false
            }
        case types.GET_ALL_CHARACTERS_REJECTED:
            // console.log('from reducer REJECTED: ',state,  " action : " , action)

            return{
                ...state,
                fetching: false
            }
        default: 
        // console.log('from reducer default: ',state,  " action : " , action)

            return{
                ...state,
                fetching: false
            }  
    }
}

export default charactersReducer;
