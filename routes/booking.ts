import { Router } from "express";
import { BookingController } from "../controllers/BookingController";

const bookingRouter = Router();

// HOMEPAGE
bookingRouter.get("/", (request, response) => {
    const controller = new BookingController(request, response);
    controller.bookingpage();
});

bookingRouter.post("/", (request, response) => {
    const controller = new BookingController(request, response);
    controller.saveBooking();
});

export default bookingRouter;
