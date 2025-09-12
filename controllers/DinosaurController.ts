import { Controller } from "../libs/Controller";
import { Request, Response } from "express";
import { DinosaurRepository } from "../repositories/DinosaurRepository";

export class DinosaurController extends Controller {
  private dinosaurRepository: DinosaurRepository;

  constructor(request: Request, response: Response) {
    super(request, response);

    this.dinosaurRepository = new DinosaurRepository();
  }


  public async browseDinosaurs() {
    const dinosaurs = await this.dinosaurRepository.findAll();
    this.response.render("pages/dinosaurs.ejs", { dinosaurs: dinosaurs });
  }

  public async findDinosaurById() {
    const id: number = parseInt(this.request.params.id);
    const dinosaur = await this.dinosaurRepository.findById(id);
    this.response.render("pages/dinosaur.ejs", { dinosaur: dinosaur });
  }
}