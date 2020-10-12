import {
    ADD_LAYER,
    ADD_POINT,
    FINISH_PATH,
    SELECT_LAYER,
    SELECT_NAV,
    UPDATE_LAYER,
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

export const finishPath = () => {
    return {
        type: FINISH_PATH,
    };
};

export const addLayer = (id) => {
    return {
        type: ADD_LAYER,
        payload: { id },
    };
};

export const updateLayer = (id, name, color) => {
    return {
        type: UPDATE_LAYER,
        payload: { id, layer: { id, name, color } },
    };
};

export const selectLayer = (id) => {
    return {
        type: SELECT_LAYER,
        payload: id,
    };
};
