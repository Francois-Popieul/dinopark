import { Router } from "express";
import { DinosaurController } from "../controllers/DinosaurController";

const dinosaurRouter = Router();

dinosaurRouter.get("/", (request, response) => {
  const controller = new DinosaurController(request, response);
  controller.browseDinosaurs();
});

dinosaurRouter.get("/:id", (request, response) => {
  const controller = new DinosaurController(request, response);
  controller.findDinosaurById();
});

dinosaurRouter.get("/diet/:filteredDiet", (request, response) => {
  const controller = new DinosaurController(request, response);
  controller.findDinosaurByDiet();
});

export default dinosaurRouter;