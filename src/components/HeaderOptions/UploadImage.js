import React from "react";

import "../../css/HeaderOptions/UploadImage.css";
function UploadImage() {
    return (
        <div className="upload-image">
            <h3 className="upload-image--header">Upload Image</h3>
            <input type="file"></input>
        </div>
    );
}

export default UploadImage;
