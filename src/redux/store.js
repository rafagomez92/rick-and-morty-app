import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import charactersReducers, { getCharactersAction } from './charactersDuck';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    characters: charactersReducers
});

// Comprobar si tiene instalado las herramientas de desarrollo (Redux)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk))
);

getCharactersAction()(store.dispatch, store.getState);



export default store;
