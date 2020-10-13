import { ADD_LAYER } from "../actions/types";

export default (state = { layers: []}, action) => {
    switch (action.type) {
        case ADD_LAYER:
            return {...state,layers:[...state.layers,action.payload]}

        default:
            return state
    }
}