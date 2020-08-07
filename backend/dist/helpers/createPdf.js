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
exports.createPDF = void 0;
const pdfkit_1 = __importDefault(require("pdfkit"));
const fs_1 = __importDefault(require("fs"));
const helpers_1 = require("../helpers");
const createPDF = (params) => __awaiter(void 0, void 0, void 0, function* () {
    let { base64, fileName } = params;
    const doc = new pdfkit_1.default({});
    doc.text(`Customer document __${fileName}__`, { align: "center" });
    doc.image(base64, 60, 100, { width: 500 });
    doc.fontSize(12);
    doc.pipe(fs_1.default.createWriteStream(__dirname + `/../uploads/${fileName}.pdf`));
    doc.end();
    helpers_1.debug("PDF file has been generated...");
    return { fileName };
});
exports.createPDF = createPDF;
//# sourceMappingURL=createPdf.js.map