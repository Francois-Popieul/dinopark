import { Controller } from "../libs/Controller";
import { AttractionRepository } from "../repositories/AttractionRepository";
import { DinosaurRepository } from "../repositories/DinosaurRepository";

export class GlobalController extends Controller {
    public async homepage() {
        const attractionRepository = new AttractionRepository();
        const attractions = (await attractionRepository.findAll()).slice(0, 3);
        const dinosaurRepository = new DinosaurRepository();
        const dinosaurs = (await dinosaurRepository.findAll()).slice(0, 3);
        this.response.render("pages/home.ejs", { attractions: attractions, dinosaurs: dinosaurs });
    }
}