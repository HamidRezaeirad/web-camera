import React, { useState } from "react";
import { Webcam, Capture, ActionLinks, Backdrop } from "../../components";
import { sendPdf } from "./pdf.service";
import moment from "moment";
import "./styles.css";

const CameraPage = () => {
  const [state, setState] = useState({
    loading: false,
    message: null,
    imageUri: null,
  });

  const onCancelHandler = () => {
    setState({ ...state, imageUri: null });
  };

  const onSendPdfHandler = () => {
    setState({ ...state, loading: true });
    let fileName: string = moment.utc(new Date()).format("MM-DD-YYYY-hh-mm-ss");
    const params = {
      fileName: fileName,
      base64: state.imageUri,
    };
    sendPdf(params)
      .then((doc) => {
        setState({ ...state, loading: false, message: "Email has been sent!" });
      })
      .catch((err) => {
        setState({
          ...state,
          loading: false,
          message: "Something went wrong!",
        });
      });
  };

  const onAcceptHandler = () => {
    setState({ ...state, message: null, imageUri: null });
  };

  const onTakePhotoHandler = (dataUri) => {
    setState({ ...state, imageUri: dataUri });
  };

  let { message, loading, imageUri } = state;

  return (
    <div className="video-container">
      <Backdrop
        message={message}
        loading={loading}
        onAccept={onAcceptHandler}
      ></Backdrop>

      {!imageUri ? (
        <Webcam onTakePhotoAnimationDone={onTakePhotoHandler}></Webcam>
      ) : (
        <Capture imageUri={imageUri}></Capture>
      )}
      <ActionLinks
        active={!imageUri}
        onCancel={onCancelHandler}
        onSendPdf={onSendPdfHandler}
      />
    </div>
  );
};

export default CameraPage;
