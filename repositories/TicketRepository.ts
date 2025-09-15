import { Repository } from "../libs/Repository";
import { Ticket } from "../models/Ticket";


export class TicketRepository extends Repository {
  async findAll(): Promise<Ticket[]> {
    const query = {
      name: "fetch-all-tickets",
      text: `SELECT * FROM ticket`,
    };

    try {
      const result = await this.pool.query(query);

      const data = result.rows.map((row) => {
        return new Ticket(
            row.id_ticket,
            row.icon,
            row.ticket_type,
            row.audience,
            row.details,            
            row.ticket_price);
      });

      return data;
    }
    catch (error) {
      return [];
    }
  }

  async findById(id: number): Promise<Ticket | null> {
    const query = {
      name: "fetch-ticket-by-id",
      text: `SELECT * FROM ticket WHERE id_ticket = $1`,
      values: [id],
    };

    try {
      const result = await this.pool.query(query);

      const ticket = new Ticket(
            result.rows[0].id_ticket,
            result.rows[0].icon,
            result.rows[0].ticket_type,
            result.rows[0].audience,
            result.rows[0].details,            
            result.rows[0].ticket_price);

      return ticket;
    }
    catch (error) {
      return null;
    }
  }
}