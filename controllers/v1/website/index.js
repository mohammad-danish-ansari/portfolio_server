import express, { Router } from "express";
const router = express.Router();

import contactReq from "./contactReq/routes.js";

router.use("/contactReq", contactReq);

export default router;
