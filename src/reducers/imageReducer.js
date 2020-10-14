import { ADD_IMAGE } from "../actions/types";

export default (state = { images: [] }, action) => {
    switch (action.type) {
        case ADD_IMAGE:
            const newImages = [...state.images];
            console.log(action.payload);
            newImages.push(action.payload);
            return { ...state, images: newImages };

        default:
            return state;
    }
};
