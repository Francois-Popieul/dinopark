import { Controller } from "../libs/Controller";
import { AttractionRepository } from "../repositories/AttractionRepository";
import { Request, Response } from "express";

export class AttractionController extends Controller {
  private attractionRepository: AttractionRepository;

  constructor(request: Request, response: Response) {
    super(request, response);

    this.attractionRepository = new AttractionRepository();
  }

  public async browseAttractions() {
    console.log("Appel du contrôleur des attractions");
    const attractions = await this.attractionRepository.findAll(); 

    this.response.render("pages/attractions.ejs");
  }
}