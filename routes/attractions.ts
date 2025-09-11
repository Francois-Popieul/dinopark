import { Router } from "express";
import { AttractionController } from "../controllers/AttractionController";

const attractionRouter = Router();

attractionRouter.get("/", (request, response) => {
  const controller = new AttractionController(request, response);
  controller.browseAttractions();
});

export default attractionRouter;