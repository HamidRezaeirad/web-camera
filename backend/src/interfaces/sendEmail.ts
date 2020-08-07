interface SendEmailParams {
  from: string;
  to: string;
  subject: string;
  html: string;
  attachments: Array<object>;
}

export { SendEmailParams };
