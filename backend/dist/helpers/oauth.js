"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.xApikey = exports.verifyAccessToken = void 0;
var jwt = require("jsonwebtoken");
const config_1 = __importDefault(require("config"));
const debug_1 = require("./debug");
const accessTokenSecretKey = config_1.default.get("oauth.apiAccessToken.secretKey");
const verifyAccessToken = function (accessToken) {
    try {
        const data = jwt.verify(accessToken, accessTokenSecretKey);
        return {
            isValid: true,
            payload: data,
        };
    }
    catch (err) {
        debug_1.debug("err", err);
        return {
            isValid: false,
            error: err,
        };
    }
};
exports.verifyAccessToken = verifyAccessToken;
const xApikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.1zpyyKMG6IR8T12sPzQ6Qe6Z4f1GSaLHInevyJnXhSw";
exports.xApikey = xApikey;
//# sourceMappingURL=oauth.js.map