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
                episodesArray: action.payload.results,
                fetching: false,
                initialPage: action.payload.page,
                endPage: action.payload.info.pages
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

export const getEpisodeAction = (id) => (dispatch, getState) => {
    const { episodesArray } = getState().episodes
    const episode = episodesArray.filter(episode => episode.id === id);    
    console.log(episode);
    dispatch({
        type: GET_EPISODE,
        payload: episode
    })    
};

