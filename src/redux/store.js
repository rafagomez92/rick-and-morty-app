import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { charactersReducers } from './charactersDuck';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    characters: charactersReducers
});

// Comprobar si tiene instalado las herramientas de desarrollo (Redux)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(
        rootReducer, 
        composeEnhancers(applyMiddleware(thunk))
    );
}