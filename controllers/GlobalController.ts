import { Controller } from "../libs/Controller";
import { AttractionRepository } from "../repositories/AttractionRepository";
import { DinosaurRepository } from "../repositories/DinosaurRepository";
import { TicketRepository } from "../repositories/TicketRepository";

export class GlobalController extends Controller {
    public async homepage() {
        const attractionRepository = new AttractionRepository();
        const attractions = await attractionRepository.findAttractionShortList();
        const dinosaurRepository = new DinosaurRepository();
        const dinosaurs = await dinosaurRepository.findDinoSaurShortList();
        const ticketRepository = new TicketRepository();
        const tickets = await ticketRepository.findAll();
        this.response.render("pages/home.ejs", { tickets: tickets, attractions: attractions, dinosaurs: dinosaurs });
    }
}