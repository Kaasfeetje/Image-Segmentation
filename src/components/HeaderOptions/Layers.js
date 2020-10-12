import React from "react";

import "../../css/HeaderOptions/Layers.css";
function Layers() {
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
                <p>No Layers Yet</p>
            </div>
        </div>
    );
}

export default Layers;
