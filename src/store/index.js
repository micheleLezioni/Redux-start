import counterReducer from "./reducers/counterReducer";

import { combineReducers, createStore, applyMiddleware, compose } from "redux";

const initialState = {
    counter: 0
}

// const globalReducer = combineReducers({
//     counterReducer
// })

//senza initialState lo state iniziale è undefined

const configureStore = () => {
    return createStore(
        counterReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};


export default configureStore;