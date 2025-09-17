import { log } from "node:console";
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
    const attractions = await this.attractionRepository.findAll();
    console.log(attractions);

    this.response.render("pages/attractions.ejs", { attractions: attractions });
  }

  public async findAttractionById() {
    const id: number = parseInt(this.request.params.id);
    const attraction = await this.attractionRepository.findById(id);
    this.response.render("pages/attraction.ejs", { attraction: attraction });
  }
}