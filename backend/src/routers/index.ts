import express from "express";

import health_router from "./health.router";
import document_router from "./document.router";

const router = express.Router();

router.use("/health", health_router);
router.use("/document", document_router);

export default router;
