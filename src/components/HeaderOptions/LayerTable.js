import React from "react";

import "../../css/HeaderOptions/LayerTable.css";
function LayerTable({ layers }) {
    const renderLayers = () => {
        layers.sort((a, b) => b.id - a.id);
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
                <p>Delete</p>
            </div>
            {renderLayers()}
        </div>
    );
}

export default LayerTable;
