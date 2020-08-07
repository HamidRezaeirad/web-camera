var jwt = require("jsonwebtoken");
import config from "config";
import { debug } from "./debug";

const accessTokenSecretKey = config.get("oauth.apiAccessToken.secretKey");

const verifyAccessToken = function (accessToken: string) {
  try {
    const data = jwt.verify(accessToken, accessTokenSecretKey);
    return {
      isValid: true,
      payload: data,
    };
  } catch (err) {
    debug("err", err);
    return {
      isValid: false,
      error: err,
    };
  }
};

const xApikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.1zpyyKMG6IR8T12sPzQ6Qe6Z4f1GSaLHInevyJnXhSw";

export { verifyAccessToken, xApikey };
