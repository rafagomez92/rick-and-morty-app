import axiosCustomer from '../config/axios';

// Constantes
const initialData = {
    fetching: false,
    episodesArray: [],
    currentEpisode: {},
    initialPage: 1,
    endPage: 0 
};

const GET_EPISODES = 'GET_EPISODES';
const GET_EPISODES_SUCCESS = 'GET_EPISODES_SUCCESS';
const GET_EPISODES_ERROR = 'GET_EPISODES_ERROR';

const GET_EPISODE = 'GET_EPISODE';
const GET_EPISODE_SUCCESS = 'GET_EPISODE_SUCCESS';
const GET_EPISODE_ERROR = 'GET_EPISODE_ERROR';



// Reducer
export default function reducer(state = initialData, action) {
    switch (action.type) {
        case GET_EPISODES:
        case GET_EPISODE:            
            return {
                ...state,
                fetching: true,                
            }
            case GET_EPISODES_SUCCESS:
            return {
                ...state,
                episodesArray: action.payload.results,
                fetching: false,
                initialPage: action.payload.page,
                endPage: action.payload.info.pages
            }
        case GET_EPISODES_ERROR:
        case GET_EPISODE_ERROR:                
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        case GET_EPISODE_SUCCESS:
            return {
                ...state,
                currentEpisode: action.payloadm,
                fetching:false
            }
        default:
            return state;
    }
};

// Action (thunks)
export const getEpisodesAction = (page=1) => async(dispatch, getState) => {    
    dispatch({
        type: GET_EPISODES        
    });
    return await axiosCustomer.get(`/episode?page=${page}`)
    .then(res => {
        dispatch({
            type: GET_EPISODES_SUCCESS,
            payload: {results: res.data.results, page, info: res.data.info }
        })
    })
    .catch(error => {
        dispatch({
            type: GET_EPISODES_ERROR,
            payload: error.response.message
        })
    })
};

export const getEpisodeAction = (id) => async (dispatch) => {
    dispatch({
        type: GET_EPISODE        
    });

    return await axiosCustomer.get(`/episode/${id}`)
    .then(res => {        
        dispatch({
            type: GET_EPISODE_SUCCESS,
            payload: res.data 
        })
    })
    .catch(error => {
        dispatch({
            type: GET_EPISODE_ERROR,
            payload: error.response.message
        })
    });    
};

