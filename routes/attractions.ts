import { Router } from "express";
import { AttractionController } from "../controllers/AttractionController";

const attractionRouter = Router();

// BROWSE
attractionRouter.get("/", (request, response) => {
  console.log("Appel de la route des attractions");
  const controller = new AttractionController(request, response);
  controller.browseAttractions();
});

export default attractionRouter;