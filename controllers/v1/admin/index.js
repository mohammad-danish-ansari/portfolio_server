import express, { Router } from "express";
const router = express.Router();
import userauth from "./authuser/routes.js";

router.use("/userauth", userauth);

export default router;
