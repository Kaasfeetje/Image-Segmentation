import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

import { selectNav } from "../actions";
function Dropdown({ text, Component, selectNav, selected, id }) {
    const onClick = () => {
        if (selected) return selectNav(null);
        selectNav(id);
    };

    return (
        <div onClick={(e) => e.stopPropagation()}>
            <button onClick={onClick} className="header--option">
                {text}
                <FontAwesomeIcon
                    className="header--option-icon"
                    icon="sort-down"
                />
            </button>
            {selected && <Component />}
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return { selected: state.nav.navIndex === ownProps.id };
};

export default connect(mapStateToProps, { selectNav })(Dropdown);
