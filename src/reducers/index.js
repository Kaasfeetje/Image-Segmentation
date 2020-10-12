import { combineReducers } from "redux";
import navReducer from "./navReducer";
import pointReducer from "./pointReducer";
import layerReducer from "./layerReducer";

export default combineReducers({
    nav: navReducer,
    points: pointReducer,
    layers: layerReducer,
});
