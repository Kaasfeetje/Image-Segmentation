import React, { useEffect, useRef } from "react";
import "../css/Header.css";
import Dropdown from "./Dropdown";
//import Advanced from "./HeaderOptions/Advanced";
import Help from "./HeaderOptions/Help";
import Layers from "./HeaderOptions/Layers";
import UploadImage from "./HeaderOptions/UploadImage";
import { selectNav } from "../actions";
import { connect } from "react-redux";

import { createMask } from "../saveMask";

function Header({ image, selectNav }) {
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (e) => {
            if (ref.current.contains(e.target)) {
                return;
            }
            selectNav(null);
        };
        document.body.addEventListener("click", onBodyClick);

        return () => {
            document.body.removeEventListener("click", onBodyClick);
        };
    });

    return (
        <div className="header">
            <div className="header--logo">Image Segmentation</div>
            <div ref={ref} className="header--options">
                <Dropdown
                    text="Upload Image"
                    selected={false}
                    Component={UploadImage}
                    id={0}
                />
                <Dropdown
                    text="Layers"
                    selected={false}
                    Component={Layers}
                    id={1}
                />
                {/* <Dropdown
                    text="Advanced"
                    selected={false}
                    Component={Advanced}
                    id={2}
                /> */}
                <Dropdown
                    text="Help"
                    selected={false}
                    Component={Help}
                    id={3}
                />
                <div>
                    <button
                        className="header--option"
                        onClick={() => createMask()}
                    >
                        Save
                    </button>
                </div>
                <div>
                    <button className="header--option header--option-dangerous">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { image: state.images.images[state.images.activeImage] };
};

export default connect(mapStateToProps, { selectNav })(Header);
