import { Router } from "express";
import globalRouter from "./global";
import dinosaurRouter from "./dinosaurs";
import attractionRouter from "./attractions";
import ticketRouter from "./tickets";
import bookingRouter from "./booking";

const router = Router();

router.use(globalRouter);
router.use('/attractions', attractionRouter);
router.use('/dinosaurs', dinosaurRouter);
router.use('/tickets', ticketRouter);
router.use('/booking', bookingRouter);

export default router;
