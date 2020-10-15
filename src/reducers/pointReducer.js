import {
    ADD_POINT,
    DELETE_LAST_POINT,
    FINISH_PATH,
    NEXT_IMAGE,
    PREVIOUS_IMAGE,
    RESET,
    SET_IMAGE,
    UPDATE_POINT,
} from "../actions/types";

const INITIAL_STATE = { points: [], paths: [] };

export default (state = INITIAL_STATE, action) => {
    let newPoints;
    switch (action.type) {
        case ADD_POINT:
            return { ...state, points: [...state.points, action.payload] };
        case UPDATE_POINT:
            newPoints = [...state.points];
            newPoints[action.payload.index] = action.payload.point;
            return { ...state, points: newPoints };
        case FINISH_PATH:
            const newPaths = [...state.paths];
            newPaths.push(state.points);
            return { ...state, points: [], paths: newPaths };
        case DELETE_LAST_POINT:
            newPoints = [...state.points];
            newPoints.splice(-1, 1);
            return { ...state, points: newPoints };
        case NEXT_IMAGE:
        case PREVIOUS_IMAGE:
        case SET_IMAGE:
        case RESET:
            return INITIAL_STATE;

        default:
            return state;
    }
};
