import { INCREMENT, DECREMENT } from "../../types"

export default function (state = {}, action) {
    switch (action.type) {
        case "SET_INPUT":
            return {
                ...state,
                text: action.payload
            }
        default:
            return state;
    }
}

//state === 
// {
//     text: "",
//     error: ""
// }

// const initialState = {
//     counter: 0
// }