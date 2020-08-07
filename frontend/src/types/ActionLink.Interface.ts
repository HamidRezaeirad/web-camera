export interface ActionLinkProps {
  onClick: Function;
  title: string;
  className: string;
  active?: boolean;
}

export interface ActionLinksProps {
  active: boolean;
  onSendPdf: Function;
  onCancel: Function;
}
