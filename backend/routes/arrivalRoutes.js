import express from "express";
import * as arrivalController from "../controllers/arrivalController.js";

const router = express.Router();

router.get("/", arrivalController.getAllArrivals);

export default router;