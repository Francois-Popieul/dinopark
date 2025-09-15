import { log } from "node:console";
import { Controller } from "../libs/Controller";
import { Request, Response } from "express";
import { TicketRepository } from "../repositories/TicketRepository";

export class TicketController extends Controller {
  private ticketRepository: TicketRepository;

  constructor(request: Request, response: Response) {
    super(request, response);

    this.ticketRepository = new TicketRepository();
  }

  public async browseTickets() {
    const tickets = await this.ticketRepository.findAll();
    console.log(tickets);
    
    this.response.render("pages/attractions.ejs", { tickets: tickets });
  }

  public async findTicketById() {
    const id: number = parseInt(this.request.params.id);
    const ticket = await this.ticketRepository.findById(id);
    this.response.render("pages/ticket.ejs", { ticket: ticket });
  }
}