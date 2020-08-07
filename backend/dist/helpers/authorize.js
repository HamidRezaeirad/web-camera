"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const oauth_1 = require("./oauth");
function authorize(req, res, next) {
    const accessToken = req.headers["x-api-key"];
    if (!accessToken) {
        return res.status(401).send({
            error: "Unauthorized access.",
        });
    }
    else {
        if (oauth_1.verifyAccessToken(accessToken).isValid) {
            return next();
        }
        else {
            return res.status(401).send({
                error: "Unauthorized access.",
            });
        }
    }
}
exports.authorize = authorize;
//# sourceMappingURL=authorize.js.map