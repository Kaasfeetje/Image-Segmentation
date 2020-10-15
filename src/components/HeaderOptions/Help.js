//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "../../css/HeaderOptions/Help.css";
function Help() {
    return (
        <div className="help">
            <h3>Controls</h3>
            <hr />
            <div className="help-list">
                <ul>
                    <li id="help-header">
                        <span>Key</span>
                        <span>Action</span>
                    </li>
                    <li>
                        <span>Scroll</span>
                        <span>Zoom</span>
                    </li>
                    <li>
                        <span>Left Click</span>
                        <span>Place Point</span>
                    </li>
                    <li>
                        <span>Alt+Left Click</span> <span>Pan</span>
                    </li>
                    <li>
                        <span>A</span>
                        <span>Previous Image</span>
                    </li>
                    <li>
                        <span>D</span>
                        <span>Next Image Image</span>
                    </li>
                    <li>
                        <span>Ctrl+Z</span> <span>undo</span>
                    </li>
                    {/* <li>
                        <span>
                            <FontAwesomeIcon icon="arrow-up" />
                            <FontAwesomeIcon icon="arrow-down" />
                        </span>
                        <span>Increment Opacity</span>
                    </li>
                    <li>
                        <span>,</span>
                        <span>Toggle all layer visibility</span>
                    </li>
                    <li>
                        <span>[</span>{" "}
                        <span>Toggle control point visibility</span>
                    </li>
                    <li>
                        <span>0</span>
                        <span>Reset pan and zoom levels</span>
                    </li>
                    <li>
                        <span>Alt + Click</span>
                        <span>Delete Layer</span>
                    </li> */}
                </ul>
            </div>
            <h3>How to use</h3>
            <p style={{ marginBottom: "1rem" }}>
                Use left click to add a point. Use alt left click to pan around.
                Use scrollwheel to zoom in and out. Use Ctrl + Z to undo the
                last added point. Move layers up and down in the layers
                dropdown.
            </p>
            <p>Version: 0.1.0</p>
        </div>
    );
}

export default Help;
