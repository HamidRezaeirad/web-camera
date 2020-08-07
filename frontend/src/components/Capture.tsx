import React from "react";
import CaptureProps from "../types/Capture.Interface";

const Capture: React.SFC<CaptureProps> = ({ imageUri }: CaptureProps) => {
  return (
    <div style={{ height: "100vh", flexGrow: 1 }}>
      <div className="react-html5-camera-photo">
        <img
          alt="captured"
          className="d-flex align-self-stretch"
          src={imageUri}
        />
        <div id="container-circles">
          <div id="outer-circle">
            <div id="inner-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capture;
