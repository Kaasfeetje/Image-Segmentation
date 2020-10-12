import React from "react";
import ReactDOM from "react-dom";

import "../css/Modal.css";
function Modal({ title, content, actions, onDismiss }) {
    return ReactDOM.createPortal(
        <div onClick={onDismiss} className="modal">
            <div onClick={(e) => e.stopPropagation()} className="modal-content">
                <div className="modal-header">{title}</div>
                <div className=" modal-contentbox">{content}</div>
                <div className=" modal-actions">{actions}</div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
}

export default Modal;
