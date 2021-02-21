import axiosCustomer from '../config/axios';

// Constantes
const initialData = {
    fetching: false,
    charactersArray: [],
    currentCharacter: {}
};

const GET_CHARACTERS = "GET_CHARACTERS";
const GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
const GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR";


// Reducder
export default function reducer(state = initialData, action) {
    switch(action.type) {  
        case GET_CHARACTERS:
            return {
                ...state,
                fetching: true
            }  
        case GET_CHARACTERS_SUCCESS:
            return { 
                ...state, 
                charactersArray: action.payload,
                fetching: false
            }
        case GET_CHARACTERS_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }   
        default: 
            return state;
    }

}
// Action (thunks)
export const getCharactersAction = () => (dispatch, getState) => {
    dispatch({
        type: GET_CHARACTERS        
    });
    return axiosCustomer.get('/character')
    .then(res => {
        dispatch({
            type: GET_CHARACTERS_SUCCESS,
            payload: res.data.results
        })
    })
    .catch(error => {
        dispatch({
            type: GET_CHARACTERS_ERROR,
            payload: error.response.message
        })
    })

}