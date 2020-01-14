import React from 'react';
import ReactDOM, { render } from 'react-dom';
import logo from './Assets/tutorial.gif';

const modalRoot = document.getElementById("modal-root");


class Modal extends React.Component {
    render() {
        return ReactDOM.createPortal(
            <div
            style={{
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.3)"
            }}
        >
            <div
            style={{
                padding: 20,
                background: "#fff",
                borderRadius: "2px",
                display: "inline-block",
                minHeight: "800px",
                margin: "1rem",
                position: "relative",
                minWidth: "800px",
                boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                justifySelf: "center"
            }}
            >
            {this.props.statement}
            <hr />
            <p>Place destinations on the canvas to the left and then select an algorithm!</p>
            <img src={logo} width="962px" height="500px" justifyContent="center" alignItems="center" alt="loading..." />

            <hr />
            <button onClick={this.props.onClose}>Close</button>
            </div>
        </div>,
        modalRoot
        );
    }
}

export default Modal;