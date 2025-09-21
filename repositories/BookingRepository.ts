import { Repository } from "../libs/Repository";

export class BookingRepository extends Repository {
    async findAll(): Promise<any[]> {
        const query = {
            name: "fetch-all-tickets",
            text: `SELECT * FROM ticket`,
        };

        return [];
    }

    async addCustomer(firstname: string, surname: string, email: string): Promise<any[]> {
        const query = {
            name: "add-customer",
            text: `INSERT INTO customer (first_name, last_name, email_address)
               VALUES ($1, $2, $3)
               ON CONFLICT (email_address) DO NOTHING
               RETURNING id_customer;`,
            values: [firstname, surname, email],
        };

        const result = await this.pool.query(query);
        return result.rows;
    }

    async addReservation(orderDate: Date, visitDate: Date, customerId: number): Promise<any[]> {
        const query = {
            name: "add-reservation",
            text: `INSERT INTO reservation (order_date, visit_date, id_customer)
            VALUES ($1, $2, $3)
            RETURNING id_reservation;`,
            values: [orderDate, visitDate, customerId],
        };

        const result = await this.pool.query(query);
        return result.rows;
    }

    async getTicketIdByType(type: string): Promise<any[]> {
        const query = {
            name: "fetch-ticket-by-id",
            text: `SELECT id_ticket FROM ticket WHERE ticket_type = $1`,
            values: [type],
        };

        const result = await this.pool.query(query);
        return result.rows;
    }

    async addTicketToReservation(reservationId: number, ticketId: number): Promise<any[]> {
        const query = {
            name: "add-ticket-to-reservation",
            text: `INSERT INTO inclure (id_reservation, id_ticket)
            VALUES ($1, $2)`,
            values: [reservationId, ticketId],
        };

        const result = await this.pool.query(query);
        return [];
    }
}