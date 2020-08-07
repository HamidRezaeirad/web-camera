import React from "react";
import { ActionLinkProps } from "../../types/ActionLink.Interface";
import classNames from "classnames";
import "./styles.css";

const ActionLink: React.SFC<ActionLinkProps> = ({
  className,
  onClick,
  title,
  active = false,
}: ActionLinkProps) => {
  className = classNames("link-button", className, {
    disable: active,
  });

  return (
    <button disabled={active} className={className} onClick={() => onClick()}>
      {title}
    </button>
  );
};

export default ActionLink;
