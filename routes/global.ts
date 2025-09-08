import { Router } from "express";
import { GlobalController } from "../controllers/GlobalController";

const globalRouter = Router();

// HOMEPAGE
globalRouter.get("/", (request, response) => {
  console.log("Appel du routeur général");
  const controller = new GlobalController(request, response);  
  controller.homepage();
});

export default globalRouter;
