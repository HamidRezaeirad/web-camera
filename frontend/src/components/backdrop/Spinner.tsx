import React from "react";
import "./styles.css";

const Spinner = ({ status }) => {
  return (
    <>
      {status && (
        <div className="Fill">
          <div className="d-flex justify-content-center Backdrop pt-5">
            <div className="spinner-border m-auto" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Spinner;
