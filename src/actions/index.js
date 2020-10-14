import {
    ADD_COLOR,
    ADD_IMAGE,
    ADD_LAYER,
    ADD_POINT,
    DELETE_LAST_POINT,
    FINISH_PATH,
    MOVE_LAYER_DOWN,
    MOVE_LAYER_UP,
    NEXT_IMAGE,
    PREVIOUS_IMAGE,
    SELECT_COLOR,
    SELECT_NAV,
    SET_IMAGE,
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
    const obj = { ...color, id: pathID, opacity: 0.5 };

    return {
        type: ADD_LAYER,
        payload: obj,
    };
};

export const moveLayerUp = (id) => {
    return {
        type: MOVE_LAYER_UP,
        payload: id,
    };
};

export const moveLayerDown = (id) => {
    return {
        type: MOVE_LAYER_DOWN,
        payload: id,
    };
};

export const addImage = (file) => {
    return {
        type: ADD_IMAGE,
        payload: file,
    };
};

export const setImage = (index) => {
    return {
        type: SET_IMAGE,
        payload: index,
    };
};

export const nextImage = () => {
    return {
        type: NEXT_IMAGE,
    };
};

export const previousImage = () => {
    return {
        type: PREVIOUS_IMAGE,
    };
};
