import { ADD_POINT, FINISH_PATH, UPDATE_POINT } from "../actions/types";

export default (state = { points: [], paths: [] }, action) => {
    switch (action.type) {
        case ADD_POINT:
            return { ...state, points: [...state.points, action.payload] };
        case UPDATE_POINT:
            const newPoints = [...state.points];
            newPoints[action.payload.index] = action.payload.point;
            return { ...state, points: newPoints };
        case FINISH_PATH:
            const newPaths = [...state.paths];
            newPaths.push(state.points);
            return { ...state, points: [], paths: newPaths };
        default:
            return state;
    }
};
