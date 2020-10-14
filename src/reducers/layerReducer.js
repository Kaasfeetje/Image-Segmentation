import { ADD_LAYER, MOVE_LAYER_DOWN, MOVE_LAYER_UP } from "../actions/types";

export default (state = { layers: [] }, action) => {
    let newLayers;
    switch (action.type) {
        case ADD_LAYER:
            return { ...state, layers: [...state.layers, action.payload] };
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
        default:
            return state;
    }
};
