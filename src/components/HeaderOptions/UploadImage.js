import React from "react";
import { connect } from "react-redux";
import { addImage, setImage } from "../../actions";
import "../../css/HeaderOptions/UploadImage.css";
function UploadImage({ imagesLength, addImage, setImage }) {
    const onUpload = (e) => {
        readImage(e.target.files[0]);
    };

    // const onUploadMultiple = (e) => {
    //     Object.values(e.target.files).forEach((el) => readImage(el));
    // };

    const readImage = (file) => {
        const reader = new FileReader();
        reader.onload = (function (aImg) {
            return function (e) {
                let i = new Image();
                i.onload = function () {
                    const obj = {
                        file: e.target.result,
                        width: i.width,
                        height: i.height,
                        name: file.name,
                    };
                    addImage(obj);
                    setImage(imagesLength);
                };
                i.src = e.target.result;
            };
        })();
        reader.readAsDataURL(file);
    };

    return (
        <div className="upload-image">
            <h3 className="upload-image--header">Upload Image</h3>
            <input type="file" accept="image/*" onChange={onUpload}></input>

            {/* <h3 className="upload-image--header">Upload Multiple</h3>
            <input
                type="file"
                accept="image/*"
                // webkitdirectory
                // directory
                multiple
                onChange={onUploadMultiple}
            ></input> */}
        </div>
    );
}

const mapStateToProps = (state) => {
    return { imagesLength: state.images.images.length };
};

export default connect(mapStateToProps, { addImage, setImage })(UploadImage);
