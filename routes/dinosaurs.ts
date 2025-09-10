import { Router } from "express";
import { DinosaurController } from "../controllers/DinosaurController";

const dinosaurRouter = Router();

// BROWSE
dinosaurRouter.get("/", (request, response) => {
  console.log("Appel de la route des dinosaures");
  const controller = new DinosaurController(request, response);
  controller.browseDinosaurs();
});

export default dinosaurRouter;