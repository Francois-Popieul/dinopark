import { Router } from "express";
import globalRouter from "./global";
import dinosaurRouter from "./dinosaurs";
import attractionRouter from "./attractions";
import ticketRouter from "./tickets";

const router = Router();

router.use(globalRouter);
router.use('/attractions', attractionRouter);
router.use('/dinosaurs', dinosaurRouter);
router.use('/tickets', ticketRouter);

export default router;
