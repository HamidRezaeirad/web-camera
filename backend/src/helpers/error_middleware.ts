import { isCelebrate } from "celebrate";
import { Request, Response, NextFunction } from "express";
import { debug } from "../helpers";

const ErrorMiddleware = function (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  debug("Error: ", err);
  if (isCelebrate(err)) {
    res.status(400).send(err.message);
  } else {
    res.status(500).send(err.message);
  }
};

export { ErrorMiddleware };
