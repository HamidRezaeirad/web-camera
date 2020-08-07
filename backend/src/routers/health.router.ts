import * as controller from "../modules/health/health.controller";
import express from "express";

const router = express.Router();

/**
 * Print Hello
 * @group Monitoring Api
 * @route get /api/health
 * @returns { JSON Object } 200 - role object
 * @produces application/json
 * @consumes application/json
 */
router.get("/", controller.sayHello);

export default router;
