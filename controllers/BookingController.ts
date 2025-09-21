import { fr } from "zod/v4/locales/index.cjs";
import { Controller } from "../libs/Controller";
import { TicketRepository } from "../repositories/TicketRepository";
import { z } from "zod";
import { BookingRepository } from "../repositories/BookingRepository";

export class BookingController extends Controller {
    public async bookingpage() {
        const ticketRepository = new TicketRepository();
        const tickets = await ticketRepository.findAll();
        this.response.render("pages/booking.ejs", { tickets: tickets });
    }

    public async saveBooking() {
        type Reservation = {
            visitDate: Date;
            ticketQuantities: { [ticketType: string]: string; };
            firstname: string;
            surname: string;
            email: string;
            cardType: string;
            cardNumber: number;
            securityCode: number;
            expiryDate: Date;
        }

        // const verificationSchema = z.object({
        //     visitDate: z.date().refine(date => date > new Date(), {
        //         message: "La date de visite doit être postérieure à la date actuelle.",
        //     }),
        //     ticketQuantities: z.record(z.string(), z.string()),
        //     firstname: z.string().min(2, "Prénom trop court.").max(50, "Prénom trop long."),
        //     surname: z.string().min(2, "Nom trop court.").max(50, "Nom trop long."),
        //     email: z.email("Adresse e-mail non valide."),
        //     cardType: z.enum(['visa', 'mastercard', 'amex']),
        //     cardNumber: z.string().regex(/^\d{16}$/,
        //         { message: "Le numéro de carte doit contenir 16 chiffres.", }),
        //     securityCode: z.number().min(3).max(4),
        //     expiryDate: z.date().refine(date => date > new Date(), {
        //         message: "La date d'expiration doit être postérieure à la date actuelle.",
        //     }),
        // });

        const newReservation: Reservation = {
            visitDate: this.request.body.visit_date,
            ticketQuantities: this.request.body.ticket_quantities,
            firstname: this.request.body.firstname,
            surname: this.request.body.surname,
            email: this.request.body.email,
            cardType: this.request.body.card_type,
            cardNumber: this.request.body.card_number,
            securityCode: this.request.body.security_code,
            expiryDate: this.request.body.expiry_date,
        }
        // const bookingRepository = new BookingRepository;
        // const customer_id = await bookingRepository.addCustomer(
        //     newReservation.firstname,
        //     newReservation.surname,
        //     newReservation.email,
        // );

        // const orderDate = new Date();

        // const reservation_id = await bookingRepository.addReservation(
        //     orderDate,
        //     newReservation.visitDate,
        //     customer_id[0],
        // )

        // console.log(reservation_id[0]);

        // for (const type in newReservation.ticketQuantities) {
        //     const ticketQuantity = parseInt(newReservation.ticketQuantities[type]);
        //     const ticketType = type;
        //     if (ticketQuantity > 0) {
        //         const ticket_id = await bookingRepository.getTicketIdByType(ticketType);
        //         console.log(ticket_id[0]);
        //         await bookingRepository.addTicketToReservation(reservation_id[0], ticket_id[0]);
        //     }

        // const result = verificationSchema.safeParse(newReservation);
        // if (!result.success) {
        //     const errors = z.treeifyError(result.error);
        //     this.response.status(404).render("errors/404.ejs", {
        //         message: "Une erreur s'est produite. Réservation impossible",
        //     });
        //     return;
        // }

        this.response.render("pages/booking-result.ejs", { reservation: newReservation });
    }
}