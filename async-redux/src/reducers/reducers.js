
import { FETCH_PLAYERS_LOADING, FETCH_PLAYERS_SUCCESS, FETCH_PLAYERS_FAILED } from '../actions/actions'


const initialState = {
    playerData: [],
    error: null,
    isFetching: false
}

function reducer(state = initialState, action) {
    console.log('Reducer Firing', action)
    switch(action.type) {
        case FETCH_PLAYERS_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case FETCH_PLAYERS_SUCCESS:
            return {
                ...state,
                playerData: action.payload,
                isFetching: false,
                error: null
            };
        case FETCH_PLAYERS_FAILED:
            return {
                ...state,
                playerData: [],
                isFetching: false,
                error: action.payload
            };
        default: 
            return state;
    }
}

export default reducer; 