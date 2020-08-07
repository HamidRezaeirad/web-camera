"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller = __importStar(require("../modules/document/document.controller"));
const document_validation_1 = __importDefault(require("../modules/document/document.validation"));
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const helpers_1 = require("../helpers");
const router = express_1.default.Router();
const validate = (vModel) => {
    let vmodelObject = vModel;
    return celebrate_1.celebrate(vmodelObject);
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
router.post("/sendPdf", helpers_1.authorize, validate(document_validation_1.default.sendPdf), controller.sendPdf);
exports.default = router;
//# sourceMappingURL=document.router.js.map