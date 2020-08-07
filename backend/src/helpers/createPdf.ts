import PDFDocument from "pdfkit";
import fs from "fs";
import { CreatePdfParams } from "../interfaces";
import { debug } from "../helpers";

const createPDF = async (params: CreatePdfParams) => {
  let { base64, fileName } = params;
  const doc = new PDFDocument({});
  doc.text(`Customer document __${fileName}__`, { align: "center" });
  doc.image(base64, 60, 100, { width: 500 });
  doc.fontSize(12);
  doc.pipe(fs.createWriteStream(__dirname + `/../uploads/${fileName}.pdf`));
  doc.end();

  debug("PDF file has been generated...");
  return { fileName };
};

export { createPDF };
