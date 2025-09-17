import { Router } from "express";
import { TicketController } from "../controllers/TicketController";

const ticketRouter = Router();

ticketRouter.get("/", (request, response) => {
  const controller = new TicketController(request, response);
  controller.browseTickets();
});

ticketRouter.get("/:id", (request, response) => {
  console.log(request);
  const controller = new TicketController(request, response);
  controller.findTicketById();
});

export default ticketRouter;