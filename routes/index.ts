import { Router } from "express";
import globalRouter from "./global";
import dinosaurRouter from "./dinosaurs";
import attractionRouter from "./attractions";

const router = Router();

router.use(globalRouter);
router.use('/attractions', attractionRouter);
router.use('/dinosaurs', dinosaurRouter);

export default router;
