import { combineReducers } from "redux";
import navReducer from "./navReducer";
import pointReducer from "./pointReducer";
import colorReducer from "./colorReducer";
import layerReducer from "./layerReducer";
import imageReducer from "./imageReducer";

export default combineReducers({
    nav: navReducer,
    points: pointReducer,
    layers: layerReducer,
    colors: colorReducer,
    images: imageReducer,
});
