"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPdfEmail = void 0;
const helpers_1 = require("../../helpers");
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("config"));
const helpers_2 = require("../../helpers");
const sendPdfEmail = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { fileName, to } = params;
    const uploadFileName = `${fileName}.pdf`;
    const filePath = path_1.default.join(__dirname, `/../../uploads/${uploadFileName}`);
    const transportParams = {
        from: config_1.default.get("mail.from"),
        to: to || config_1.default.get("mail.to"),
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
    helpers_2.debug("Email has been sent...");
    const emailInfo = yield helpers_1.sendEmail(transportParams);
    return emailInfo;
});
exports.sendPdfEmail = sendPdfEmail;
//# sourceMappingURL=document.logic.js.map