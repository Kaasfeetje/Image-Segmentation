import {
    ADD_IMAGE,
    NEXT_IMAGE,
    PREVIOUS_IMAGE,
    SET_IMAGE,
} from "../actions/types";

export default (state = { images: [], activeImage: 0 }, action) => {
    switch (action.type) {
        case ADD_IMAGE:
            const newImages = [...state.images];
            console.log(action.payload);
            newImages.push(action.payload);
            return { ...state, images: newImages };
        case SET_IMAGE:
            return { ...state, activeImage: action.payload };
        case NEXT_IMAGE:
            const nextImage =
                state.activeImage + 1 <= state.images.length
                    ? state.activeImage + 1
                    : state.activeImage;
            return { ...state, activeImage: nextImage };
        case PREVIOUS_IMAGE:
            const previousImage =
                state.activeImage - 1 >= 0
                    ? state.activeImage - 1
                    : state.activeImage;
            return { ...state, activeImage: previousImage };
        default:
            return state;
    }
};
