import { Request, Response, NextFunction } from "express";
import * as controller from "./health.logic";

const sayHello = (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = controller.sayHello();
    return res.send(result);
  } catch (error) {
    next(error);
  }
};

export { sayHello };
