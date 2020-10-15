import { ADD_COLOR, SELECT_COLOR, UPDATE_COLOR } from "../actions/types";

export default (
    state = {
        colors: [{ name: "Background Class", color: "#000", id: 0 }],
        selectedColor: 0,
    },
    action
) => {
    switch (action.type) {
        case ADD_COLOR:
            return {
                ...state,
                colors: [
                    ...state.colors,
                    {
                        name: "Temporary name",
                        color: "#000",
                        id: action.payload.id,
                    },
                ],
            };
        case UPDATE_COLOR:
            const newColors = [...state.colors];
            newColors[action.payload.id] = action.payload.color;
            return { ...state, colors: newColors };
        case SELECT_COLOR:
            return { ...state, selectedColor: action.payload };
        default:
            return state;
    }
};
