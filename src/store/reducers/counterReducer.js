import { INCREMENT, DECREMENT } from "../../types"

export default function (state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state;
    }
}

// const initialState = {
//     counter: 0
// }