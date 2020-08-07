import fs from "fs";
import { debug } from "../helpers";

const deletePdfFile = async (fileName: string) => {
  try {
    await fs.unlinkSync(__dirname + `/../uploads/${fileName}.pdf`);
    debug("PDF file has been removed...");
  } catch (err) {
    throw new Error(err);
  }
};

export { deletePdfFile };
