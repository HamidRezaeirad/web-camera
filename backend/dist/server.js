"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const helpers_1 = require("./helpers");
const expressSwagger = require("express-swagger-generator")(app_1.default);
const server = app_1.default.listen(app_1.default.get("port"), () => {
    helpers_1.debug("App is running at http://localhost:%d in %s mode", app_1.default.get("port"), app_1.default.get("env"));
    helpers_1.debug("Press CTRL-C to stop\n");
});
if (app_1.default.get("env") === "debug")
    expressSwagger(helpers_1.swaggerDoc(app_1.default.get("port")));
exports.default = server;
//# sourceMappingURL=server.js.map