import React from "react";
import { connect } from "react-redux";

import "../../css/HeaderOptions/Layers.css";
import LayerTable from "./LayerTable";
function Layers({ layers }) {
    return (
        <div className="layers">
            <div className="layers-head">
                <div className="layers-head--mask">
                    <p>Mask Opacity</p>
                    <input type="number"></input>
                </div>
                <div className="layers-head--button">
                    <button className="header--option header--option-dangerous">
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
    return { layers: state.layers.layers };
};

export default connect(mapStateToProps)(Layers);
