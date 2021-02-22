import axiosCustomer from '../config/axios';

// Constantes
const initialData = {
    fetching: false,
    episodesArray: [],
    currentEpisode: {}
};

const GET_EPISODES = 'GET_EPISODES';
const GET_EPISODES_SUCCESS = 'GET_EPISODES_SUCCESS';
const GET_EPISODES_ERROR = 'GET_EPISODES_ERROR';

const GET_EPISODE = 'GET_EPISODE';



// Reducer
export default function reducer(state = initialData, action) {
    switch (action.type) {
        case GET_EPISODES:
            return {
                ...state,
                fetching: true,                
            }
        case GET_EPISODES_SUCCESS:
            return {
                ...state,
                episodesArray: action.payload,
                fetching: false
            }
        case GET_EPISODES_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        case GET_EPISODE:
            return {
                ...state,
                currentEpisode: action.payload[0]
            }
        default:
            return state;
    }
};

// Action (thunks)
export const getEpisodesAction = () => async(dispatch, getState) => {    
    dispatch({
        type: GET_EPISODES        
    });
    return await axiosCustomer.get('/episode')
    .then(res => {
        dispatch({
            type: GET_EPISODES_SUCCESS,
            payload: res.data.results
        })
    })
    .catch(error => {
        dispatch({
            type: GET_EPISODES_ERROR,
            payload: error.response.message
        })
    })
};

export const getEpisodeAction = (id) => (dispatch, getState) => {
    const { episodesArray } = getState().episodes
    const episode = episodesArray.filter(episode => episode.id === id);    
    console.log(episode);
    dispatch({
        type: GET_EPISODE,
        payload: episode
    })    
};

