"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
const celebrate_1 = require("celebrate");
const helpers_1 = require("../helpers");
const ErrorMiddleware = function (err, req, res, next) {
    helpers_1.debug("Error: ", err);
    if (celebrate_1.isCelebrate(err)) {
        res.status(400).send(err.message);
    }
    else {
        res.status(500).send(err.message);
    }
};
exports.ErrorMiddleware = ErrorMiddleware;
//# sourceMappingURL=error_middleware.js.map