import counterReducer from "./reducers/counterReducer";

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import inputReducer from "./reducers/inputReducer";

const initialState = {
    counter: 0,
    input: {
        text: "",
        error: ""
    }
}

const globalReducer = combineReducers({
    counter : counterReducer,
    input: inputReducer  // quello che ritorna counter reducer immagina che finisca qui
})

//senza initialState lo state iniziale è undefined

const configureStore = () => {
    return createStore(
        globalReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};


export default configureStore;