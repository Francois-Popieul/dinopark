export interface TicketTypeRow {
    id_ticket: number | null;
    icon: string,
    ticket_type: string,
    audience: string,
    details: string,
    ticket_price: number,

}

export class Ticket {
    protected id_ticket: number | null;
    protected icon: string;
    protected ticket_type: string;
    protected audience: string;
    protected details: string;
    protected ticket_price: number;

    constructor(id: number | null, icon: string, ticket_type: string, audience: string, details: string, ticket_price: number) {
        this.id_ticket = id;
        this.icon = icon;
        this.ticket_type = ticket_type;
        this.audience = audience;
        this.details = details;
        this.ticket_price = ticket_price;
    }
}