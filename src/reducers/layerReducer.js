import { layer } from "@fortawesome/fontawesome-svg-core";
import { ADD_LAYER, SELECT_LAYER, UPDATE_LAYER } from "../actions/types";

export default (state = { layers: [], selectedLayer: null }, action) => {
    switch (action.type) {
        case ADD_LAYER:
            return {
                ...state,
                layers: [
                    ...state.layers,
                    {
                        name: "Temporary name",
                        color: "#000",
                        id: action.payload.id,
                    },
                ],
            };
        case UPDATE_LAYER:
            const newLayers = [...state.layers];
            newLayers[action.payload.id] = action.payload.layer;
            return { ...state, layers: newLayers };
        case SELECT_LAYER:
            return { ...state, selectedLayer: action.payload };
        default:
            return state;
    }
};
