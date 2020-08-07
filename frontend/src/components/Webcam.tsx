import React from "react";
import Camera, { IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import WebCamProps from "../types/Webcam.inteface";
import { FACING_MODES } from "../helpers/utilites";

const Webcam: React.SFC<WebCamProps> = ({
  onTakePhotoAnimationDone,
}: WebCamProps) => {
  return (
    <div style={{ height: "100vh", flexGrow: 1 }}>
      <Camera
        className="d-flex align-self-stretch "
        isImageMirror={false}
        idealFacingMode={FACING_MODES.ENVIRONMENT}
        isFullscreen={true}
        imageType={IMAGE_TYPES.JPG}
        onTakePhotoAnimationDone={onTakePhotoAnimationDone}
      />
    </div>
  );
};

export default Webcam;
