import React from "react";

import "../css/Header.css";
function Header() {
    return (
        <div className="header">
            <div className="header--logo">Image Segmentation</div>
            <div className="header--options">
                <button className="header--option">Upload Image</button>
                <button className="header--option">Layers</button>
                <button className="header--option">Advanced</button>
                <button className="header--option">Help</button>
                <button className="header--option">Save</button>
                <button className="header--option header--option-dangerous">
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Header;
