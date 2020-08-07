"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const health_router_1 = __importDefault(require("./health.router"));
const document_router_1 = __importDefault(require("./document.router"));
const router = express_1.default.Router();
router.use("/health", health_router_1.default);
router.use("/document", document_router_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map