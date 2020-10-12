import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "../../css/HeaderOptions/Help.css";
function Help() {
    return (
        <div className="help">
            <h3>Controls</h3>
            <hr />
            <div className="help-list">
                <ul>
                    <li>
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
                        <span>Right Click</span> <span>Pan</span>
                    </li>
                    <li>
                        <span>Ctrl+Z</span> <span>undo</span>
                    </li>
                    <li>
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
                    </li>
                </ul>
            </div>
            <h3>How to use</h3>
            <p style={{ marginBottom: "1rem" }}>
                This is how I personally use this tool the quickest. First, I
                label all the movables and lane markings. Next, I label the
                road, and move it to the bottom with the layer palette. Then I
                add a box of undrivable over the entire image and move it to the
                bottom. Finally, I add the car section over the hood
            </p>
            <p>Version: 0.1.0</p>
        </div>
    );
}

export default Help;
