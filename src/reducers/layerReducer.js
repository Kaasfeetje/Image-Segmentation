import {
    ADD_LAYER,
    CHANGE_MASK_OPACITY,
    MOVE_LAYER_DOWN,
    MOVE_LAYER_UP,
    NEXT_IMAGE,
    PREVIOUS_IMAGE,
    RESET,
    SET_IMAGE,
} from "../actions/types";

const INITIAL_STATE = { layers: [], maskOpacity: 1.0 };

export default (state = INITIAL_STATE, action) => {
    let newLayers;
    switch (action.type) {
        case ADD_LAYER:
            return { ...state, layers: [...state.layers, action.payload] };
        case CHANGE_MASK_OPACITY:
            return {
                ...state,
                maskOpacity: action.payload / 100.0,
            };
        case MOVE_LAYER_UP:
            newLayers = [...state.layers];
            if (action.payload - 1 >= 0) {
                const a = newLayers[action.payload];
                const b = newLayers[action.payload - 1];
                newLayers[action.payload] = b;
                newLayers[action.payload - 1] = a;
            }
            return { ...state, layers: newLayers };
        case MOVE_LAYER_DOWN:
            newLayers = [...state.layers];
            if (action.payload + 1 < newLayers.length) {
                const a = newLayers[action.payload];
                const b = newLayers[action.payload + 1];
                newLayers[action.payload] = b;
                newLayers[action.payload + 1] = a;
            }
            return { ...state, layers: newLayers };
        case RESET:
        case NEXT_IMAGE:
        case PREVIOUS_IMAGE:
        case SET_IMAGE:
            return INITIAL_STATE;
        default:
            return state;
    }
};
