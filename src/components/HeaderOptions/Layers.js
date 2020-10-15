import React from "react";
import { connect } from "react-redux";

import { changeMaskOpacity, reset } from "../../actions";
import "../../css/HeaderOptions/Layers.css";
import LayerTable from "./LayerTable";
function Layers({ layers, maskOpacity, changeMaskOpacity, reset }) {
    return (
        <div className="layers">
            <div className="layers-head">
                <div className="layers-head--mask">
                    <p>Mask Opacity</p>
                    <input
                        type="number"
                        min={0}
                        max={100}
                        onChange={(e) => changeMaskOpacity(e.target.value)}
                        value={Math.round(maskOpacity * 100)}
                    ></input>
                </div>
                <div className="layers-head--button">
                    <button
                        onClick={() => reset()}
                        className="header--option header--option-dangerous"
                    >
                        Clear All Layers
                    </button>
                </div>
            </div>
            <div className="layers-content">
                {layers.length !== 0 ? (
                    <LayerTable layers={layers} />
                ) : (
                    <p>No Layers Yet</p>
                )}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        layers: state.layers.layers,
        maskOpacity: state.layers.maskOpacity,
    };
};

export default connect(mapStateToProps, { changeMaskOpacity, reset })(Layers);
