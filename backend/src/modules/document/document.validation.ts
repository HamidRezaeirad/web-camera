import { Joi } from "celebrate";

const validationModel = {
  sendPdf: {
    body: {
      fileName: Joi.string().required(),
      base64: Joi.string().required(),
    },
  },
};

export default validationModel;
