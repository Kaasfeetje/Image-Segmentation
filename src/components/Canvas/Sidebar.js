import React from "react";
import { connect } from "react-redux";
import { addLayer } from "../../actions";
import Layer from "./Layer";

function Sidebar({ layers = [], addLayer }) {
    const onAddButton = () => {
        addLayer(layers.length);
    };

    console.log(layers);
    const renderLayers = layers.map((el) => <Layer layer={el} />);
    return (
        <ul className="main-sidebar">
            {renderLayers}
            <button onClick={onAddButton}>Test</button>
        </ul>
    );
}

const mapStateToProps = (state) => {
    return { layers: state.layers.layers };
};

export default connect(mapStateToProps, { addLayer })(Sidebar);
