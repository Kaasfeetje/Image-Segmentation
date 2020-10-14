import React from "react";
import { connect } from "react-redux";
import { addImage } from "../../actions";
import "../../css/HeaderOptions/UploadImage.css";
function UploadImage({ addImage }) {
    const onUpload = (e) => {
        // const reader = new FileReader();
        // const file = e.target.files[0];

        // reader.onload = (function (aImg) {
        //     return function (e) {
        //         console.log("result", e.target.result);
        //         const obj = {
        //             file: e.target.result,
        //             width: file.width,
        //             height: file.height,
        //         };
        //         addImage(obj);
        //     };
        // })();
        // reader.readAsDataURL(file);
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onload = (function (aImg) {
            return function (e) {
                let i = new Image();
                i.onload = function () {
                    const obj = {
                        file: e.target.result,
                        width: i.width,
                        height: i.height,
                    };
                    addImage(obj);
                };
                i.src = e.target.result;
            };
        })();
        reader.readAsDataURL(file);
    };

    return (
        <div className="upload-image">
            <h3 className="upload-image--header">Upload Image</h3>
            <input type="file" onChange={onUpload}></input>
        </div>
    );
}

export default connect(null, { addImage })(UploadImage);
