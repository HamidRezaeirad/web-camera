"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const validationModel = {
    sendPdf: {
        body: {
            fileName: celebrate_1.Joi.string().required(),
            base64: celebrate_1.Joi.string().required(),
        },
    },
};
exports.default = validationModel;
//# sourceMappingURL=document.validation.js.map