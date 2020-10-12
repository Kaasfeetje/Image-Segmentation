import React from "react";

import "../css/Main.css";
import Canvas from "./Canvas/Canvas";
import Sidebar from "./Canvas/Sidebar";
function Main() {
    return (
        <div className="main">
            <Sidebar />
            <Canvas />
        </div>
    );
}

export default Main;
