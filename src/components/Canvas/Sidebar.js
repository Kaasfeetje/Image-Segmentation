import React from "react";
import { connect } from "react-redux";
import { addColor } from "../../actions";
import Color from "./Color";

function Sidebar({ colors = [], addColor }) {
    const onAddButton = () => {
        addColor(colors.length);
    };

    const renderColors = colors.map((el) => <Color key={el.id} color={el} />);
    return (
        <ul className="main-sidebar">
            {renderColors}
            <button onClick={onAddButton}>Add Class</button>
        </ul>
    );
}

const mapStateToProps = (state) => {
    return { colors: state.colors.colors };
};

export default connect(mapStateToProps, { addColor })(Sidebar);
