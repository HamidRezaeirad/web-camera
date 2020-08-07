"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helpers_1 = require("./helpers");
const routers_1 = __importDefault(require("./routers"));
const app = express_1.default();
app.set("port", config_1.default.get("app.port") || 3000);
app.use(cors_1.default());
app.use(body_parser_1.default.json({ limit: "10mb" }));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use("/api", routers_1.default);
app.use(helpers_1.ErrorMiddleware);
exports.default = app;
//# sourceMappingURL=app.js.map