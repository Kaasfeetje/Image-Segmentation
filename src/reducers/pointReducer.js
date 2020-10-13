import { ADD_POINT, DELETE_LAST_POINT, FINISH_PATH, UPDATE_POINT } from "../actions/types";

export default (state = { points: [], paths: [] }, action) => {
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
            newPoints.splice(-1,1);
            return {...state, points:newPoints};

        default:
            return state;
    }
};
