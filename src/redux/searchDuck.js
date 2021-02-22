import axiosCustomer from '../config/axios';
// Constantes
const initialData = {
    fetching: false,
    resultSearch: [],
    currentSearch: {}    
};

const SEARCH = 'SEARCH';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_ERROR = 'SEARCH_ERROR';


// Reducer
export default function reducer(state = initialData, action) {    
    switch (action.type) {            
        case SEARCH: 
            return {
                ...state,
                fetching: true
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                resultSearch: action.payload,
                fetching: false                
            }
        case SEARCH_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }        
        default:
            return state;
    }        
}

// Action
export const getSearchAction = (data) => async (dispatch, getState) => {    
    if(data === undefined) {
        return
    }    
    dispatch({
        type: SEARCH
    });
    return await axiosCustomer.get(`/${data.option}/?name=${data.name}`)
    // return await axiosCustomer.get('/character/?name=rick')
    .then(res => {
        dispatch({
            type: SEARCH_SUCCESS,
            payload: res.data.results
        })
    })
    .catch(error => {
        dispatch({
            type: SEARCH_ERROR,
            payload: error.response.message
        })
    })
};

