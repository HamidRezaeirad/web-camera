import * as React from "react";

import Modal from "./Modal";
import Spinner from "./Spinner";

export interface BackdropProps {
  message: string;
  loading: boolean;
  onAccept: Function;
}

const Backdrop: React.SFC<BackdropProps> = ({
  message,
  loading,
  onAccept,
}: BackdropProps) => {
  return (
    <>
      <Modal message={message} onAccept={onAccept}></Modal>
      <Spinner status={loading} />
    </>
  );
};

export default Backdrop;
