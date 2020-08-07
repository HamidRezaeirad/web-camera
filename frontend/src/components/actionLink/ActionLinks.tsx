import * as React from "react";
import ActionLink from "./ActionLink";
import { ActionLinksProps } from "../../types/ActionLink.Interface";

const ActionLinks: React.SFC<ActionLinksProps> = ({
  active = true,
  onSendPdf,
  onCancel,
}: ActionLinksProps) => {
  return (
    <>
      <ActionLink
        active={active}
        className="right-link"
        title="Fertig"
        onClick={onSendPdf}
      />
      <ActionLink className="left-link" title="Abbruch" onClick={onCancel} />
    </>
  );
};

export default ActionLinks;
