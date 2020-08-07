import * as controller from "../modules/document/document.controller";
import vmodel from "../modules/document/document.validation";
import express from "express";
import { celebrate } from "celebrate";
import { authorize } from "../helpers";

const router = express.Router();

const validate = (vModel: any) => {
  let vmodelObject = vModel;
  return celebrate(vmodelObject);
};

/**
 * Send Pdf
 * @group Send Pdf
 * @route post /api/document/sendPdf
 * @returns { JSON Object } 200 - role object
 * @param { string } fileName.body.required The File Name
 * @param { string } base64.body.required ImageUri
 * @produces application/json
 * @consumes application/json
 */
router.post(
  "/sendPdf",
  authorize,
  validate(vmodel.sendPdf),
  controller.sendPdf
);

export default router;
