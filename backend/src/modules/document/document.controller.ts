import { Request, Response, NextFunction } from "express";
import { createPDF, deletePdfFile } from "../../helpers";
import { sendPdfEmail } from "./document.logic";

const sendPdf = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { base64, fileName } = req.body;
    const doc = await createPDF({ base64, fileName });
    const emailInfo = await sendPdfEmail(doc);
    await deletePdfFile(fileName);
    return res.send(emailInfo);
  } catch (error) {
    next(error);
  }
};

export { sendPdf };
