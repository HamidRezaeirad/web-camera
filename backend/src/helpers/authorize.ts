import { verifyAccessToken } from "./oauth";
import { Request, Response, NextFunction } from "express";
import { debug } from "./debug";

function authorize(req: Request, res: Response, next: NextFunction) {
  const accessToken: any = req.headers["x-api-key"];
  if (!accessToken) {
    return res.status(401).send({
      error: "Unauthorized access.",
    });
  } else {
    if (verifyAccessToken(accessToken).isValid) {
      return next();
    } else {
      return res.status(401).send({
        error: "Unauthorized access.",
      });
    }
  }
}

export { authorize };
