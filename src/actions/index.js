import {
    ADD_COLOR,
    ADD_LAYER,
    ADD_POINT,
    DELETE_LAST_POINT,
    FINISH_PATH,
    SELECT_COLOR,
    SELECT_NAV,
    UPDATE_COLOR,
    UPDATE_POINT,
} from "../actions/types";

export const selectNav = (id) => {
    return {
        type: SELECT_NAV,
        payload: id,
    };
};

export const addPoint = (point) => {
    return {
        type: ADD_POINT,
        payload: point,
    };
};

export const updatePoint = (point, index) => {
    return {
        type: UPDATE_POINT,
        payload: { point, index },
    };
};

export const deleteLastPoint = () => {
    return {
        type: DELETE_LAST_POINT,
    };
};

export const finishPath = () => {
    return {
        type: FINISH_PATH,
    };
};

export const addColor = (id) => {
    return {
        type: ADD_COLOR,
        payload: { id },
    };
};

export const updateColor = (id, name, color) => {
    return {
        type: UPDATE_COLOR,
        payload: { id, color: { id, name, color } },
    };
};

export const selectColor = (id) => {
    return {
        type: SELECT_COLOR,
        payload: id,
    };
};

export const addLayer = (color, pathID) => {
    color.id = pathID;
    color.opacity = 0.5;

    return {
        type: ADD_LAYER,
        payload: color,
    };
};
