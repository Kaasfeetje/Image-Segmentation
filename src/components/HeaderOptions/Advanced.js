import React from "react";

import "../../css/HeaderOptions/Advanced.css";
function Advanced() {
    return (
        <div className="advanced">
            <div>
                <h4>Github Integration</h4>
                <button className="advanced-btn">Log In</button>
            </div>
            <div>
                <h4>Revert From History</h4>
                <div className="advanced-revert">
                    <button className="advanced-btn">Revert</button>
                    <button className="advanced-btn advanced-btn-dangerous">
                        Delete
                    </button>
                </div>
            </div>
            <div>
                <h4>Save To History</h4>
                <button className="advanced-btn">Save</button>
            </div>
        </div>
    );
}

export default Advanced;
