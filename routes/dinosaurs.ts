import { Router } from "express";
import { DinosaurController } from "../controllers/DinosaurController";

const dinosaurRouter = Router();

dinosaurRouter.get("/", (request, response) => {
  const controller = new DinosaurController(request, response);
  controller.browseDinosaurs();
});

export default dinosaurRouter;