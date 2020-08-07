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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPdf = void 0;
const helpers_1 = require("../../helpers");
const document_logic_1 = require("./document.logic");
const sendPdf = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { base64, fileName } = req.body;
        const doc = yield helpers_1.createPDF({ base64, fileName });
        const emailInfo = yield document_logic_1.sendPdfEmail(doc);
        yield helpers_1.deletePdfFile(fileName);
        return res.send(emailInfo);
    }
    catch (error) {
        next(error);
    }
});
exports.sendPdf = sendPdf;
//# sourceMappingURL=document.controller.js.map