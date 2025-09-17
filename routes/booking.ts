import { Router } from "express";
import { BookingController } from "../controllers/BookingController";

const bookingRouter = Router();

// HOMEPAGE
bookingRouter.get("/", (request, response) => {
    const controller = new BookingController(request, response);
    controller.bookingpage();
});

export default bookingRouter;
