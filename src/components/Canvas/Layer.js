import React, { useState } from "react";
import Modal from "../Modal";

import { updateLayer, selectLayer } from "../../actions";
import { connect } from "react-redux";

import "../../css/Layer.css";
function Layer({ layer, selectedLayer, selectLayer, updateLayer }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [pickedColor, setColor] = useState(layer.color);
    const [name, setName] = useState(layer.name);

    const onSave = (e) => {
        console.log(pickedColor);
        console.log(name);
        updateLayer(
            layer.id,
            name == "" ? layer.name : name,
            pickedColor == undefined ? layer.color : pickedColor
        );
        setModalOpen(false);
    };

    const onClick = (e) => {
        if (selectedLayer === layer.id) {
            setModalOpen(true);
        } else {
            selectLayer(layer.id);
        }
    };

    return (
        <>
            <button
                style={{
                    backgroundColor: layer.color,
                    color: "white",
                    border:
                        selectedLayer !== layer.id
                            ? "none"
                            : "2px dotted green",
                    padding: "1rem",
                }}
                className="layer"
                onClick={onClick}
            >
                {layer.name}
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
    return { selectedLayer: state.layers.selectedLayer };
};

export default connect(mapStateToProps, { updateLayer, selectLayer })(Layer);
