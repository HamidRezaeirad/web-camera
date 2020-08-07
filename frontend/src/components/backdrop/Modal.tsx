import React from "react";
import ModalProps from "../../types/Modal.Interface";
import "./styles.css";

const Modal: React.SFC<ModalProps> = ({ message, onAccept }: ModalProps) => {
  return (
    <>
      {message && (
        <div className="Backdrop">
          <div className="Fill">
            <div className="d-flex justify-content-center Backdrop ">
              <div
                className="card m-auto"
                style={{ width: "90%", height: 100 }}
              >
                <div className="card-body">{message}</div>
                <div className="row">
                  <div className="col-12 ">
                    <button
                      onClick={() => onAccept()}
                      type="button"
                      className="btn btn-primary float-right m-3"
                    >
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
