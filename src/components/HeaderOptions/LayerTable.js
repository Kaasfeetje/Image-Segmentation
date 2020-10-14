import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { moveLayerUp, moveLayerDown } from "../../actions";

import "../../css/HeaderOptions/LayerTable.css";
function LayerTable({ layers, moveLayerUp, moveLayerDown }) {
    const moveDown = (index) => {
        console.log("DOWN");
        moveLayerDown(index);
    };

    const moveUp = (index) => {
        console.log("UP");
        moveLayerUp(index);
    };

    const renderLayers = () => {
        return layers.map((el, index) => (
            <div className="table-row">
                <p>{index}</p>
                <div
                    style={{
                        backgroundColor: `${el.color}`,
                        minWidth: "15px",
                        minHeight: "15px",
                    }}
                ></div>
                <p>{el.name}</p>
                <div className="table-updown">
                    <FontAwesomeIcon
                        onClick={() => moveUp(index)}
                        className="table-up"
                        icon="sort-up"
                    />
                    <FontAwesomeIcon
                        onClick={() => moveDown(index)}
                        className="table-down"
                        icon="sort-down"
                    />
                </div>
                <button className="table-button">X</button>
            </div>
        ));
    };

    return (
        <div className="table">
            <div className=" table-header table-row">
                <p>Layer</p>
                <p>Color</p>
                <p>Layer Name</p>
                <p>Up/down</p>
                <p>Delete</p>
            </div>
            {renderLayers()}
        </div>
    );
}

export default connect(null, { moveLayerUp, moveLayerDown })(LayerTable);
