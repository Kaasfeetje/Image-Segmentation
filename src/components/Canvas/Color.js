import React, { useState } from "react";
import Modal from "../Modal";

import { updateColor, selectColor } from "../../actions";
import { connect } from "react-redux";

import "../../css/Layer.css";
function Color({ color, selectedColor, selectColor, updateColor }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [pickedColor, setColor] = useState(color.color);
    const [name, setName] = useState(color.name);

    const onSave = (e) => {
        updateColor(
            color.id,
            // eslint-disable-next-line eqeqeq
            name == "" ? color.name : name,
            // eslint-disable-next-line eqeqeq
            pickedColor == undefined ? color.color : pickedColor
        );
        setModalOpen(false);
    };

    const onClick = (e) => {
        if (selectedColor === color.id) {
            setModalOpen(true);
        } else {
            selectColor(color.id);
        }
    };
    
    return (
        <>
            <button
                style={{
                    backgroundColor: color.color,
                    color: "white",
                    border:
                        selectedColor !== color.id
                            ? "none"
                            : "2px dotted green",
                    padding: "1rem",
                }}
                className="layer"
                onClick={onClick}
            >
                {color.name}
            </button>
            {modalOpen === true && (
                <Modal
                    title="Pick A Color"
                    content={
                        <>
                            <div className="modal-form-item">
                                <label htmlFor="name">Name: </label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder={name}
                                    id="name"
                                    type="text"
                                ></input>
                            </div>
                            <div className="modal-form-item">
                                <label htmlFor="color">Colorpicker: </label>
                                <input
                                    onChange={(e) => setColor(e.target.value)}
                                    placeholder={pickedColor}
                                    id="color"
                                    type="color"
                                ></input>
                            </div>
                        </>
                    }
                    actions={
                        <>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="modal-button modal-button-negative"
                            >
                                Close
                            </button>
                            <button
                                onClick={onSave}
                                className="modal-button modal-button-positive"
                            >
                                Save
                            </button>
                        </>
                    }
                    onDismiss={() => setModalOpen(false)}
                />
            )}
        </>
    );
}

const mapStateToProps = (state) => {
    return { selectedColor: state.colors.selectedColor };
};

export default connect(mapStateToProps, { updateColor, selectColor})(Color);
