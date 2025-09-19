import { Controller } from "../libs/Controller";
import { TicketRepository } from "../repositories/TicketRepository";

export class BookingController extends Controller {
    public async bookingpage() {
        const ticketRepository = new TicketRepository();
        const tickets = await ticketRepository.findAll();
        this.response.render("pages/booking.ejs", { tickets: tickets });
    }

    public saveBooking() {
        this.response.render("pages/booking-result.ejs");
    }
}