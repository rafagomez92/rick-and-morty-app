import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import charactersReducers, { getCharactersAction } from './charactersDuck';
import episodesReducers, { getEpisodesAction } from './episodesDuck';
import thunk from 'redux-thunk';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';



const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    characters: charactersReducers,
    episodes: episodesReducers
});


// Comprobar si tiene instalado las herramientas de desarrollo (Redux)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();


const store = createStore(
    createRootReducer(history),
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
);

getCharactersAction()(store.dispatch, store.getState);
getEpisodesAction()(store.dispatch, store.getState);


export default store;
