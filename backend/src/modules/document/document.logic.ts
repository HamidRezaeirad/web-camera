import { sendEmail } from "../../helpers";
import path from "path";
import config from "config";
import { SendEmailParams, SendPdfEmailParams } from "../../interfaces";
import { debug } from "../../helpers";

const sendPdfEmail = async (params: SendPdfEmailParams) => {
  const { fileName, to } = params;
  const uploadFileName = `${fileName}.pdf`;
  const filePath = path.join(__dirname, `/../../uploads/${uploadFileName}`);
  const transportParams: SendEmailParams = {
    from: config.get("mail.from"),
    to: to || config.get("mail.to"),
    subject: "Scan document",
    html: `
       Dear Support,
       <br/><h3>Please find the document (${fileName}) as attached.</h3>
       <br/>Best Regards,
       <br/>Customer
    `,
    attachments: [
      {
        filename: uploadFileName,
        path: filePath,
        contentType: "application/pdf",
      },
    ],
  };
  debug("Email has been sent...");
  const emailInfo = await sendEmail(transportParams);
  return emailInfo;
};

export { sendPdfEmail };
