import { Router } from "express";
import { DinosaurController } from "../controllers/DinosaurController";

const dinosaurRouter = Router();

dinosaurRouter.get("/", (request, response) => {
  const controller = new DinosaurController(request, response);
  controller.browseDinosaurs();
});

dinosaurRouter.get("/:id", (request, response) => {
  console.log(request);  
  const controller = new DinosaurController(request, response);
  controller.findDinosaurById();
});

export default dinosaurRouter;