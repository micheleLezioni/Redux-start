import { INCREMENT, DECREMENT } from "../../types"

export default function (state = {}, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: action.payload
            };
        case DECREMENT:
            //sxss
            //ss
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

// const initialState = {
//     counter: 0
// }