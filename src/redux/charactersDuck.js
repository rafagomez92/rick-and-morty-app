import axiosCustomer from '../config/axios';

// Constantes
const initialData = {
    fetching: false,
    charactersArray: [],
    currentCharacter: {},
    initialPage: 1,
    endPage: 0       
};

const GET_CHARACTERS = "GET_CHARACTERS";
const GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
const GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR";

const GET_CHARACTER = "GET_CHARACTER";
const GET_CHARACTER_SUCCESS = "GET_CHARACTER_SUCCESS";
const GET_CHARACTER_ERROR = "GET_CHARACTER_ERROR";

// Reducer
export default function reducer(state = initialData, action) {
    switch(action.type) {  
        case GET_CHARACTERS:
        case GET_CHARACTER:             
            return {
                ...state,
                fetching: true
            }  
            case GET_CHARACTERS_SUCCESS:
            return { 
                ...state, 
                charactersArray: action.payload.results,
                fetching: false,
                initialPage: action.payload.page,
                endPage: action.payload.info.pages
            }
        case GET_CHARACTERS_ERROR:
        case GET_CHARACTER_ERROR:             
            return {
                ...state,
                fetching: false,
                error: action.payload
            }   
        case GET_CHARACTER_SUCCESS: 
            return {
                ...state,
                currentCharacter: action.payload,
                fetching: false
            }
        default: 
            return state;
    }

}
// Action (thunks)
export const getCharactersAction = (page = 1) => async(dispatch, getState) => {
    dispatch({
        type: GET_CHARACTERS        
    });
    return await axiosCustomer.get(`/character?page=${page}`)    
    .then(res => {        
        dispatch({
            type: GET_CHARACTERS_SUCCESS,
            payload: {results: res.data.results, page, info: res.data.info }
        })
    })
    .catch(error => {
        dispatch({
            type: GET_CHARACTERS_ERROR,
            payload: error.response.message
        })
    });
};



export const getCharacterAction = (id) => async (dispatch) => {    
    dispatch({
        type: GET_CHARACTER        
    });

    return await axiosCustomer.get(`/character/${id}`)
    .then(res => {    
        dispatch({
            type: GET_CHARACTER_SUCCESS,
            payload: res.data 
        })
    })
    .catch(error => {
        dispatch({
            type: GET_CHARACTER_ERROR,
            payload: error.response.message
        })
    });

    
}