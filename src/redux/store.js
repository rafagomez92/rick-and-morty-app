import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import charactersReducers, { getCharactersAction } from './charactersDuck';
import episodesReducers, { getEpisodesAction } from './episodesDuck';
import searchReducers, { getSearchAction } from './searchDuck';
import thunk from 'redux-thunk';



const rootReducer = combineReducers({    
    characters: charactersReducers,
    episodes: episodesReducers,
    search: searchReducers
});


// Comprobar si tiene instalado las herramientas de desarrollo (Redux)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(    
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk))
);

getCharactersAction()(store.dispatch, store.getState);
getEpisodesAction()(store.dispatch, store.getState);
getSearchAction()(store.dispatch, store.getState);


export default store;
