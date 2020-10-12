import { SELECT_NAV } from "../actions/types";

export default (state = { navIndex: null }, action) => {
    switch (action.type) {
        case SELECT_NAV:
            return { ...state, navIndex: action.payload };

        default:
            return state;
    }
};
